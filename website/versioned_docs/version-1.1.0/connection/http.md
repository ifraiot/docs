---
id: http
title:  HTTP
---

การส่งผ่าน Protocol HTTP จะเป็นการส่งตามรูปแบบตัวอย่างด้านล่างนี้ โดยใช้ `Method POST` โดยเราต้องมี `channelID` เพื่อเป็นคีย์ระบุในการส่งข้อมูล สามารถรับ `channelID`  ได้ที่ API KEY ในขั้นตอนสร้าง Device

```javascript title="HTTP API"
https://iot.ifra.io/organization/ <channelID> /messages
```

```javascript title="Message Data"
[{ "n": ${measurementName}, "v": ${value} , "u": ${unit}]
```

```javascript title="ตัวอย่างการส่งด้วย JavaScript"
export function simulationData (data) {
  const mainurl = 'https://iot.ifra.io/organization/d8d74ab3-2689-4343-bf79-78f2b0083fd9/messages'
  const options = {
    headers: {
      'Content-Type': 'application/json',
    }
  }
  axios.post(mainurl, data, options)
}
```