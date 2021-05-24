import requests
import serial
import time

# ser = serial.Serial('/dev/ttyACM0', 115200)

ser = serial.Serial('COM5', 115200)

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

    print (payload)


    x = requests.post(url, data = payload)
    print(x.status_code)


    ##input here

    instr = input("enter led/buzzer state : ")
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
        
