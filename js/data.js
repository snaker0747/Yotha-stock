/**
 * =========================================================================
 * ฐานข้อมูลระบบงาน (Web Applications Data)
 * ศูนย์รวมระบบงาน ฝ่ายสาธารณูปโภค ส่วนการโยธา สำนักช่าง เทศบาลนครระยอง
 * =========================================================================
 * วิธีเพิ่มระบบงานใหม่:
 * คัดลอกบล็อก { ... } ด้านล่าง แล้ววางต่อท้าย จากนั้นเปลี่ยน id, title, url, ฯลฯ
 * 
 * ธีมสีการ์ด (cardTheme):
 * - 'light' : การ์ดสีขาว/เทาอ่อน ไฮไลท์เขียว
 * - 'green' : การ์ดสีเขียวมะนาว ไฮไลท์ขาว
 * - 'dark'  : การ์ดสีดำเข้ม ไฮไลท์เขียว/ขาว
 */

const portalConfig = {
  portalTitle: "ศูนย์รวมระบบงาน",
  subDivision: "ฝ่ายสาธารณูปโภค ส่วนการโยธา",
  departmentName: "สำนักช่าง เทศบาลนครระยอง",
  provinceName: "จังหวัดระยอง",
  portalSubtitle: "ระบบสารสนเทศและดิจิทัลแพลตฟอร์มเพื่อการบริหารจัดการและติดตามงานช่าง",
  logoUrl: "assets/images/logo.png",
  contactInfo: {
    phone: "038-xxx-xxx",
    location: "สำนักช่าง เทศบาลนครระยอง",
    facebook: "https://www.facebook.com/RayongCitySmart",
    website: "https://www.rayongcity.go.th"
  }
};

const systemsData = [
  {
    id: "project-tracking",
    title: "งานติดตามโครงการ",
    badgeTitle: ["งานติดตาม", "โครงการ"],
    category: "งานโครงการ",
    department: "ฝ่ายสาธารณูปโภค ส่วนการโยธา",
    description: "ระบบติดตามความคืบหน้าโครงการก่อสร้าง ปรับปรุง และซ่อมบำรุงโครงสร้างพื้นฐานในเขตเทศบาลนครระยอง รายงานผลแบบเรียลไทม์",
    url: "https://rayongcity-works.netlify.app/",
    cardTheme: "light", // 'light', 'green', 'dark'
    illustrationType: "project",
    status: "online", // 'online', 'maintenance'
    tag: "ระบบติดตาม / แผนงาน",
    iconBg: "#B9FF66",
    isPinned: false
  },
  {
    id: "public-streetlight",
    title: "งานข้อมูลไฟฟ้าสาธารณะ",
    badgeTitle: ["งานข้อมูล", "ไฟฟ้าสาธารณะ"],
    category: "ไฟฟ้าสาธารณะ",
    department: "ฝ่ายสาธารณูปโภค ส่วนการโยธา",
    description: "ระบบแผนที่ตำแหน่งและฐานข้อมูลเสาไฟฟ้า โคมไฟส่องสว่างสาธารณะ พร้อมระบบบันทึกตรวจสอบและติดตามการซ่อมบำรุงไฟฟ้าดับ",
    url: "https://rayongcitystreetlight.netlify.app/",
    cardTheme: "green", // 'light', 'green', 'dark'
    illustrationType: "streetlight",
    status: "online",
    tag: "ระบบ GIS / ไฟฟ้าสาธารณะ",
    iconBg: "#FFFFFF",
    isPinned: false
  },
  {
    id: "stock-materials",
    title: "งานระบบเบิกจ่ายวัสดุ",
    badgeTitle: ["งานระบบ", "เบิกจ่ายวัสดุ"],
    category: "พัสดุและคลังวัสดุ",
    department: "ส่วนการโยธา สำนักช่าง",
    description: "ระบบบริหารจัดการสต็อก ควบคุมและบันทึกการเบิกจ่ายวัสดุอุปกรณ์งานช่าง งานซ่อมแซมและบำรุงรักษาอย่างมีประสิทธิภาพ",
    url: "https://yotharayong-stock.vercel.app/",
    cardTheme: "dark", // 'light', 'green', 'dark'
    illustrationType: "stock",
    status: "online",
    tag: "ระบบคลัง / บันทึกเบิกจ่าย",
    iconBg: "#B9FF66",
    isPinned: false
  }
];

// รายชื่อหมวดหมู่สำหรับ Filter Tabs
const categories = [
  { id: "all", name: "ทั้งหมด" },
  { id: "งานโครงการ", name: "งานติดตามโครงการ" },
  { id: "ไฟฟ้าสาธารณะ", name: "ไฟฟ้าสาธารณะ" },
  { id: "พัสดุและคลังวัสดุ", name: "เบิกจ่ายวัสดุ/คลัง" }
];
