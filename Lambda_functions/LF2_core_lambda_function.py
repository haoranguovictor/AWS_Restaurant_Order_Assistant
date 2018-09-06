# This function polls message regulary from SQS, using Cloud Watch
# If message is a recommendation request, then call Elastic Search to get item form DynamoDB, SNS is then used to send message
# Else if the message is a new rating record, update the rating data in DynamoDB
# Else the message should be an order request, directly use SNS to inform the corresponding restaurant

from __future__ import print_function

import argparse
import json
import pprint
from botocore.vendored import requests

import boto3
import time

import decimal
from boto3.dynamodb.conditions import Key, Attr
from botocore.exceptions import ClientError

from elasticsearch import Elasticsearch, RequestsHttpConnection
from requests_aws4auth import AWS4Auth

def lambda_handler(event, context):
    #Connect to es
    AWS_ACCESS_KEY = 'YOUR_KEY'
    AWS_SECRET_KEY = 'YOUR_KEY'
    region = 'us-east-1' 
    service = 'es'

    awsauth = AWS4Auth(AWS_ACCESS_KEY, AWS_SECRET_KEY, region, service)
    host = 'YOUR_HOST'

    es = Elasticsearch(
        hosts=[{'host': host, 'port': 443}],
        http_auth=awsauth,
        use_ssl=True,
        verify_certs=True,
        connection_class=RequestsHttpConnection
        )
    
        
    # Create SQS client
    sqs = boto3.client('sqs')
    queue_url = 'YOUR_URL'
    
    # Receive message from SQS queue
    responsesqs = sqs.receive_message(
        QueueUrl=queue_url,
        AttributeNames=[
            'SentTimestamp'
        ],
        MaxNumberOfMessages=1,
        MessageAttributeNames=[
            'All'
        ],
        VisibilityTimeout=0,
        WaitTimeSeconds=0
    )
    
    print(responsesqs)
    print(len(responsesqs))
    
    # Parse message
    info = responsesqs['Messages'][0]
    print(info)
    
    # Delete the message
    
    receipt_handle = info['ReceiptHandle']
    
    
    responsesqs = sqs.delete_message(
        QueueUrl='YOUR_URL',
        ReceiptHandle=receipt_handle
    )
    
    
    # Helper class to convert a DynamoDB item to JSON.
    class DecimalEncoder(json.JSONEncoder):
        def default(self, o):
            if isinstance(o, decimal.Decimal):
                if o % 1 > 0:
                    return float(o)
                else:
                    return int(o)
            return super(DecimalEncoder, self).default(o)
    
    body=info['Body']
    print(body)
    
    # Parse Message Body
    body_dict=eval(body)
    print(body_dict)
    
    # Judging - Recommendation Request
    if 'City' in body_dict:
        
        #{'Cuisine': 'chinese', 'Number': '8', 'Phone': '917***4385', 'Time': '12:00', 'City': 'new york', 'Date': '2018-05-07'}
        
        location=body_dict['City']
        term=body_dict['Cuisine']
        phone="+1"+body_dict['Phone']
        number=body_dict['Number']
        date=body_dict['Date']
        ttime=body_dict['Time']
        date_time=date+" "+ttime
        print(phone)
        
        print(date_time)
        
        #search es 
        res = es.search(index="elastic_restaurant", doc_type="search", body=
            {
                "from": 0, "size":2,
                "query": 
                    {
                        "match": 
                      {
                         "cuisine": term
                      }
                    },
                "sort":[
                    {"hid_rate":{"order":"desc"}}
                ]
            }
            )
        
        result_id=[]
        print("%d documents found" % res['hits']['total'])
        for doc in res['hits']['hits']:
            print("%s %s" % (doc['_id'], doc['_source']['cuisine']))
            result_id.append(doc['_id'])
        
        #search in dynamodb
                
        dynamodb = boto3.resource("dynamodb")
        table = dynamodb.Table('myrestaurants')
        
        message_list=[]
        for key in result_id:
            business_id = key
            try:
                response = table.get_item(
                    Key={
                    'ID': business_id
                    }
                )
            except ClientError as e:
                print(e.response['Error']['Message'])
            else:
                item = response['Item']
                print("GetItem succeeded:")
                print(json.dumps(item, indent=4, cls=DecimalEncoder))
                name=item["name"]
                #address=item["address"]
                message_key=name
                message_list.append(message_key)
                
        message0="Hello, here are my "+term+" suggestions for "+ number +" people for " + date_time + " :"
        message1='\n1. '+ message_list[0]
        message2='\n2. '+ message_list[1]
        #message3='\n3. '+ message_list[2]
        #message4='\n4. '+ message_list[3]
        #message5='\n5. '+ message_list[4]
        
        message=message0+message1+message2#+message3+message4+message5
        print(message)
        
        # SNS
        client = boto3.client(
            "sns"
        )
        topic = client.create_topic(Name="notifications1")
        topic_arn = topic['TopicArn'] 
        client.publish(
            PhoneNumber=phone,
            Message=message
        )
    
    # Review Message and Ratings    
    elif 'label' in body_dict and body_dict['label']=='rate':
        #Update rate
        #structure: {'label':"rate", 'rname': restaurant, 'text': text, 'rating': rating, 'hidrating': hidrate}
        print("Rate detected")
        
        # Loading DynamoDB
        dynamodb = boto3.resource("dynamodb")
        table = dynamodb.Table('myrestaurants')
        
        # Parsing
        #rname = body_dict['rname']
        new_rate = float(body_dict['rating'])
        new_hid_rate = float(body_dict['hidrating'])
        rid = body_dict["id"]
        print(rid, type(rid), new_rate, new_hid_rate)
        '''
        # Input Data Format
        item_data = {
            'ID': ID,
            'cuisine': cuisine,
            'name': name,
            'rate': rate,
            'hid_rate': hid_rate,
            'reviewnum': reviewnum,
            'phone': phone,
            'address': address,
            'zipcode': zipcode,
            'dish1': dish1,
            'dish2': dish2,
            'dish3': dish3
        }
        '''
        
        # Querying From Dynamo
        try:
            response = table.get_item(
                Key={
                    'ID': str(rid)
                    #'name': str(rname)
                    }
                )
        except ClientError as e:
            print("Dynamo query error!")
            print(e.response['Error']['Message'])
        else:
            item = response['Item']
            print("GetItem succeeded:")
            print(json.dumps(item, indent=4, cls=DecimalEncoder))
            #print("rate is", json.dumps(item, indent=4, cls=DecimalEncoder)["rate"])
            
            id = item["ID"]
            print(id, type(id))
            print(item["rate"], type(item["rate"]))
            
            old_rate = float(item["rate"])
            old_hid_rate = float(item["hid_rate"])
            old_reviewnum = int(item["reviewnum"])
            print(old_rate, old_hid_rate, old_reviewnum)
            
            new_rate = (old_rate*old_reviewnum + new_rate)/(old_reviewnum+1)
            new_hid_rate = (old_hid_rate*old_reviewnum + new_hid_rate)/(old_reviewnum+1)
            
            update_rate = decimal.Decimal(str(new_rate))
            update_hid_rate = decimal.Decimal(str(new_hid_rate))
            
            # Update Dynamo
            try:
                response = table.update_item(
                    Key={
                        "ID": id
                        
                    },
                    UpdateExpression='SET rate = :val1, hid_rate = :val2, reviewnum = :val3',
                    ExpressionAttributeValues={
                        ':val1': update_rate,
                        ':val2': update_hid_rate,
                        ':val3': old_reviewnum+1
                    }
                )
            except ClientError as e:
                print(e.response['Error']['Message'])
            else:
                print("Update succeeded:")
                print("Updated", item)
                
            #Update Elastic Search
            try:
                es.update(index='elastic_restaurant',doc_type='search',id=id,
                        body={
                            "doc":{
                                "hid_rate": new_hid_rate,
                                "rate": new_hid_rate
                                  }           
                        }
                    )
            except:
                print("Updating ES failed")
            else:
                print("ES updating succeeded")
    
    # Order Request
    elif 'label' in body_dict and body_dict['label']=='order':
        #ORDER
        print("Order deteted")
        # Parsing
        print(body_dict)
        order_id = body_dict["id"]
        dish1 = body_dict["dishes"]["dish1"]
        amount1 = body_dict["dishes"]["amount1"]
        dish2 = body_dict["dishes"]["dish2"]
        amount2 = body_dict["dishes"]["amount2"]
        
        # DynamoDB
        # Loading DynamoDB
        dynamodb = boto3.resource("dynamodb")
        table = dynamodb.Table('myrestaurants')
        
        # Querying From Dynamo_table_restaurant
        try:
            response = table.get_item(
                Key={
                    'ID': str(order_id)
                    #'name': str(rname)
                    }
                )
        except ClientError as e:
            print("Dynamo query error!")
            print(e.response['Error']['Message'])
            pass
        else:
            item = response['Item']
            print("GetItem succeeded:")
            item_json = eval(json.dumps(item, indent=4, cls=DecimalEncoder))
            print("item_json", item_json, type(item_json))
        # Edit Message
        message = "Hi " + item_json["name"] + ". You've got a new order from COMS6998 team 8! Please prepare it in time!\n" 
        
        # Querying From Dynamo_table_dishes
        def query_dish_db(table_name, dish_id):
            table = dynamodb.Table('mydishes')
            try:
                print("dish_id", dish_id)
                response = table.get_item(
                    Key={
                        'ID': str(dish_id)
                        #'name': str(rname)
                        }
                    )
            except ClientError as e:
                print("Dynamo_table_dishes query error!")
                print(e.response['Error']['Message'])
                pass
            else:
                #print(response)
                item_dish = response['Item']
                #print("Get Dish Item succeeded:")
                item_json_dish = eval(json.dumps(item_dish, indent=4, cls=DecimalEncoder))
                #print("item_json_dish", item_json_dish, type(item_json_dish))
                return item_json_dish
        
        dish1_json = query_dish_db('mydishes',item_json["dish1"])
        dish2_json = query_dish_db('mydishes',item_json["dish2"])
        
        if amount1:
            message += dish1_json['name'] + ", amount:" + str(amount1) + ".\n"
        if amount2:
            message += dish2_json['name'] + ", amount:" + str(amount2) + ".\n"
        
        message += "Total price:" + str(float(dish1_json['price'])*amount1 + float(dish2_json['price'])*amount2)
            
        print(message)
        phone = "+1" + item_json["phone"]
        print(phone)
        # SNS
        client = boto3.client(
            "sns"
        )
        topic = client.create_topic(Name="notifications1")
        topic_arn = topic['TopicArn'] 
        try:
            response = client.publish(
                PhoneNumber=phone,
                Message=message
            )
            print("Order succeeded")
            print(response)
        except ClientError as e:
            print("SNS error")
            print(e.response['Error']['Message'])
    
    else:
        print("Unknown Request")
