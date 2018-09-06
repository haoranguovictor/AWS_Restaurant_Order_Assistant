import boto3
from botocore.exceptions import ClientError
def lambda_handler(event, context):
    # TODO implement
    # Data structure:
    # "{"rname":"1","dishes":{"dish1":"dish1","amount1":2,"dish2":"dish2","amount2":1}}"
    # SQS loading
    sqs = boto3.resource('sqs')
    # Message Prepare
    # Parsing
    id = event["rname"]
    dishes = event["dishes"]
    
    '''
    dish1 = dishes["dish1"]
    dish2 = dishes["dish2"]
    amount1 = dishes["amount1"]
    amount2 = dishes["amount2"]
    '''
    
    sqsmessage = str({'label':"order", 'id':id, 'dishes': dishes})
    print("SQS_send:", sqsmessage)
    
    # Get the queue. This returns an SQS.Queue instance
    queue = sqs.get_queue_by_name(QueueName='test')
    
    try:
        response = queue.send_message(MessageBody= sqsmessage)
    except:
        print("SQS error")
        #print(response)

    
    
    return 'Order-Lambda Response!'+ sqsmessage
