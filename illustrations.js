/**
 * Positivus Style Vector SVG Illustrations
 * ศูนย์รวมระบบงาน ฝ่ายสาธารณูปโภค ส่วนการโยธา สำนักช่าง เทศบาลนครระยอง
 */

const illustrations = {
  // 1. งานติดตามโครงการ (Project Monitoring & Construction)
  project: (theme = 'light') => {
    const strokeColor = theme === 'dark' ? '#FFFFFF' : '#191A23';
    const accentColor = '#B9FF66';
    const subStroke = theme === 'dark' ? '#A0A0A0' : '#4B4B4B';
    const fillColor = theme === 'dark' ? '#2A2B36' : '#FFFFFF';

    return `
    <svg viewBox="0 0 210 170" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-w-[210px] max-h-[170px] transition-transform duration-500 group-hover:scale-105" preserveAspectRatio="xMidYMid meet">
      <!-- Background Sparkles -->
      <path d="M185 25L188 35L198 38L188 41L185 51L182 41L172 38L182 35L185 25Z" fill="${strokeColor}"/>
      <circle cx="20" cy="45" r="4" fill="${accentColor}" stroke="${strokeColor}" stroke-width="1.5"/>
      <circle cx="195" cy="140" r="5" fill="${accentColor}" stroke="${strokeColor}" stroke-width="1.5"/>
      <path d="M25 130L27 136L33 138L27 140L25 146L23 140L17 138L23 136L25 130Z" fill="${strokeColor}"/>

      <!-- Project Plan Board / Clipboard -->
      <g filter="drop-shadow(3px 4px 0px ${strokeColor})">
        <rect x="40" y="30" width="130" height="115" rx="16" fill="${fillColor}" stroke="${strokeColor}" stroke-width="2.5"/>
      </g>
      
      <!-- Top Clip -->
      <rect x="80" y="20" width="50" height="18" rx="8" fill="${accentColor}" stroke="${strokeColor}" stroke-width="2.5"/>
      <circle cx="105" cy="29" r="3" fill="${strokeColor}"/>

      <!-- Board Content: Header Line -->
      <rect x="55" y="52" width="55" height="7" rx="3.5" fill="${accentColor}" stroke="${strokeColor}" stroke-width="1.5"/>
      <circle cx="145" cy="55" r="6" fill="${theme === 'green' ? '#FFFFFF' : accentColor}" stroke="${strokeColor}" stroke-width="1.5"/>

      <!-- Progress Line 1 (Check item) -->
      <rect x="55" y="70" width="12" height="12" rx="3" fill="${accentColor}" stroke="${strokeColor}" stroke-width="1.5"/>
      <path d="M58 76L61 79L67 73" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="75" y1="76" x2="148" y2="76" stroke="${subStroke}" stroke-width="2" stroke-linecap="round"/>

      <!-- Progress Line 2 (Check item) -->
      <rect x="55" y="90" width="12" height="12" rx="3" fill="${accentColor}" stroke="${strokeColor}" stroke-width="1.5"/>
      <path d="M58 96L61 99L67 93" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="75" y1="96" x2="135" y2="96" stroke="${subStroke}" stroke-width="2" stroke-linecap="round"/>

      <!-- Progress Bar Graph Box -->
      <rect x="55" y="112" width="100" height="20" rx="6" fill="${theme === 'dark' ? '#191A23' : '#F3F3F3'}" stroke="${strokeColor}" stroke-width="1.5"/>
      <rect x="58" y="115" width="68" height="14" rx="4" fill="${accentColor}" stroke="${strokeColor}" stroke-width="1"/>
      <line x1="90" y1="115" x2="90" y2="129" stroke="${strokeColor}" stroke-width="1" stroke-dasharray="2 2"/>
      
      <!-- Mini Compass / Ruler Accent -->
      <g transform="translate(135, 80)">
        <circle cx="20" cy="20" r="16" fill="${fillColor}" stroke="${strokeColor}" stroke-width="2"/>
        <path d="M12 28L28 12M20 8V12M20 28V32M8 20H12M28 20H32" stroke="${strokeColor}" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="20" cy="20" r="3" fill="${accentColor}" stroke="${strokeColor}" stroke-width="1.5"/>
      </g>
    </svg>`;
  },

  // 2. งานข้อมูลไฟฟ้าสาธารณะ (Streetlight GIS & Lighting Network)
  streetlight: (theme = 'green') => {
    const strokeColor = '#191A23';
    const accentColor = '#B9FF66';
    const lightBeamColor = '#FFFFFF';
    const poleColor = '#191A23';

    return `
    <svg viewBox="0 0 210 170" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-w-[210px] max-h-[170px] transition-transform duration-500 group-hover:scale-105" preserveAspectRatio="xMidYMid meet">
      <!-- Background Star / Waves -->
      <path d="M30 30L33 38L41 41L33 44L30 52L27 44L19 41L27 38L30 30Z" fill="${strokeColor}"/>
      <circle cx="185" cy="35" r="4" fill="${strokeColor}"/>
      <circle cx="25" cy="130" r="5" fill="#FFFFFF" stroke="${strokeColor}" stroke-width="1.5"/>

      <!-- Light Cone Glow Background -->
      <path d="M100 48L40 148H165L118 48H100Z" fill="${lightBeamColor}" fill-opacity="0.65" stroke="${strokeColor}" stroke-width="1.5" stroke-dasharray="4 3"/>

      <!-- Streetlight Post -->
      <!-- Arm -->
      <path d="M140 145V60C140 42 122 36 108 36H96C90 36 86 40 86 46V50" stroke="${poleColor}" stroke-width="4" stroke-linecap="round"/>
      
      <!-- Lamp Head -->
      <path d="M80 50H118L124 60H74L80 50Z" fill="${strokeColor}" stroke="${strokeColor}" stroke-width="2"/>
      <!-- Glowing Bulb -->
      <ellipse cx="99" cy="62" rx="16" ry="6" fill="${accentColor}" stroke="${strokeColor}" stroke-width="2"/>

      <!-- Pole Base & Foundation -->
      <rect x="133" y="138" width="14" height="12" rx="3" fill="${strokeColor}"/>
      <line x1="120" y1="150" x2="160" y2="150" stroke="${strokeColor}" stroke-width="3" stroke-linecap="round"/>

      <!-- Smart Sensor / Wifi Waves on Lamp -->
      <path d="M136 28C145 28 152 35 152 44" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round"/>
      <path d="M141 22C154 22 163 32 163 44" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round"/>

      <!-- GIS Map Pin Marker Card Floating -->
      <g transform="translate(35, 80)" filter="drop-shadow(3px 4px 0px ${strokeColor})">
        <rect x="0" y="0" width="62" height="42" rx="10" fill="#FFFFFF" stroke="${strokeColor}" stroke-width="2"/>
        <!-- Mini Pin -->
        <circle cx="18" cy="18" r="7" fill="${accentColor}" stroke="${strokeColor}" stroke-width="1.5"/>
        <circle cx="18" cy="18" r="2.5" fill="${strokeColor}"/>
        <!-- Line Data -->
        <line x1="32" y1="14" x2="52" y2="14" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round"/>
        <line x1="32" y1="23" x2="46" y2="23" stroke="#898989" stroke-width="2" stroke-linecap="round"/>
        <!-- Mini status badge -->
        <rect x="10" y="29" width="42" height="6" rx="3" fill="${accentColor}"/>
      </g>

      <!-- Sparkling Light Ray Dots -->
      <circle cx="75" cy="85" r="2.5" fill="${strokeColor}"/>
      <circle cx="125" cy="95" r="3" fill="${strokeColor}"/>
      <circle cx="95" cy="120" r="2.5" fill="${strokeColor}"/>
    </svg>`;
  },

  // 3. งานระบบเบิกจ่ายวัสดุ (Stock Inventory & Materials)
  stock: (theme = 'dark') => {
    const strokeColor = '#FFFFFF';
    const accentColor = '#B9FF66';
    const cardBg = '#2A2B36';

    return `
    <svg viewBox="0 0 210 170" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-w-[210px] max-h-[170px] transition-transform duration-500 group-hover:scale-105" preserveAspectRatio="xMidYMid meet">
      <!-- Background Sparks -->
      <path d="M25 35L27 42L34 44L27 46L25 53L23 46L16 44L23 42L25 35Z" fill="${accentColor}"/>
      <circle cx="185" cy="25" r="4" fill="${accentColor}"/>
      <circle cx="190" cy="135" r="4" fill="#FFFFFF"/>

      <!-- Main Storage Box / Package (Isometric 3D Look) -->
      <g transform="translate(30, 40)">
        <!-- Box Shadow -->
        <rect x="15" y="25" width="85" height="75" rx="12" fill="${cardBg}" stroke="${strokeColor}" stroke-width="2.5"/>
        
        <!-- Box Flap & Tape -->
        <path d="M15 48H100" stroke="${strokeColor}" stroke-width="2"/>
        <rect x="47" y="25" width="22" height="75" fill="${accentColor}" fill-opacity="0.25" stroke="${strokeColor}" stroke-width="1.5"/>
        <line x1="58" y1="25" x2="58" y2="100" stroke="${strokeColor}" stroke-width="1.5" stroke-dasharray="3 3"/>

        <!-- Package Label / QR Code -->
        <rect x="25" y="60" width="30" height="22" rx="4" fill="#FFFFFF" stroke="${strokeColor}" stroke-width="1.5"/>
        <line x1="30" y1="67" x2="48" y2="67" stroke="#191A23" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="30" y1="72" x2="44" y2="72" stroke="#191A23" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="30" y1="76" x2="38" y2="76" stroke="#191A23" stroke-width="1.5" stroke-linecap="round"/>

        <!-- Material Icon / Check badge on box -->
        <circle cx="85" cy="72" r="10" fill="${accentColor}" stroke="${strokeColor}" stroke-width="2"/>
        <path d="M81 72L84 75L89 69" stroke="#191A23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>

      <!-- Floating Stock Checklist Card (Top-Right) -->
      <g transform="translate(110, 25)" filter="drop-shadow(3px 4px 0px #000000)">
        <rect x="0" y="0" width="68" height="60" rx="10" fill="#FFFFFF" stroke="${strokeColor}" stroke-width="2"/>
        <rect x="18" y="-5" width="32" height="10" rx="4" fill="${accentColor}" stroke="#191A23" stroke-width="1.5"/>
        
        <!-- Checklist rows -->
        <circle cx="14" cy="18" r="4" fill="${accentColor}" stroke="#191A23" stroke-width="1"/>
        <line x1="24" y1="18" x2="56" y2="18" stroke="#191A23" stroke-width="2" stroke-linecap="round"/>

        <circle cx="14" cy="30" r="4" fill="${accentColor}" stroke="#191A23" stroke-width="1"/>
        <line x1="24" y1="30" x2="50" y2="30" stroke="#191A23" stroke-width="2" stroke-linecap="round"/>

        <circle cx="14" cy="42" r="4" fill="${accentColor}" stroke="#191A23" stroke-width="1"/>
        <line x1="24" y1="42" x2="54" y2="42" stroke="#191A23" stroke-width="2" stroke-linecap="round"/>
      </g>

      <!-- Conveyor / Base Lines -->
      <line x1="30" y1="145" x2="175" y2="145" stroke="${strokeColor}" stroke-width="3" stroke-linecap="round"/>
      <circle cx="50" cy="153" r="4" fill="${accentColor}" stroke="${strokeColor}" stroke-width="1.5"/>
      <circle cx="80" cy="153" r="4" fill="${accentColor}" stroke="${strokeColor}" stroke-width="1.5"/>
      <circle cx="110" cy="153" r="4" fill="${accentColor}" stroke="${strokeColor}" stroke-width="1.5"/>
      <circle cx="140" cy="153" r="4" fill="${accentColor}" stroke="${strokeColor}" stroke-width="1.5"/>
    </svg>`;
  },

  // 4. งานทางหลวงท้องถิ่น (Local Highway & Road GIS Dashboard)
  roadGis: (theme = 'light') => {
    const strokeColor = theme === 'dark' ? '#FFFFFF' : '#191A23';
    const accentColor = '#B9FF66';
    const fillColor = theme === 'dark' ? '#2A2B36' : '#FFFFFF';
    const roadColor = '#191A23';

    return `
    <svg viewBox="0 0 210 170" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-w-[210px] max-h-[170px] transition-transform duration-500 group-hover:scale-105" preserveAspectRatio="xMidYMid meet">
      <!-- Background Sparks -->
      <path d="M185 25L188 35L198 38L188 41L185 51L182 41L172 38L182 35L185 25Z" fill="${strokeColor}"/>
      <circle cx="25" cy="40" r="4" fill="${accentColor}" stroke="${strokeColor}" stroke-width="1.5"/>
      <circle cx="195" cy="140" r="5" fill="${accentColor}" stroke="${strokeColor}" stroke-width="1.5"/>

      <!-- GIS Map Base Board (3D Isometric / Dashboard Tablet) -->
      <g filter="drop-shadow(3px 4px 0px ${strokeColor})">
        <rect x="35" y="32" width="140" height="112" rx="16" fill="${fillColor}" stroke="${strokeColor}" stroke-width="2.5"/>
      </g>

      <!-- Map Grid Lines / Terrain -->
      <path d="M36 70H174" stroke="${theme === 'dark' ? '#4B5563' : '#E5E7EB'}" stroke-width="1.5" stroke-dasharray="4 4"/>
      <path d="M36 105H174" stroke="${theme === 'dark' ? '#4B5563' : '#E5E7EB'}" stroke-width="1.5" stroke-dasharray="4 4"/>
      <path d="M82 33V143" stroke="${theme === 'dark' ? '#4B5563' : '#E5E7EB'}" stroke-width="1.5" stroke-dasharray="4 4"/>
      <path d="M128 33V143" stroke="${theme === 'dark' ? '#4B5563' : '#E5E7EB'}" stroke-width="1.5" stroke-dasharray="4 4"/>

      <!-- Highway / Road Curve (ทางหลวงท้องถิ่น) -->
      <path d="M45 135 C65 110 80 100 105 92 C135 82 145 60 165 42" stroke="${roadColor}" stroke-width="16" stroke-linecap="round"/>
      <path d="M45 135 C65 110 80 100 105 92 C135 82 145 60 165 42" stroke="${accentColor}" stroke-width="2" stroke-linecap="round" stroke-dasharray="6 6"/>

      <!-- Top Dashboard Header Tag -->
      <rect x="48" y="42" width="48" height="12" rx="6" fill="${accentColor}" stroke="${strokeColor}" stroke-width="1.5"/>
      <circle cx="55" cy="48" r="2.5" fill="${strokeColor}"/>
      <line x1="62" y1="48" x2="88" y2="48" stroke="${strokeColor}" stroke-width="1.8" stroke-linecap="round"/>

      <!-- GIS Location Pin Marker on Road -->
      <g transform="translate(95, 68)" filter="drop-shadow(2px 3px 0px ${strokeColor})">
        <circle cx="16" cy="16" r="14" fill="${accentColor}" stroke="${strokeColor}" stroke-width="2"/>
        <path d="M16 8C12 8 9 11 9 15C9 19.5 16 26 16 26C16 26 23 19.5 23 15C23 11 20 8 16 8Z" fill="${strokeColor}"/>
        <circle cx="16" cy="14" r="2.5" fill="#FFFFFF"/>
      </g>

      <!-- Mini Satellite / DRR Badge (Top-Right) -->
      <g transform="translate(142, 22)" filter="drop-shadow(2px 2px 0px ${strokeColor})">
        <circle cx="16" cy="16" r="14" fill="${theme === 'dark' ? '#191A23' : '#FFFFFF'}" stroke="${strokeColor}" stroke-width="2"/>
        <path d="M11 16L16 11M16 21L21 16M13.5 13.5L18.5 18.5" stroke="${accentColor}" stroke-width="2" stroke-linecap="round"/>
        <circle cx="21" cy="11" r="2" fill="${strokeColor}"/>
      </g>

      <!-- Road Node Pulse Dots -->
      <circle cx="52" cy="128" r="3.5" fill="${accentColor}" stroke="${strokeColor}" stroke-width="1.5"/>
      <circle cx="158" cy="48" r="3.5" fill="${accentColor}" stroke="${strokeColor}" stroke-width="1.5"/>
    </svg>`;
  },

  // 5. Hero Work Portal Hub Illustration (จินตนาการศูนย์รวมระบบงาน Work Portal สไตล์ Positivus)
  heroPortalHub: () => {
    return `
    <svg viewBox="0 0 440 370" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-[440px] h-auto select-none" preserveAspectRatio="xMidYMid meet">
      
      <!-- Planetary Orbiting Rings (วงโคจรเชื่อมต่อศูนย์รวมระบบงาน) -->
      <ellipse cx="220" cy="225" rx="195" ry="72" transform="rotate(-16 220 225)" stroke="#191A23" stroke-width="2.5" stroke-dasharray="7 5"/>
      <ellipse cx="220" cy="238" rx="205" ry="65" transform="rotate(-8 220 238)" stroke="#191A23" stroke-width="1.8"/>
      <ellipse cx="220" cy="250" rx="215" ry="58" stroke="#191A23" stroke-width="1.2" stroke-dasharray="4 4"/>

      <!-- Positivus Geometric Stars & Sparkles -->
      <path d="M42 65L47 78L60 83L47 88L42 101L37 88L24 83L37 78L42 65Z" fill="#191A23"/>
      <path d="M398 275L402 285L412 289L402 293L398 303L394 293L384 289L394 285L398 275Z" fill="#191A23"/>
      <path d="M75 295L78 302L85 305L78 308L75 315L72 308L65 305L72 302L75 295Z" fill="#191A23"/>

      <!-- Floating Accent Spheres -->
      <circle cx="85" cy="45" r="7" fill="#B9FF66" stroke="#191A23" stroke-width="2"/>
      <circle cx="365" cy="55" r="8" fill="#B9FF66" stroke="#191A23" stroke-width="2"/>
      <circle cx="32" cy="180" r="10" fill="#191A23"/>
      <circle cx="415" cy="195" r="7" fill="#B9FF66" stroke="#191A23" stroke-width="1.8"/>
      <circle cx="220" cy="28" r="5" fill="#191A23"/>

      <!-- Data Transmission Wave Beams (เส้นสัญญาณเชื่อมโยงระบบงาน) -->
      <path d="M125 150 Q165 175 195 185" stroke="#191A23" stroke-width="2.5" stroke-dasharray="4 4"/>
      <path d="M305 130 Q265 165 240 185" stroke="#191A23" stroke-width="2.5" stroke-dasharray="4 4"/>
      <path d="M305 240 Q265 248 245 250" stroke="#191A23" stroke-width="2.5" stroke-dasharray="4 4"/>

      <!-- 1. Central Isometric Floating Command Deck (ฐานพอร์ทัลศูนย์รวมระบบงาน) -->
      <g filter="drop-shadow(4px 7px 0px #191A23)">
        <!-- Base Platform Foundation (Dark Isometric Slab) -->
        <path d="M125 245 L220 295 L315 245 L220 195 Z" fill="#191A23" stroke="#191A23" stroke-width="3" stroke-linejoin="round"/>
        <path d="M125 245 L125 260 L220 310 L315 260 L315 245 L220 295 Z" fill="#191A23" stroke="#191A23" stroke-width="3" stroke-linejoin="round"/>
        
        <!-- Deck Surface (White Top Slab) -->
        <path d="M135 240 L220 285 L305 240 L220 195 Z" fill="#FFFFFF" stroke="#191A23" stroke-width="2.5" stroke-linejoin="round"/>
        
        <!-- Glowing Green Portal Power Core (วงพลังงานดิจิทัลสีเขียวมะนาว) -->
        <ellipse cx="220" cy="240" rx="55" ry="24" fill="#B9FF66" stroke="#191A23" stroke-width="2.5"/>
        <ellipse cx="220" cy="240" rx="36" ry="15" fill="#FFFFFF" stroke="#191A23" stroke-width="2"/>
        <ellipse cx="220" cy="240" rx="16" ry="7" fill="#191A23"/>
      </g>

      <!-- 2. Main Holographic Portal Hub Terminal (หน้าจอดิจิทัลพอร์ทัลหลักตรงกลาง) -->
      <g transform="translate(150, 75)" filter="drop-shadow(4px 6px 0px #191A23)">
        <!-- Terminal Body -->
        <rect x="0" y="0" width="140" height="120" rx="20" fill="#191A23" stroke="#191A23" stroke-width="3.5"/>
        <rect x="7" y="7" width="126" height="106" rx="14" fill="#FFFFFF" stroke="#191A23" stroke-width="2"/>
        
        <!-- Terminal Top Title Bar -->
        <rect x="14" y="14" width="56" height="12" rx="6" fill="#B9FF66" stroke="#191A23" stroke-width="1.5"/>
        <line x1="20" y1="20" x2="62" y2="20" stroke="#191A23" stroke-width="2" stroke-linecap="round"/>
        <!-- Window Dots -->
        <circle cx="102" cy="20" r="3.5" fill="#191A23"/>
        <circle cx="114" cy="20" r="3.5" fill="#B9FF66" stroke="#191A23" stroke-width="1.5"/>
        <circle cx="124" cy="20" r="3.5" fill="#191A23"/>

        <!-- Terminal Core Portal Display (Connected Work Matrix) -->
        <!-- Central Hub Node -->
        <circle cx="70" cy="65" r="18" fill="#B9FF66" stroke="#191A23" stroke-width="2.5"/>
        <!-- Hub Grid Icon inside -->
        <rect x="62" y="57" width="6" height="6" rx="1.5" fill="#191A23"/>
        <rect x="72" y="57" width="6" height="6" rx="1.5" fill="#191A23"/>
        <rect x="62" y="67" width="6" height="6" rx="1.5" fill="#191A23"/>
        <rect x="72" y="67" width="6" height="6" rx="1.5" fill="#FFFFFF" stroke="#191A23" stroke-width="1"/>

        <!-- Connected Node Lines -->
        <line x1="30" y1="45" x2="55" y2="58" stroke="#191A23" stroke-width="2"/>
        <circle cx="28" cy="44" r="5" fill="#191A23"/>
        
        <line x1="110" y1="45" x2="85" y2="58" stroke="#191A23" stroke-width="2"/>
        <circle cx="112" cy="44" r="5" fill="#B9FF66" stroke="#191A23" stroke-width="1.5"/>

        <line x1="70" y1="83" x2="70" y2="98" stroke="#191A23" stroke-width="2"/>
        <circle cx="70" cy="100" r="4.5" fill="#191A23"/>

        <!-- Real-time Activity Pulse Wave -->
        <path d="M22 92L38 92L44 85L50 99L56 92L118 92" stroke="#191A23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>

      <!-- 3. Orbiting Satellite Node 1: Project Tracking (งานติดตามโครงการ - ด้านซ้ายบน) -->
      <g transform="translate(38, 95)" filter="drop-shadow(3px 4px 0px #191A23)">
        <rect x="0" y="0" width="92" height="68" rx="14" fill="#F3F3F3" stroke="#191A23" stroke-width="2.5"/>
        <rect x="10" y="10" width="34" height="8" rx="4" fill="#B9FF66" stroke="#191A23" stroke-width="1.2"/>
        <!-- Checklist rows -->
        <circle cx="16" cy="28" r="3.5" fill="#B9FF66" stroke="#191A23" stroke-width="1"/>
        <line x1="24" y1="28" x2="78" y2="28" stroke="#191A23" stroke-width="2" stroke-linecap="round"/>
        <circle cx="16" cy="40" r="3.5" fill="#B9FF66" stroke="#191A23" stroke-width="1"/>
        <line x1="24" y1="40" x2="68" y2="40" stroke="#191A23" stroke-width="2" stroke-linecap="round"/>
        <!-- Mini Progress Bar -->
        <rect x="12" y="50" width="68" height="8" rx="4" fill="#FFFFFF" stroke="#191A23" stroke-width="1.2"/>
        <rect x="13" y="51" width="45" height="6" rx="3" fill="#B9FF66"/>
      </g>

      <!-- 4. Orbiting Satellite Node 2: Streetlight GIS (งานไฟฟ้าสาธารณะ GIS - ด้านขวาบน) -->
      <g transform="translate(305, 80)" filter="drop-shadow(3px 4px 0px #191A23)">
        <rect x="0" y="0" width="95" height="70" rx="14" fill="#B9FF66" stroke="#191A23" stroke-width="2.5"/>
        <rect x="10" y="10" width="32" height="8" rx="4" fill="#FFFFFF" stroke="#191A23" stroke-width="1.2"/>
        <!-- Streetlight Pole & Glow -->
        <path d="M30 55V28C30 22 24 20 20 20" stroke="#191A23" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M16 20H26L28 26H14L16 20Z" fill="#191A23"/>
        <ellipse cx="21" cy="27" rx="5" ry="2" fill="#FFFFFF"/>
        <!-- Map Pin / Signal Icon -->
        <circle cx="68" cy="35" r="14" fill="#FFFFFF" stroke="#191A23" stroke-width="2"/>
        <path d="M68 28C65 28 62 30.5 62 34C62 38 68 44 68 44C68 44 74 38 74 34C74 30.5 71 28 68 28Z" fill="#191A23"/>
        <circle cx="68" cy="34" r="2" fill="#B9FF66"/>
        <!-- Sensor Waves -->
        <path d="M34 22C38 22 42 26 42 30" stroke="#191A23" stroke-width="1.8" stroke-linecap="round"/>
      </g>

      <!-- 5. Orbiting Satellite Node 3: Stock Materials (งานเบิกจ่ายวัสดุ/คลัง - ด้านขวาล่าง) -->
      <g transform="translate(300, 195)" filter="drop-shadow(3px 4px 0px #191A23)">
        <rect x="0" y="0" width="94" height="65" rx="14" fill="#191A23" stroke="#191A23" stroke-width="2.5"/>
        <rect x="10" y="10" width="30" height="8" rx="4" fill="#FFFFFF" stroke="#191A23" stroke-width="1.2"/>
        <!-- Storage 3D Package Box -->
        <rect x="18" y="24" width="34" height="28" rx="6" fill="#2A2B36" stroke="#FFFFFF" stroke-width="1.8"/>
        <line x1="18" y1="34" x2="52" y2="34" stroke="#FFFFFF" stroke-width="1.5"/>
        <rect x="30" y="24" width="10" height="28" fill="#B9FF66" stroke="#FFFFFF" stroke-width="1.2"/>
        <!-- Checkmark Badge -->
        <circle cx="68" cy="38" r="11" fill="#B9FF66" stroke="#FFFFFF" stroke-width="2"/>
        <path d="M64 38L67 41L72 35" stroke="#191A23" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>

      <!-- 6. Floating Action & Connectivity Badges (ไอคอนลูกโป่งลอยตัวสไตล์ Positivus) -->
      <!-- Rocket / Fast Launch Badge (Top Center-Left) -->
      <g transform="translate(105, 30)" filter="drop-shadow(2px 3px 0px #191A23)">
        <circle cx="18" cy="18" r="18" fill="#191A23"/>
        <path d="M18 10C18 10 24 12 25 18L21 22L14 15L18 10Z" fill="#B9FF66"/>
        <path d="M14 15L11 16L12 19L14 18" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="20" cy="15" r="1.5" fill="#191A23"/>
        <path d="M11 25C13 23 14 20 14 20C14 20 11 21 9 23L11 25Z" fill="#FFFFFF"/>
      </g>

      <!-- Network Share / Connectivity Badge (Far Right Top) -->
      <g transform="translate(385, 20)" filter="drop-shadow(2px 3px 0px #191A23)">
        <circle cx="18" cy="18" r="18" fill="#191A23"/>
        <path d="M23 13L13 18L23 23" stroke="#B9FF66" stroke-width="2" stroke-linecap="round"/>
        <circle cx="23" cy="13" r="3.5" fill="#FFFFFF"/>
        <circle cx="13" cy="18" r="3.5" fill="#FFFFFF"/>
        <circle cx="23" cy="23" r="3.5" fill="#FFFFFF"/>
      </g>

      <!-- 45-Degree Fast Link Arrow Badge (Left Side) -->
      <g transform="translate(15, 125)" filter="drop-shadow(2px 3px 0px #191A23)">
        <circle cx="17" cy="17" r="17" fill="#B9FF66" stroke="#191A23" stroke-width="2"/>
        <path d="M12 22L22 12M22 12H14M22 12V20" stroke="#191A23" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </g>

      <!-- Secure Database / Server Hub Badge (Bottom Left) -->
      <g transform="translate(60, 230)" filter="drop-shadow(2px 3px 0px #191A23)">
        <circle cx="18" cy="18" r="18" fill="#191A23"/>
        <!-- Database Disks -->
        <ellipse cx="18" cy="13" rx="9" ry="3.5" fill="#B9FF66" stroke="#FFFFFF" stroke-width="1.2"/>
        <path d="M9 13V18C9 20 18 20 18 20C18 20 27 20 27 18V13" stroke="#FFFFFF" stroke-width="1.2" fill="none"/>
        <path d="M9 18V23C9 25 18 25 18 25C18 25 27 25 27 23V18" stroke="#FFFFFF" stroke-width="1.2" fill="none"/>
      </g>

    </svg>`;
  },

  // Alias for backward compatibility
  heroMegaphone: function() {
    return this.heroPortalHub();
  }
};
