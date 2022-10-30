/*
 * Last updated : 28-10-22
 * Author : Yash Giri
 * Name : Servo Master
 * Keywords : Servo, Servo Master, Witblox
 * !!!!!!!!Enter Your Cedentials
 * Theory:
 *  When the device turns on, it will look for an internet connection.
 *  A configured device will connect to the wifi and talk to firebase.
 *  It needs to listen to changes and upon change get the output string
 *  Onces an output is acquired, we need to decode the output. The current format for the output is:
 *       Angle_start,Angle_End,Delay,Servo,Step_Size|
 *    Each property is seperated by a ","
 *    Each step is seperated by a "|"
 *    Each step has a "|" at the end
 *    There are no spaces in the string
 *    Angle_Start defines the initial position for the servo
 *    Angle_End defines the final position for the servo
 *    Delay defines the duration between each angle
 *    Servo defines which servo to apply the steps to
 *    Step_Size defines basically nothing but intends to define the size of each step
 *  We first count how many steps there are by counting the number of "|" there are
 *  Then we split the string into componental steps
 *  Once we have an array of steps we break each step into componental information blocks seperated by ","
 *  and then we turn the string blocks to int and globally
 *  Pinis used:
 *  Input Pins for Trigger Event
 *    15, 12, 13, 2
 *  Servo Pins
 *    0, 14, 16, 5
 *  We will probably be using only 1 of the input pins leaving the other 3 free to be used for other fun things.
 *  The esp circuit will need 3.3-4 volts in order to run and the servos will need 5-9 volts to run, but the current draw
 *  from them should be considered high.
 */

// Initialize all the libraries
#include <Servo.h>
#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>
#include <WiFiManager.h>

// These are the auth keys, keep them a secret
#define FIREBASE_HOST "servo-master-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "u0pvcWkmIdFO2TUlINZb5hy70gjXFgZt0IuKgLUn"

FirebaseData fbdo;

String device_id = "testmod101"; // Enter Your Own Auth | 10 digits needed
String const device_path = device_id + "/step";

// These are all the servos

Servo s1;
Servo s2;
Servo s3;
Servo s4;
// This is a test string to see if the process is working or not
String test_data = "0,180,10,0,1|0,180,10,1,1|180,0,10,0,1|180,0,10,1,1|";

int inp1 = 13;
int inp2 = 12;
int inp3 = 15;
int inp4 = 2;
int directionSwitcher = 4;
int modeSwitcher = 9;

// This variable will store the daabase string for this device.
String data_from_db = "";

// These variables will store the data after being processed.
int angle0 = 0;
int angle1 = 0;
int delay_time = 0;
int servo = 0;
int step_size = 1;
boolean devMode = true;

/**
 * @brief This funciton gets the data from firebse and stores it in the "data_from_db" variable.
*/
void get_data()
{
    if (Firebase.getString(fbdo, device_path))
    {
        data_from_db = fbdo.stringData();
        generate_parts(data_from_db);
        delay(100);
    }
}
/**
 * @brief Decodes incoming string into the proper format.
 * 
 * @param a String from Firebase
 */
void decode_easy(String a)
{
    String parts[5] = {};
    int index[5] = {};
    index[0] = a.indexOf(",");
    index[1] = a.indexOf(",", index[0] + 1);
    index[2] = a.indexOf(",", index[1] + 1);
    index[3] = a.indexOf(",", index[2] + 1);
    index[4] = a.indexOf(",", index[3] + 1);

    parts[0] = a.substring(0, index[0]);
    parts[1] = a.substring(index[0] + 1, index[1]);
    parts[2] = a.substring(index[1] + 1, index[2]);
    parts[3] = a.substring(index[2] + 1, index[3]);
    parts[4] = a.substring(index[3] + 1);

    // Serial.println(parts[0]+" "+parts[1]+" "+parts[2]+" "+parts[3]+" "+parts[4]);

    angle0 = parts[0].toInt();
    angle1 = parts[1].toInt();
    delay_time = parts[2].toInt();
    servo = parts[3].toInt();
    step_size = parts[4].toInt();
}
/**
 * @brief This function performs all the functionality.
 */
