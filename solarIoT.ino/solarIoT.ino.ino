
#include "DHT.h"
#include "IRremote.h"

// Leds
const int tLedPins[3] = {13,12,11}; // top Leds pins
const int bLedPins[3] = {9,8,7}; // bottom Leds pins
// Light sensors
const int pLightSensor1 = A0;
const int pLightSensor2 = A2;
int valLightSensor1 = 0;
int valLightSensor2 = 0;
// buzzer sensor
const int pPiezoBuzzer = 6;
// Humidity sensor
const int pHumiditySensor = 5;
DHT dht(pHumiditySensor, DHT11);
// Ultrasonic distance sensor
const int pUSonicSensorEcho = 2;
const int pUSonicSensorTrig = 3;
// IR remote
const int pIRremote = 4;
IRrecv irRecv(pIRremote);  // IR receiver

void setup() {
  // Serial
  Serial.begin(115200);
  
  // leds
  for(int i=0; i<3; i++){
    pinMode(tLedPins[i], OUTPUT);
    pinMode(bLedPins[i], OUTPUT);
    //Serial.print(tLedPins[i]);
    //Serial.print(",");
  }
  
  // Buzzer
  pinMode(pPiezoBuzzer, OUTPUT);
  noTone(pPiezoBuzzer);

  // Humidity Sensor
  dht.begin();

  // Distance sensor
  pinMode(pUSonicSensorEcho, INPUT);
  pinMode(pUSonicSensorTrig, OUTPUT);

  // IR remote
  irRecv.enableIRIn();
}

// Read commands sent to arduino to control the system
void controlArduino(){

  char SerialVal[8];       // Arrray to save commands
  if(Serial.available()>0)
  {
    Serial.println("Controlling system...");
    String str = Serial.readString(); // Read serial value
    //int len = str.length();
    //Serial.println(len);
    //if (str[0]=='#' && str[1]=='#' && str[len-3]=='$' && str[len-4]=='$'){
    str.remove(str.length()-2,2);// remove trailing $$
    str.remove(0,2);             // remove leading ##
    int N = str.length();       // length of string

    int cnt=0;
    for(int i=0; i<N-1; i++)
    {
      if (i%2==0){
        SerialVal[cnt]=str[i]; //Serial.println(SerialVal[cnt]);
        cnt++;
      }
    }

    // Set the Leds
    for(int i=0; i<3; i++)
    {
      setLed(tLedPins[i], SerialVal[i]- '0');
      setLed(bLedPins[i], SerialVal[i+3]- '0');
    }
    // set buzzer
    if ((SerialVal[6]-'0')==1) {
      buzz(); buzz(); buzz();
    }
    //}
    // else ignore
  }
}

// Read the humidity level from the DHT sensor
float getHumidity(DHT &dht){
  float hum = dht.readHumidity();
  //delay(100);
  if(isnan(hum)){
    Serial.println("Failed to read humidity from DHT sensor!");
    return;
  }
  else{
    return hum;
  }
}

// Read temperature with the DHT sensor. If Fahrenheit is true, return the temperature
// in Fahrenheit; Otherwise, return the temperature in Celcius.
float getTemperature(DHT &dht, bool Fahrenheit){
  float temp = dht.readTemperature(Fahrenheit);
  //delay(100);
  //Serial.print(temp);
  if(isnan(temp)) {
    Serial.println("Failed to read temperature from DHT sensor!");
    return;
  }
  else {
    return temp;
  }
}

// Monitor the battery level
int getBatteryLevel(int pinNum)
{
  int sensorValue = analogRead(pinNum); //read the A0 pin value
  float voltage = sensorValue * (5.00 / 1023.00);
  float MaxBatteryLevel=3.7;
  float level=0;
  if (voltage >= MaxBatteryLevel) level=100.0;
  else if(voltage < 0) level=0;
  else level= 100.0*(voltage / MaxBatteryLevel);
  return int(level);
}

// Read distance from the distance sensor. if cm is true, return the distance in cm; Otherwise
// return the distance in inch
float getDistance(bool cm){
  long duration;
  digitalWrite(pUSonicSensorTrig, LOW); // Reset Pin
  delayMicroseconds(2);
  digitalWrite(pUSonicSensorTrig, HIGH); // Set pin high for 10 ms
  delayMicroseconds(10);
  digitalWrite(pUSonicSensorTrig, LOW);
  duration = pulseIn(pUSonicSensorEcho, HIGH); //sound wave travel time in microseconds
  
  if (cm==true) return float(duration / 29 / 2);  // distance in cm
  else return float(duration / 74 / 2);           // distance in inch
}

void blinkLed(int &pinNum){
  digitalWrite(pinNum, HIGH);
  delay(1000);
  digitalWrite(pinNum, LOW);
  delay(1000);
}

void setLed(const int &pinNum, bool state){
  //Serial.println(pinNum);
  if (state==true) digitalWrite(pinNum, HIGH);
  else digitalWrite(pinNum, LOW);
}

//void turnOffLed(int &pinNum){
//  digitalWrite(pinNum, LOW);
//}

void buzz(){
  tone(pPiezoBuzzer, 1000); // 1KHZ signal
  delay(1000);  // Pause 1 sec
  noTone(pPiezoBuzzer); // stpp buzzer
  delay(500);
}

int getLightReading(int pinNum){
  int val = analogRead(pinNum);
  //delay(100);
  if(isnan(val)){
    Serial.println("Failed to read value from ligtht sensor!");
    return;
  }
  else return val;
}

// Read IR sensor data
uint32_t getIRdata(IRrecv &irRecv){
  if(irRecv.decode()){
    return irRecv.decodedIRData.decodedRawData;
  }
  else{
    return 0;
  }
}

bool state=true;
void loop() {

  /**/
  Serial.print("##");
  Serial.print(getTemperature(dht, true));
  Serial.print(",");
  Serial.print(getHumidity(dht));
  Serial.print(",");
  Serial.print(getLightReading(pLightSensor1));
  Serial.print(",");
  Serial.print(getLightReading(pLightSensor2));
  Serial.print(",");
  Serial.print(0.5*(getBatteryLevel(A4)+getBatteryLevel(A5))); // Battery Level in percentage remaining
  Serial.print(",");
  Serial.print(getDistance(false));
  Serial.print(",");
  Serial.print(getIRdata(irRecv), HEX);
  Serial.print("");
  Serial.println("$$");

  // Control the system
  controlArduino();
    
  irRecv.resume(); // Set IR ready to get new command
  delay(2000);
}
