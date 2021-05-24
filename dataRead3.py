import requests
import serial
import time
import json
import random
import time

# Using the Python Device SDK for IoT Hub:
#   https://github.com/Azure/azure-iot-sdk-python
# The sample connects to a device-specific MQTT endpoint on your IoT Hub.
from azure.iot.device import IoTHubDeviceClient, Message

# The device connection string to authenticate the device with your IoT hub.
# Using the Azure CLI:
# az iot hub device-identity show-connection-string --hub-name {YourIoTHubName} --device-id MyNodeDevice --output table
CONNECTION_STRING = "REDACTED"

# Define the JSON message to send to IoT Hub.


MSG_TXT = '{{"rawdata": {rawdata},"batterylevel": {batterylevel}}}'

def iothub_client_init():
    # Create an IoT Hub client
    client = IoTHubDeviceClient.create_from_connection_string(CONNECTION_STRING)
    return client

def iothub_client_telemetry_sample_run(payload):

    try:
        client = iothub_client_init()
        print ( "IoT Hub device sending periodic messages" )

        a = 0


        while a < 1:
            # Build the message with simulated telemetry values.
            # temperature = TEMPERATURE + (random.random() * 15)
            # humidity = HUMIDITY + (random.random() * 20)
            # msg_txt_formatted = MSG_TXT.format(temperature=temperature, humidity=humidity)
            # message = Message(msg_txt_formatted)

            # # Add a custom application property to the message.
            # # An IoT hub can filter on these properties without access to the message body.
            # if temperature > 30:
            #   message.custom_properties["temperatureAlert"] = "true"
            # else:
            #   message.custom_properties["temperatureAlert"] = "false"

            ##construct message from payload

            rawdata = str(json.dumps(payload))

            print(type(rawdata))
            batterylevel = str(payload['battery_level'])

            print(batterylevel)


            msg_txt_formatted = MSG_TXT.format(rawdata=rawdata, batterylevel = batterylevel)
            message = Message(msg_txt_formatted)

            message.custom_properties["door1"] = payload['door1']
            message.custom_properties["door2"] = payload['door2']
            
            # message.custom_properties["temperatureAlert"] = "true"


            # Send the message.
            print( "Sending message: {}".format(message) )
            client.send_message(message)
            print ( "Message successfully sent" )
            time.sleep(1)

            a +=1

    except KeyboardInterrupt:
        print ( "IoTHubClient sample stopped" )

# if __name__ == '__main__':
#     print ( "IoT Hub Quickstart #1 - Simulated device" )
#     print ( "Press Ctrl-C to exit" )
#     iothub_client_telemetry_sample_run()





def datasendvirtual():

        url = 'https://29570a0d78a47ca67610c08e21fcafbe.m.pipedream.net'

        payload = {}

        payload['temperature'] = "74.2"
        payload['humidity'] = "23.9"
        payload['room_1_light'] = "148"
        payload['room_2_light'] = "172"
        payload['battery_level'] = "28.5"
        payload['charging'] = "false"
        
        payload['door1'] = "closed"
        
        payload['door2'] = "open"
        
        payload['IR_code'] = "0"
        payload['PM2.5'] = 3
        payload['PM10'] = 6
        payload['PM5'] = 4
        payload['VOC'] = 1
        payload['CO2'] = 16
        

        print (payload)


        x = requests.post(url, data = payload)
        print(x.status_code)


        iothub_client_telemetry_sample_run(payload)

        ##input here

        # instr = input("enter led/buzzer state : ")
        





def datasendreal(port):
    # ser = serial.Serial('/dev/ttyACM0', 115200)

    ser = serial.Serial(port, 115200)

    time.sleep(2)
    url = 'https://29570a0d78a47ca67610c08e21fcafbe.m.pipedream.net'
    flag = False
    n=0
    moved = 0
    while True:

        dataRaw = ser.readline()
        print(dataRaw)
        dataRaw = dataRaw.decode()

        data = str(dataRaw.strip())

        if '##' not in data:
            continue
        if '$$' not in data:
            continue
        

        data = data.replace("$$","")
        data = data.replace("##","")

        datas = data.split(",")
        tem = datas[0]
        hum = datas[1]
        light1 = datas[2]
        light2 = datas[3]
        batt = datas[4]
        dis = datas[5]
        ir = datas[6]
        pm25 = datas[7]
        pm5 = datas[8]
        pm10 = datas[9]
        voc = datas[10]
        co2 = datas[11]

        # data = data.split("b'")[1]
        # data = data.replace("\'","")

        print(data)
        

        ##separate here
        print (tem)
        print (hum)
        print (light1)
        print (light2)
        print (batt)
        print (float(dis)) 
        print (ir)

        payload = {}

        payload['temperature '] = tem
        payload['humidity'] = hum
        payload['room_1_light'] = light1
        payload['room_2_light'] = light2
        payload['battery_level'] = batt
        payload['charging'] = "false"
        if float(dis) < 5.0:
            payload['door1'] = "closed"
        else:
            payload['door1'] = "open"

        if float(dis) < 5.0:
            payload['door2'] = "closed"
        else:
            payload['door2'] = "open"
        
        payload['IR_code'] = ir
        payload['PM2.5'] = pm25
        payload['PM10'] = pm10
        payload['PM5'] = pm5
        payload['VOC'] = voc
        payload['CO2'] = co2
        

        print (payload)


        x = requests.post(url, data = payload)
        print(x.status_code)


        iothub_client_telemetry_sample_run(payload)

        ##input here

        # instr = input("enter led/buzzer state : ")
        
        instr = "##1,0,0,0,1,1,0$$"  ##change this to incoming

        instr = instr.encode()

        ser.write(instr)

        ser.flush()




        




        
        if flag == True:
            
            motionAVG = data.partition("|")[0]
            temp = data.partition("|")[2]    
            co2Level = temp.partition("|")[0]
            temp = temp.partition("|")[2]
            tvocLevel = temp.partition("|")[0]
            temp = temp.partition("|")[2]
            temperature = temp.partition("|")[0]
            temp = temp.partition("|")[2]
            humidity = temp.partition("|")[0]
            temp = temp.partition("|")[2]
            probeTemp = temp.partition("|")[0]
            n=n+1
            

            if n == 10:
                dataObj = {'moved':moved,
                        'co2':co2Level,
                        'TVOC': tvocLevel,
                        'Temperature':temperature,
                        'Humidity': humidity,
                        'ProbeT': probeTemp,}
                #x = requests.post(url, data = dataObj)
                #print(x.status_code)
                n=0

            # print(motionAVG)
            # print(co2Level)
            # print(tvocLevel)
            # print(temperature)
            # print(humidity)
            # print(probeTemp)

            print('Motion(avg): {}, CO2: {}, TVOC: {}, Temperature: {}, Humidity: {}, ProbeT: {}, MovedL {} '.format(motionAVG,co2Level,tvocLevel,temperature,humidity,probeTemp,moved))
        
        if (data == 'StartingDataStream'):
            print("receiving data")
            flag = True
            

for i in range(1,50):

    datasendvirtual()

    time.sleep(2)
