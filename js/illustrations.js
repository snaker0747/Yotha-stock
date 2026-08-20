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
    <svg viewBox="0 0 210 170" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-w-[210px] max-h-[170px] transition-transform duration-500 group-hover:scale-105">
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
    <svg viewBox="0 0 210 170" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-w-[210px] max-h-[170px] transition-transform duration-500 group-hover:scale-105">
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
    <svg viewBox="0 0 210 170" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-w-[210px] max-h-[170px] transition-transform duration-500 group-hover:scale-105">
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

  // Hero Megaphone Graphic
  heroMegaphone: () => {
    return `
    <svg viewBox="0 0 420 360" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-[420px] h-auto drop-shadow-xl select-none">
      <!-- Outer Orbiting Ellipse Loops -->
      <ellipse cx="270" cy="220" rx="135" ry="55" transform="rotate(-18 270 220)" stroke="#191A23" stroke-width="2" stroke-dasharray="6 4"/>
      <ellipse cx="270" cy="235" rx="140" ry="50" transform="rotate(-12 270 235)" stroke="#191A23" stroke-width="1.5"/>
      <ellipse cx="270" cy="250" rx="145" ry="45" transform="rotate(-5 270 250)" stroke="#191A23" stroke-width="1"/>

      <!-- Floating Sparkles & Geometric Stars (Positivus Theme) -->
      <!-- Black Star Top Left -->
      <circle cx="45" cy="50" r="14" fill="#191A23"/>
      <!-- Green Dot -->
      <circle cx="85" cy="70" r="7" fill="#B9FF66" stroke="#191A23" stroke-width="1.5"/>
      <!-- Black 4-Point Star -->
      <path d="M60 145L66 162L83 168L66 174L60 191L54 174L37 168L54 162L60 145Z" fill="#191A23"/>
      <!-- Small Star Bottom -->
      <path d="M190 290L193 298L201 301L193 304L190 312L187 304L179 301L187 298L190 290Z" fill="#191A23"/>
      <!-- Green Dot Bottom Right -->
      <circle cx="345" cy="290" r="8" fill="#B9FF66" stroke="#191A23" stroke-width="1.5"/>

      <!-- Megaphone Body -->
      <g filter="drop-shadow(4px 6px 0px #191A23)">
        <!-- Megaphone Cone Base Back -->
        <path d="M165 190L115 220L105 205L145 170L165 190Z" fill="#191A23"/>
        <!-- Handle -->
        <path d="M125 212L110 260C108 268 114 276 122 276H130C136 276 142 271 144 265L152 230" fill="#FFFFFF" stroke="#191A23" stroke-width="3"/>
        
        <!-- Main Megaphone Cone (Green & White Sections) -->
        <!-- Green middle section -->
        <path d="M160 185L250 85L285 140L185 225L160 185Z" fill="#B9FF66" stroke="#191A23" stroke-width="3.5" stroke-linejoin="round"/>
        
        <!-- White Front Cone -->
        <path d="M245 90L295 35L340 100L280 145L245 90Z" fill="#FFFFFF" stroke="#191A23" stroke-width="3.5" stroke-linejoin="round"/>

        <!-- Front Oval Rim -->
        <ellipse cx="318" cy="68" rx="28" ry="46" transform="rotate(35 318 68)" fill="#191A23" stroke="#191A23" stroke-width="3.5"/>
        <ellipse cx="318" cy="68" rx="22" ry="40" transform="rotate(35 318 68)" fill="#FFFFFF" stroke="#191A23" stroke-width="2"/>
        <ellipse cx="318" cy="68" rx="14" ry="26" transform="rotate(35 318 68)" fill="#191A23"/>
      </g>

      <!-- Floating Feature Badges (Icons) -->
      <!-- 1. Heart Badge (Top Right) -->
      <g transform="translate(325, 25)" filter="drop-shadow(2px 3px 0px #191A23)">
        <circle cx="20" cy="20" r="20" fill="#191A23"/>
        <path d="M20 27L14.5 21.5C11.5 18.5 11.5 13.5 14.5 10.5C17.5 7.5 22.5 7.5 25.5 10.5C28.5 13.5 28.5 18.5 25.5 21.5L20 27Z" fill="#FFFFFF"/>
      </g>

      <!-- 2. Share / Network Badge (Top Right Far) -->
      <g transform="translate(370, 32)" filter="drop-shadow(2px 3px 0px #191A23)">
        <circle cx="18" cy="18" r="18" fill="#B9FF66" stroke="#191A23" stroke-width="2.5"/>
        <path d="M23 13L13 18L23 23M23 13C24.6569 13 26 11.6569 26 10C26 8.34315 24.6569 7 23 7C21.3431 7 20 8.34315 20 10C20 10.2 20.02 10.4 20.06 10.6L14.5 13.4C13.9 12.5 12.9 12 11.8 12C9.7 12 8 13.7 8 15.8C8 17.9 9.7 19.6 11.8 19.6C12.9 19.6 13.9 19.1 14.5 18.2L20.06 21C20.02 21.2 20 21.4 20 21.6C20 23.3 21.3 24.6 23 24.6C24.7 24.6 26 23.3 26 21.6C26 20 24.7 18.6 23 18.6" stroke="#191A23" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </g>

      <!-- 3. Play / Monitor Badge -->
      <g transform="translate(365, 88)" filter="drop-shadow(2px 3px 0px #191A23)">
        <circle cx="18" cy="18" r="18" fill="#191A23"/>
        <polygon points="14,10 26,18 14,26" fill="#FFFFFF"/>
      </g>

      <!-- 4. Location / GIS Pin Badge (Bottom Right) -->
      <g transform="translate(355, 145)" filter="drop-shadow(2px 3px 0px #191A23)">
        <circle cx="22" cy="22" r="22" fill="#B9FF66" stroke="#191A23" stroke-width="2.5"/>
        <path d="M22 10C17.5817 10 14 13.5817 14 18C14 23.5 22 32 22 32C22 32 30 23.5 30 18C30 13.5817 26.4183 10 22 10ZM22 21C20.3431 21 19 19.6569 19 18C19 16.3431 20.3431 15 22 15C23.6569 15 25 16.3431 25 18C25 19.6569 23.6569 21 22 21Z" fill="#191A23"/>
      </g>
    </svg>`;
  }
};
