---
id: getStarted
title: เริ่มต้นการใช้งานแพลตฟอร์ม IFRA 
sidebar_label: เริ่มต้นใช้งาน
---

ยินดีต้อนรับสู่แพลตฟอร์ม IFRA 


ในเอกสารนี้เหมาะสำหรับผู้ใช้งานที่ไม่มีพื้นฐานสำหรับการใช้งานแพลตฟอร์ม IoT โดยในเอกสารนี้จะสอนการควบคุม เปิด-ปิด LED ใน ESP32 ผ่านแพลตฟอร์ม เพื่อให้ผู้ใช้งานเข้าใจการทำงานเบื้องต้นของแพลตฟอร์ม IFRA 

* [การลงทะเบียนอุปกรณ์ภายในแพลตฟอร์ม IFRA](#การลงทะเบียนอุปกรณ์ภายในแพลตฟอร์ม-ifra)
* [การเขียนโค้ดใน IDE Arduino](#การเขียนโค้ดบน-arduino-ide)
* [การสร้าง Dashboard ในแพลตฟอร์ม IFRA](#การสร้าง-dashboard-ในแพลตฟอร์ม-ifra)


## การลงทะเบียนอุปกรณ์ภายในแพลตฟอร์ม IFRA   

เริ่มต้นผู้ใช้งานต้องลงทะเบียนผ่าน [https://ws.ifra.io/](https://ws.ifra.io/) และเลือกแพ็กเกจสำหรับการเริ่มต้นใช้งาน 
> สำหรับแพ็กเกจในแพลตฟอร์มจะมีแพ็กเกจฟรีสำหรับการทดลองใช้งาน โดยสามารถดูรายละเอียดแพ็กเกจได้ที่    [รายละเอียดแพ็กเกจ](https://ws.ifra.io/plans)

เมื่อเข้ามายังหน้าแรกของแพลตฟอร์มจะเป็นดังนี้
<p class="frame">
<img src="/img/dashboard_home.png">
</p>


### ขั้นตอนการลงทะเบียนอุปกรณ์ 
1. เลือกเมนู Things Management และกดสร้าง Thing <img src="/img/thing.png" class="imp-in-p"> 
 เมื่อเข้ามายังหน้าการสร้าง Thing จะเป็นดังนี้ 
<p class="frame">
<img src="/img/thing_home.png">
</p>

โดยใส่ชื่อและแท็ก (หลังจากพิมพ์แท็กต้องกด Enter) ส่วนรูปภาพสามารถเลือกใส่ได้ และกด Save

2. ในหน้า Thing มีการเพิ่ม 2 ส่วนคือ Devices และ Measurement 
<p class="frame">
<img src="/img/thing_home_add.png">
</p>

ลำดับการเพิ่มต้องเพิ่มจาก Devices ก่อนจากนั้นจึงสามารถเพิ่ม Measurement ได้ โดยกด เพิ่ม device <img src="/img/add_device.png" class="imp-in-p">  จะแสดงป๊อปอัปขึ้นมาให้ตั้งชื่อ Name Device และ เลือก Hardware Platform 
> โดยสำหรับผู้เริ่มต้นในเอกสารนี้ ให้เลือก Hardware Platform เป็น ESP32 

<p class="frame">
<img src="/img/add_device_popup.png">
</p>

หลังจากทำการเพิ่ม Devices เสร็จเรียบร้อย ให้ทำการกดเพิ่ม Measurement<img src="/img/add_Measurement.png" class="imp-in-p">
โดยเลือก 
* Type = Actuator 
* Name Measurement = "switch" 
* Unit = "-" 

<p class="frame">
<img src="/img/add_Measurement_popup.png">
</p>


หลังจาก Add Measurement สำเร็จจะเป็นดังนี้

<p class="frame">
<img src="/img/thing_success.png">
</p>

การลงทะเบียนอุปกรณ์สำเร็จ!

## การเขียนโค้ดบน Arduino IDE

เมื่อลงทะเบียนอุปกรณ์สำเร็จ ขั้นตอนต่อไปคือการเขียนโค้ดบน Arduino IDE และเบิร์นลงบอร์ด ESP32 เพื่อให้ ESP32 นั้นส่งข้อมูลไปยังแพลตฟอร์ม และแพลตฟอร์มสามารถควบคุม LED บน ESP32 

### ขั้นตอนการเขียนโค้ด
1. Download library ของแพลตฟอร์ม IFRA จาก [ifra-cpp-sdk](https://github.com/ifraiot/ifra-cpp-sdk) ไว้ที่ file library ของ Arduino IDE และคัดลอกโค้ดต่อไปนี้ลงใน Arduino IDE

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

2. การใส่ค่าของ `DEVICE_KEY`, `DEVICE_SECRET`, `CHANNEL` และ `NAME_MEASUREMENT` โดยนำค่าข้อมูลจากหน้า Things Management ที่ได้ลงทะเบียนอุปกรณ์แล้วก่อนหน้านี้ 

* เลือกเมนู Things Management และกด Device (จากรูปในกรอบสีแดง) ในหัวข้อ Manage

<p class="frame">
<img src="/img/setting_thing_device.png">
</p>

* เลือกการตั้งค่า (จากรูปในกรอบสีแดง)

<p class="frame">
<img src="/img/add_device_success.png">
</p>

* หน้ารายละเอียด Device เป็นดังนี้

![Image](/img/detail_device.png)


ในหน้ารายละเอียด Device จะมีค่าข้อมูลของ `DEVICE_KEY`, `DEVICE_SECRET` และ `CHANNEL` ให้ทำการคัดลอกค่าเหล่านี้มาใส่ภายในโค้ดของ Arduino IDE ส่วน `NAME_MEASUREMENT` นั้นให้นำค่ามาจากการตั้งชื่อใน Measurement in device

<p class="frame">
<img src="/img/name_measu.png">
</p>

`WIFI_SSID` และ `WIFI_PASSWORD` ตั้งค่าเป็น User และ Password ของ Wifi ตามลำดับ เมื่อทำการใส่ค่าที่ คัดลอกจากแพลตฟอร์มลงในโค้ดเรียบร้อยแล้วให้ทำการเบิร์นลงบอร์ด ESP32

การเขียนโค้ดและเบิร์นลงบอร์ด ESP32 สำเร็จ!


## การสร้าง Dashboard ในแพลตฟอร์ม IFRA 

เมื่อเบิร์นลงบอร์ด ESP32 สำเร็จ ขั้นตอนต่อมาคือการสร้าง Dashboard เพื่อควบคุมการเปิด-ปิด LED ใน บอร์ด ESP32 มีขั้นตอนดังนี้

1. เลือก Dashboard และกดสร้าง Dashboard <img src="/img/bnt_add_dashnoard.png" class="imp-in-p"> ตั้งชื่อ dashboard และกด save เมื่อเข้ามายังหน้า Dashboard จะเป็นดังนี้

<p class="frame">
<img src="/img/dashboard_home_success.png">
</p>

2. เพิ่ม Widget โดยกด Add Widget ตั้งชื่อ Widget เลือก Widget เป็น Switch ดังรูป และกด Next

<p class="frame">
<img src="/img/setting_add_dashboard.png">
</p>

3. เลือก Things, Devices และ Measurements ที่ตั้งค่าในหัวข้อ [การลงทะเบียนอุปกรณ์ภายในแพลตฟอร์ม IFRA](#การลงทะเบียนอุปกรณ์ภายในแพลตฟอร์ม-ifra)

<p class="frame">
<img src="/img/add_widget.png">
</p>

กด Add Measurement กด Next และกด Finlish จะได้ Widget เป็น Switch ที่ใช้ในการควบคุม LED ของบอร์ด ESP32

<p class="frame">
<img src="/img/dashboard_sw.png">
</p>

> สามารถทดลองเปิด-ปิด Switchใน Widget ของหน้า Dashboard และสังเกตผลลัพธ์ของ LED ภายในบอร์ด ESP32

## สรุป
ขอแสดงความยินดี ตอนนี้ผู้ใช้งานสามารถควบคุมการเปิด-ปิด LED ในบอร์ด ESP32 ได้จากแพลตฟอร์ม IFRA
ได้เรียนรู้วิธีการลงทะเบียนอุปกรณ์กับแพลตฟอร์ม IFRA การเขียนโค้ดและการสร้าง Dashboard เบื้องต้นเพื่อควบคุม LED ในบอร์ด ESP32 

ต่อไปจะเป็นรายละเอียดของแต่ละเมนูที่จะอธิายการทำงานต่างๆเพื่อใช้ในการสร้าง Solution อื่นๆต่อไป
* [Device Management](/docs/Device_management/thing)
* [Real-Time Dashboard](/docs/Dashboard/chart_widget)






