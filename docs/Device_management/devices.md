---
id: devices
title: Devices
sidebar_label: Devices
---
คือ อุปกรณ์ที่เราต้องการเชื่อมกับ แพลตฟอร์มไอฟรา เช่น บอร์ด ESP32 ,บอร์ด Arduino
## วิธีการเพิ่มอุปกรณ์ (Device) 
![alt-text](/img/device5.png)

กดที่ปุ่ม +Device จะมีหน้าป๊อปอัพเด้งขึ้นมาให้กรอก ตามรูปด้านล่าง 

![alt-text](/img/device2.png)

+ Name Device คือชื่อของอุปกรณ์ที่เราต้องการตั้งชื่อ เช่น ESP32-01,ESP32-02
+ Hardware Platform คือบอร์ดที่เราต้องการเชื่อมกับแพลตฟอร์มไอฟรา เช่น Esp32,Esp8266,Arduino,Raspberry pi เป็นต้น

เพิ่มอุปกรณ์เสร็จแล้วจะกลับไปยังหน้า จัดการอุปกรณ์ โดยจะแสดงข้อมูล ชื่อของอุปกรณ์,สถานะของอุปกรณ์,อุปกรณ์

![alt-text](/img/device3.png)
ตารางอธิบายข้อมูลของ Device in Thing
![alt-text](/img/device.png)

อุปกรณ์จะสามารถเชื่อมต่ออุปกรณ์กับแพลตฟอร์มไอฟรา โดยวิธีการใช้ Channel,Device Key และ Device Secret ของ MQTT ADAPTER
+ โดยคลิกที่รูป ฟันเฟือง ในตารางแสดงข้อมูล Device in Thing

![alt-text](/img/device6.png)


โดยหน้า MQTT ADAPTER จะแสดงข้อมูล Channel,Topic,MQTT Server,Device Key และ Device Secret เพื่อที่จะนำข้อมูลเหล่านี้มาใช้ในการเชื่อมต่อ อุปกรณ์กับแพลตฟอร์มไอฟรา
![alt-text](/img/device4.png)

