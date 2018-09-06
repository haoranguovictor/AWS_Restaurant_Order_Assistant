import boto3
def lambda_handler(event, context):

    client = boto3.client('lex-runtime')
    #userinput = event["message"][0]['unstructured']['text']

    response = client.post_text(
        botName='RecBot',
        botAlias='RecBot',
        userId=event['messages'][0]['unstructured']['sessiontoken'],
        #userId="123",
        sessionAttributes={},
        inputText= event['messages'][0]['unstructured']['text']
        #inputText="hi"
    )
    
    return response["message"]
