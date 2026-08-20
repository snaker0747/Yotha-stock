# ศูนย์รวมระบบงาน ฝ่ายสาธารณูปโภค ส่วนการโยธา สำนักช่าง เทศบาลนครระยอง จังหวัดระยอง

เว็บพอร์ทัลศูนย์รวมระบบงานและเว็บแอปพลิเคชัน (One-Stop Portal Hub) ออกแบบด้วยสไตล์ **Positivus Design System** (Neo-Brutalist Modern) สวยงาม ทันสมัย ใช้งานง่าย มีระบบค้นหาและแยกหมวดหมู่

---

## 🌟 ระบบงานที่เชื่อมโยงในปัจจุบัน (3 ระบบเริ่มต้น)

1. **งานติดตามโครงการ** 
   - 🔗 ลิงก์: [https://rayongcity-works.netlify.app/](https://rayongcity-works.netlify.app/)
   - 🎨 ธีมการ์ด: สีเทาอ่อน ไฮไลท์เขียว (Light Card)
2. **งานข้อมูลไฟฟ้าสาธารณะ**
   - 🔗 ลิงก์: [https://rayongcitystreetlight.netlify.app/](https://rayongcitystreetlight.netlify.app/)
   - 🎨 ธีมการ์ด: สีเขียวมะนาว ไฮไลท์ขาว (Lime Green Card)
3. **งานระบบเบิกจ่ายวัสดุ**
   - 🔗 ลิงก์: [https://yotharayong-stock.vercel.app/](https://yotharayong-stock.vercel.app/)
   - 🎨 ธีมการ์ด: สีดำเข้ม ไฮไลท์ขาว/เขียว (Dark Card)

---

## 🚀 วิธีเปิดใช้งาน

1. **เปิดใช้งานในเครื่องทันที**:
   - ดับเบิลคลิกไฟล์ `index.html` เพื่อเปิดใช้งานผ่าน Google Chrome, Microsoft Edge, Safari หรือ Browser ใดๆ ได้ทันที
2. **นำขึ้นเซิร์ฟเวอร์หรือโฮสติ้ง**:
   - สามารถนำโฟลเดอร์นี้อัปโหลดขึ้น **GitHub Pages**, **Netlify**, **Vercel**, หรือ **IIS / Nginx / Apache** ภายในเครือข่ายเทศบาลได้ทันทีโดยไม่ต้องตั้งค่าฐานข้อมูล

---

## ⚙️ วิธีเพิ่มหรือแก้ไขระบบงาน (ในไฟล์ `js/data.js`)

เปิดไฟล์ `js/data.js` และเพิ่มบล็อกข้อมูลระบบงานใหม่ในอาเรย์ `systemsData`:

```javascript
{
  id: "new-system",
  title: "ชื่องานใหม่",
  badgeTitle: ["ชื่องาน", "ใหม่"],
  category: "หมวดหมู่งาน",
  department: "ฝ่ายสาธารณูปโภค ส่วนการโยธา",
  description: "คำอธิบายระบบงานสั้นๆ...",
  url: "https://url-web-app-ของท่าน.com",
  cardTheme: "light", // เลือก: 'light' (เทาอ่อน), 'green' (เขียว), 'dark' (ดำ)
  illustrationType: "project", // เลือก: 'project', 'streetlight', 'stock'
  status: "online"
}
```

---

## 📁 โครงสร้างโปรเจกต์

```
เว็บศูนย์รวมระบบงาน/
├── index.html              # หน้าเว็บหลัก
├── css/
│   └── style.css           # สไตล์ Positivus และแอนิเมชัน
├── js/
│   ├── data.js             # ข้อมูลระบบงานและลิงก์ (เพิ่ม/แก้ที่นี่)
│   ├── illustrations.js    # ภาพประกอบเวกเตอร์ SVG สไตล์ Positivus
│   └── app.js              # ระบบค้นหา ตัวกรอง และเรนเดอร์การ์ด
├── assets/
│   └── images/
│       └── logo.png        # ตราสัญลักษณ์ สำนักช่าง เทศบาลนครระยอง
└── README.md
```
