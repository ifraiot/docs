---
id: mqtt
title: MQTT
---

เราสามารถสร้างการเชื่อมต่อเพื่อส่งข้อมูลผ่าน MQTT ได้อย่างง่ายโดยการนำเอา API KEY จากระบบที่สร้างให้ไปตั้งค่าในอุปกรณ์เพื่อทำการเชื่อมต่อได้ทันที สามารถดูขั้นตอนการสร้่าง Thing เพื่อรับ API KEY ได้ในขั้นตอนก่อนหน้านี้


### ขั้นตอนการเชื่อมต่อ
ในขั้นตอนนี้ให้โหลด    [MQTTX]([integrations](https://mqttx.app))  เพื่อที่จะทำการทดลองเชื่อมต่อ MQTT มายังแพลตฟอร์ม IFRA 

* Name: ตั้งชื่ออะไรก็ได้
* Client ID: ไม่ต้องกรอกเพิ่ม
* Username: Username ที่ได้จากการสร้าง Devices เสร็จแล้ว
* Password: Password ที่ได้จากการสร้าง Devices เสร็จแล้ว

![alt-text](/img/connect-mqtt.png)

จากนั้น กด Connect ในแพลตฟอร์มเราจะเห็นสถานะที่ Devices จาก Offline เป็น Online

![alt-text](/img/connect-mqtt-check.png)

### รูปแบบการส่ง MQTT

`[{ "n": "<MEASUREMENT_NAME>", "v": "<NUMBER>" , "u":"<UNIT>"}]`


* MEASUREMENT_NAME : ชื่อ Measurement ที่เราจะส่งจากตัวอย่าง เราจะส่งในชื่อ Temp
* NUMBER : ค่าที่เราต้องการส่ง จากตัวอย่างเราจะทดสอบส่งค่า 28 ไป
* UNIT : หน่วยที่เราต้องการส่ง จากตัวอย่างเราจะส่งค่า °C ไป

ตัวอย่างข้อความที่จะส่ง
`[{ "n": "Temp", "v": 28, "u":"°C"}]`
จากนั้นให้ใส่ Topic ที่ได้จากระบบ และกรอกข้อความที่จะส่งลงในช่องตามภาพตัวอย่างด้านล่าง

![alt-text](/img/mqttx-send-data.png)

กลับมาเช็คที่แพลตฟอร์มเรา คลิกตรงชื่อ Measurent ของเราแล้ว กด Check Data เราจะเห็นข้อมูลที่ส่งปรากฎขึ้นมา แสดงว่าเราต่ออุปกรณ์เพื่อส่งข้อมูลขึ้นมาบนแพลตฟอร์มสำเร็จแล้ว

![alt-text](/img/debug-data.png)


:::tip รูปแบบการส่งข้อมูล
รูปแบบการส่งข้อมูล ผ่าน MQTT ในระบบเราจะใช้ตามมาตรฐาน SenML (Sensor Measurement Lists ) สามารถศึกษาเพิ่มเติมได้ที่นี่ 
[SenML](https://tools.ietf.org/html/rfc8428)
:::

### ตัวอย่างการส่งข้อมูล ให้ทำการกรอกข้อมูลที่ได้จาก API KEY 

การส่งข้อมูลโดยใช้ NodeJS
```javascript title="NodeJS"
var mqtt = require('mqtt');
const MQTT_SERVER = "mqtt.ifra.io";   
const MQTT_PORT = "1883";                      
const MQTT_USER = "f31fcb74-48c5-4a59-b418-af6602a1c686";         
const MQTT_PASSWORD = "2714e445-6a94-425a-82a5-b40632b901a8";    
const TOPIC = "organization/d8d74ab3-2689-4343-bf79-78f2b0083fd9/messages"      
const MEASUREMENT_NAME = "Temp"    
const UNIT = "°C"                   
// Connect MQTT
var client = mqtt.connect({
    host: MQTT_SERVER,
    port: MQTT_PORT,
    username: MQTT_USER,
    password: MQTT_PASSWORD
});

// Subscribe any topic
client.on('connect', function () {
    console.log("MQTT Connect");
    client.subscribe(TOPIC, function (err) {
        if (err) {
            console.log(err);
        }
    });
});

// Receive Message and print on terminal
client.on('message', function (topic, message) {
// message is Buffer
    console.log(message.toString());
});

// Random number 0-10 send every 5 seconds
setInterval(() => {
    const RANDOM_NUMBER =  (Math.random()+9*2)
    client.publish(TOPIC, '[{ "n": "'+MEASUREMENT_NAME+'", "v": '+RANDOM_NUMBER+' , "u":"'+UNIT+'"}]');
}, 5000);

```


### การติดตั้ง

ใช้ตัวจัดการแพ็คเกจ [MqttJS](https://www.npmjs.com/package/mqtt) เพื่อทำการติดตั้ง

```bash
npm install mqtt --save
```

### การใช้งาน

```javascript
node index.js
```

เปิด Console เราจะเห็น console log ที่เราเขียนใว้ ในการสุ่มส่งตัวเลขไปทุก 5 วินาที
