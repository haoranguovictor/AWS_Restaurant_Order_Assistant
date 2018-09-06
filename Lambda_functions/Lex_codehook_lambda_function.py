import os
import time
from dateutil.parser import parse
from datetime import datetime

def elicit_slot(intent, slots, slot_to_elicit, message):
    return {
        'dialogAction': {
            'type': 'ElicitSlot',
            'intentName': intent['name'],
            'slots': slots,
            'slotToElicit': slot_to_elicit,
            'message': message
        }
    }

def build_validation(is_valid, violated_slot, message):
    if message is None:
        return {
            "Valid": is_valid,
            "violatedSlot": violated_slot,
        }

    return {
        'Valid': is_valid,
        'violatedSlot': violated_slot,
        'message': {'contentType': 'PlainText', 'content': message}
    }

def Slots_validate(slots):

    cuisine = slots['Cuisine']
    time = slots['Time']
    date = slots['Date']
    number = slots['Number']
    phone = slots['Phone']
    
    now = datetime.now()
    
    service_cuisine = ['CHINESE', 'JAPANESE', 'KOREAN', 'ITALIAN', 'AMERICAN', 'MEXICAN', 'THAI']
    
    if cuisine is not None and cuisine.upper() not in service_cuisine:
        return build_validation(False, 'Cuisine',
        'Sorry, we can\'t support service for that cuisine. Please give us a different cuisine.')
        
    if number is not None and int(number) > 8:
        return build_validation(False, 'Number', 
        'Sorry, we can\'t support service for that many people. Please give us a different number.')
            
    if date is not None:
        try:
            parsed_date = parse(date)
        except:
            return build_validation(False, 'Date',
            'Sorry, the date is invalid. Could you please check that and enter it again?')
            
        delta_date = parsed_date - now
        if delta_date.days < -1:
            return build_validation(False, 'Date', 
            'Sorry, we only support service from at least two minutes later. Please give us a different date.')
    
    if time is not None:
        try:
            parsed_time = parse(date + ' ' + time)
        except:
            return build_validation(False, 'Time',
            'Sorry, the time is invalid. Could you please check that and enter it again?')
        delta_time = parsed_time - now
        if delta_time.days < 0 or (delta_time.days == 0 and delta_time.seconds < 120):
            return build_validation(False, 'Time', 
            'Sorry, we only support service from at least two minutes later. Please give us a different time.')
    
    if phone is not None:
        if phone[0] == '+':
            return build_validation(False, 'Phone', 
            'Sorry, we only support service in the US. Please give us a phone number without international code.')
        if len(phone) != 10:
            return build_validation(False, 'Phone', 
            'Sorry, we only support service in the US. Please give us a valid US phone number.')
            
    return build_validation(True, None, None)

def delegate(slots):
    return {
        'dialogAction': {
            'type': 'Delegate',
            'slots' : slots
        }
    }
    
def lambda_handler(event, context):
    # TODO implement
    os.environ['TZ'] = 'America/New_York'
    time.tzset()
    
    source = event['invocationSource']
    intent = event['currentIntent']
    if intent['name'] != 'RestaurantRecommend':
        raise Exception('Intent not supported.')
    
    slots = intent['slots']
    
    if source == 'DialogCodeHook':
        validation = Slots_validate(slots)
        print(validation)
        if not validation['Valid']:
            slots[validation['violatedSlot']] = None
            return elicit_slot(intent,
                               slots,
                               validation['violatedSlot'],
                               validation['message'])
                               
        return delegate(slots)