void process()
{
    // Serial.println("A0: "+String(angle0)+"\nA1: "+String(angle1)+"\nDelay: "+String(delay_time)+"\nServo: "+String(servo)+"\nstep: "+String(step_size));
    // For the delay step, check if the angle0 and angle1 are the same, if so add delay and return
    // Serial.println(digitalRead(inp1));

    //  Serial.print("##########");
    //  Serial.print("\t");
    //  Serial.println(angle0);
    //  Serial.print("##########");
    //  Serial.print("\t");
    //  Serial.println(angle1);
    //  Serial.print("##########");
    //  Serial.print("\t");
    //  Serial.println(delay_time);
    //  Serial.print("##########");
    //  Serial.print("\t");
    //  Serial.println(servo);

    if (angle0 == 360 && angle1 == 360 && delay_time == 9999 && step_size == 0)
    {
        bool test = true;
        while (test)
        {
            if (servo == 0)
            {
                if (digitalRead(inp1) == HIGH)
                {
                    test = false;
                }
            }
            else if (servo == 1)
            {
                if (digitalRead(inp2) == HIGH)
                {
                    test = false;
                }
            }
            else if (servo == 2)
            {
                if (digitalRead(inp3) == HIGH)
                {
                    test = false;
                }
            }
            else if (servo == 3)
            {
                if (digitalRead(inp4) == HIGH)
                {
                    test = false;
                }
            }
            delay(1);
        }
    }
    
    else if (angle0 == angle1)
    {
        delay(delay_time);
        return;
    }
    // If the delay_time is set to 0, go from angle0 to angle1 immidiatly

    else if (delay_time == 0)
    {
        switch (servo)
        {
        case 0:
            s1.write(angle0);
            delay(15);
            s1.write(angle1);
            break;
        case 1:
            s2.write(angle0);
            delay(15);
            s2.write(angle1);
            break;
        case 2:
            s3.write(angle0);
            delay(15);
            s3.write(angle1);
            break;
        case 3:
            s4.write(angle0);
            delay(15);
            s4.write(angle1);
            break;
        }
        delay(15);
    }

    // If the angle0 is less than angle1, move forward
    else if (angle0 < angle1)
    {
        for (int i = angle0; i <= angle1; i += step_size)
        {
            switch (servo)
            {
            case 0:
                s1.write(i);
                break;
            case 1:
                s2.write(i);
                break;
            case 2:
                s3.write(i);
                break;
            case 3:
                s4.write(i);
                break;
            }
            delay(delay_time);
        }
    }

    // If the angle0 is greater than angle1, move backward
    else if (angle0 > angle1)
    {
        for (int i = angle0; i >= angle1; i -= step_size)
        {
            switch (servo)
            {
            case 0:
                s1.write(i);
                break;
            case 1:
                s2.write(i);
                break;
            case 2:
                s3.write(i);
                break;
            case 3:
                s4.write(i);
                break;
            }
            delay(delay_time);
        }
    }
}

/**
 * @brief Breaks down the string into components and performs the decode and process functions too.
 * 
 * @param a 
 */
void generate_parts(String a)
{
    int count = 0;
    String parts[50] = {};
    String part = "";

    for (int i = 0; i < a.length(); i++)
    {
        if (a[i] == '|')
        {
            count += 1;
        }
    }
    int i0 = 0;
    int i1 = 0;
    // Fill the parts array
    for (int i = 0; i < count; i++)
    {
        i0 = a.indexOf('|', i1 + 1);
        part = a.substring(i0 + 1, i1);
        parts[i] = part;
        i1 = i0;
    }
    // Filter the parts array
    for (int i = 0; i < count; i++)
    {
        if (parts[i][0] == '|')
        {
            parts[i] = parts[i].substring(1);
        }
        if (parts[i][parts[i].length() - 1] == '|')
        {
            parts[i] = parts[i].substring(0, parts[i].length() - 1);
        }
        decode_easy(parts[i]);
        process();
    }
}
/**
 * @brief The code that should run if toggle is on.
 * 
 */
