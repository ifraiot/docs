---
id: getStarted
title: ตัวอย่าง การใช้แพลตฟอร์ม IFRA 
sidebar_label: เริ่มต้นใช้งาน
---

สำหรับผู้ใช้งานเริ่มต้นที่ยังไม่มีพื้นฐานสำหรับการใช้งาน แพลตฟอร์ม IoT มาก่อนนั้น ในตัวอย่างนี้จะแสดงการ เปิด - ปิดไฟ LED ด้วย ESP32 ผ่านแพลตฟอร์ม IFRA 
    เริ่มต้นนั้นอุปกรณ์ที่จะต้องเตรียมคือ 
    - บอร์ด ESP32
    - สาย USB ใช้สำหรับการเบิร์นลงในบอร์ด
    Software ที่จะต้องเตรียมคือ คือ
    - IDE Arduino สำหรับการเขียน Code ลงในบอร์ด

โดยหากมีอุปกรณ์และSoftwareพร้อมแล้ว จะมีขั้นตอนการทำดังนี้
    - การลงทะเบียนอุปกรณ์ภายในแพลตฟอร์ม IFRA 
    - การเขียน code และ เบิร์นลงบอร์ด ESP32 ด้วย IDE Arduino 
    - การสร้าง Dashboard ในแพลตฟอร์ม IFRA 


- การลงทะเบียนอุปกรณ์ภายในแพลตฟอร์ม IFRA   

เริ่มต้นผู้ใช้งาน จะต้อง Register ผ่าน https://ws.ifra.io/ ก่อน โดยจะต้องเลือก Package สำหรับเริ่มต้นใช้งานผ่าน https://ws.ifra.io/ สำหรับ package นั้น ในแพลตฟอร์มจะมี package ฟรีสำหรับใช้ทดลองใช้งานอยู่

หลังจาก Register และเลือก package เรียบร้องแล้ว ระบบจะพาเข้ามายังหน้าหลักของแพลตฟอร์มดังรูป

![Image](/img/dashboard_home.png)

โดยขั้นตอนการลงทะเบียนมีดังนี้
1. ไปที่เมนู Things Management และกดสร้าง Thing  ![Image](/img/thing.png)
 เมื่อเข้ามายังหน้า Thing จะเป็นดังรูป 

![Image](/img/thing_home.png)

โดยจะต้องใส่ Name และ Tag ส่วน image นั้นจะใส่หรือไม่ใส่ก็ได้ หลังจากนั้น ให้กด Save
*** หมายเหตุ หลังจากพิมพ์ชื่อ Tag ลงไปแล้วจะต้องกด Enter

2. หลังจากเข้ามายังหน้า Thing จะมีการเพิ่มด้วยกัน 2 ส่วน คือ การเพิ่ม Devices และการเพิ่ม Measurement 
    ![Image](/img/thing_home_add.png)

ในการเพิ่มนั้นจะต้องเพิ่มจาก Devices ก่อนหลังจากนั้น จึงจะสามารถเพิ่ม Measurement ได้ 
โดยการกด เพิ่ม device  ![Image](/img/add_device.png) หลังจากนั้น จะมี popup ให้ใส่ Name Device และ เลือก Hardware Platform โดยสำหรับผู้เริ่มต้นในตัวอย่างนี้ ให้กดเลือกเป็น ESP32 

![Image](/img/add_device_popup.png)

หลังจากทำการเพิ่ม Devices เสร็จเรียบร้อยแล้วนั้น ให้ทำการกดเพิ่ม Measurement ![Image](/img/add_Measurement.png) โดยในตัวอย่างนี้ จะให้ Measurement เป็น switch ในการ เปิด-ปิด ไฟ 

ให้ทำการเลือก Type เป็น Actuator ใส่ Name Measurement เป็น switch ใส่ Unit เป็น - และ กด Add
![Image](/img/add_Measurement_popup.png)

หลังจาก Add Measurement เรียบร้อยจะเป็นดังรูป

![Image](/img/thing_success.png)

เป็นการการลงทะเบียนอุปกรณ์สำเร็จ

- การเขียน code และ เบิร์นลงบอร์ด ESP32 ด้วย IDE Arduino 

เริ่มต้นให้ทำการ Download library ของ ifra จาก https://github.com/ifraiot/ifra-cpp-sdk

ลงไว้ใน file libraty ของ IDE Arduino ก่อนและให้ทำการ Copy โค้ดต่อไปนี้ลงใน IDE Arduino

```c++
#include "iFraSDK.h"
#include "iFraESP32SDK.h"

#define  DEVICE_KEY    "<DEVICE_KEY>"
#define  DEVICE_SECRET "<DEVICE_SECRET>"
#define  CHANNEL       "<CHANNEL>"

#define WIFI_SSID      "<WIFI_SSID>"
#define WIFI_PASSWORD  "<WIFI_PASSWORD>"
#define NAME_MEASUREMENT   "<NAME_MEASUREMENT>"
#define LED_PIN         2

iFraESP32SDK esp32(WIFI_SSID, WIFI_PASSWORD);
iFraSDK ifra(&esp32, CHANNEL, DEVICE_KEY, DEVICE_SECRET);


void handleCallback(char * actuator_name, int * value,
char * topic, byte * payload, unsigned int length) {
  if (strcmp(actuator_name, NAME_MEASUREMENT) == 0) {
    if (*value == ON) {
      digitalWrite(LED_PIN, HIGH);
      ifra.addSensor(NAME_MEASUREMENT, "-" , HIGH);
    } else {
      digitalWrite(LED_PIN, LOW);
      ifra.addSensor(NAME_MEASUREMENT, "-", LOW);
    }
    ifra.send();
  }
}

void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);
  ifra.ConnectNetwork(); //Start connect network by wifi.
  ifra.addActuator(handleCallback);
}

void loop() {
  if (!ifra.connected()) {
    ifra.reconnect();
  }
}
```


โดยใน โค้ด



สามารถดูเพิ่มเติมได้ที่ https://github.com/ifraiot