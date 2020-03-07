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

เป็นการลงทะเบียนอุปกรณ์สำเร็จ

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

จากในโค้ดนั้นค่าของ DEVICE_KEY, DEVICE_SECRET, CHANNEL และ NAME_MEASUREMENT ในโค้ด จะนำค่าเหล่านี้จาก หน้า Things Management ที่ได้ทำการลงทะเบียนอุปกรณ์ไปก่อนหน้านี้แล้ว โดย

เข้า ไปยังเมนู Things Management แล้วกดเลือก Device ในหัวข้อ Manage ดังรูป
![Image](/img/setting_thing_device.png)

หลังจากเข้ามาแล้วให้กดรูป เฟือง (ด้านขวา) ดังรูป
![Image](/img/add_device_success.png)

จะเข้ามายังหน้าของรายละเอียด Device 
![Image](/img/detail_device.png)
โดยในหน้านี้จะมีค่าของ DEVICE_KEY, DEVICE_SECRET และ CHANNEL ให้ทำการ Copy ค่าเหล่านี้มาใส่ ภายใน Code ของ IDE Arduino

ส่วน NAME_MEASUREMENT นั้นให้นำค่ามาจากการตั้ง Name ใน Measurement ดังรูป
![Image](/img/name_measu.png) 
โดยในตัวอย่างนี้จะใช้ชื่อว่า switch ดังที่กล่าวไปข้างต้น

หลังจากนั้นค่าของ WIFI_SSID และ WIFI_PASSWORD จะตั้งค่าเป็น User และ Password ของ Wifi ตามลำดับ


เมื่อทำการใส่ค่าที่ copy จากแพลตฟอร์ม ลงใน Code เสร็จเรียบร้อยแล้วให้ทำการกด เบิร์นลงบอร์ด ESP32
*** ห้ามลืมเปลี่ยน Board ใน IDE Arduino เป็น ESP32 นะครับ


เป็นการเขียน code และ เบิร์นลงบอร์ด ESP32 สำเร็จ


- การสร้าง Dashboard ในแพลตฟอร์ม IFRA 

หลังจากที่ลงทะเบียนอุปกรณ์ และเขียน code เพื่อเบิร์นลงบอร์ด ESP32 ได้สำเร็จแล้ว ขั้นตอนต่อมาคือการสร้าง Dashboard เพื่อควบคุมการ เปิด-ปิด LED ใน บอร์ด ESP32 โดยมีขั้นตอนดังนี้

1. กดไปยังเมนู Dashboard และกดสร้าง Dashboard ![Image](/img/bnt_add_dashnoard.png) ตั้งชื่อ dashboard และกด save 
เมื่อเข้ามายังหน้า Dashboard จเป็นดังรูป
![Image](/img/dashboard_home_success.png) 

2. กด Add Widget โดยหลังจากที่ทำการกดจะมี Popup ให้ทำการตั้งชื่อ และเลือก Widget แล้วจึงกด Next
โดยในตัวอย่างนี้ ให้เลือก Widget เป็น Switch ดังรูป 
![Image](/img/setting_add_dashboard.png) 

3. หลังจากกด Next มาแล้วนั้น จะเป็นการเลือก Things, Devices และ Measurements ที่ได้ตั้งค่ามาแล้วข้างต้นโดยจะต้องเลือกชื่อที่ได้ตั้งตามในหัวข้อ "การลงทะเบียนอุปกรณ์ภายในแพลตฟอร์ม IFRA"
![Image](/img/add_widget.png) 
เมื่อเลือกเรียบร้อยแล้วนั้นให้ กด Add Measurement ต่อจากนั้นจึงกด Next และกด Finlish

จะได้ Widget เป็น Switch ที่ใช้ในการควบคุม LED ของบอร์ด ESP32 ได้สำเร็จ

![Image](/img/dashboard_sw.png) 

สามารถทดลองโดยการเปิด - ปิด Switch ใน หน้า