void setupMaster(){
    Serial.println("\nInit!");
    WiFiManager wm;
    bool res;
    res = wm.autoConnect("Servo_Master");
    if (!res)
    {
        Serial.println("Failed To Connect");
    }
    else
    {
        Serial.print("Connection Established");
    }
    // WiFi.begin("I hate you all", "n00dl3xyz");  //Enter Your Creds
    //  while(!(WiFi.status() == WL_CONNECTED)){
    //    Serial.print(".");
    //    delay(200);
    //  }
    // Serial.println("\nConnected");
    Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
    Firebase.reconnectWiFi(true);

    pinMode(inp1, INPUT);
    pinMode(inp2, INPUT);
    pinMode(inp3, INPUT);
    pinMode(inp4, INPUT);
    s1.attach(0, 500, 2400);
    s2.attach(14, 500, 2400);
    s3.attach(16, 500, 2400);
    s4.attach(5, 500, 2400);

    while (true)
    {
        get_data();
    }
}
/**
 * @brief Enable Inputs from a function.
 * 
 */
void enableInputs(){
    if(devMode){
        Serial.println("Enebaling Inputs");
    }
    pinMode(inp1,INPUT);
    pinMode(inp2,INPUT);
    pinMode(inp3,INPUT);
    pinMode(inp4,INPUT);
    pinMode(directionSwitcher,INPUT);
    pinMode(modeSwitcher,INPUT);
    if(devMode){
        Serial.println("Enabled Inputs");
    }
}
/**
 * @brief Enable Serial from a function.
 * 
 */
void enableSerial(){
    Serial.begin(115200);
    if(devMode){
        Serial.println("Enabled Serial Comms");
    }
}
/**
 * @brief Enable Servos from a function.
 * 
 */
void enableServos(){
    if(devMode){
        Serial.println("Enabling Servos");
    }
    s1.attach(0, 500, 2400);
    s2.attach(14, 500, 2400);
    s3.attach(16, 500, 2400);
    s4.attach(5, 500, 2400);
    if(devMode){
        Serial.println("Enabled Servos");
    }
}
/**
 * @brief Enable Wifi from a function.
 * 
 */
void enableWifi(){
    if(devMode){
        Serial.println("Enabling Wifi");
    }
    WiFiManager wm;
    bool res;
    res = wm.autoConnect("Servo_Master");
    if (!res)
    {
        Serial.println("Failed To Connect");
        while(1){
            delay(100);
        }
    }
    else
    {
        Serial.print("Connection Established");
    }
    if(devMode){
        Serial.println("Enabled Wifi");
    }
}
/**
 * @brief Enable Firebase from a function.
 * 
 */
void enableFirebase(){
    if(devMode){
        Serial.println("Enabling Firebase");
    }
    Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
    Firebase.reconnectWiFi(true);
    if(devMode){
        Serial.println("Enabled Firebase");
    }
}
/**
 * @brief This runs the manual mode of the project.
 * 
 */
void defaultMode(){
    int s1Pos = 0;
    int s2Pos = 0;
    int s3Pos = 0;
    int s4Pos = 0;
    int direction = 1;
    while(true){
        if(digitalRead(directionSwitcher)){
            direction = -direction;
        }
        if(digitalRead(inp1)){
            if(s1Pos != 180){
            s1Pos+=direction;
            }
        }
        if(digitalRead(inp2)){
            if(s2Pos !=180){
                s2Pos+=direction;
            }
        }
        if(digitalRead(inp3)){
            if(s3Pos !=180){
                s3Pos+=direction;
            }
        }
        if(digitalRead(inp4)){
            if(s4Pos !=180){
                s4Pos+=direction;
            }
        }
    }
}
void runMain(){
    enableSerial();
    enableInputs();
    enableServos();
    if(digitalRead(modeSwitcher)){
        enableWifi();
        enableFirebase();
        while(true){
            get_data();
        }
    }else{
        defaultMode();
    }

}


void setup()
{
    if(digitalRead(9) == true){

    }else{

    }
}

void loop()
{
}
