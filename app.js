const icons = {
  dashboard: '<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="11" width="7" height="10" rx="1"/><rect x="3" y="14" width="8" height="7" rx="1"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  box: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="M3 8v9l9 5 9-5V8M12 13v9"/>',
  quote: '<path d="M8 4h11a2 2 0 0 1 2 2v14H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3Z"/><path d="M8 4v4h8V4M8 13h8M8 17h5"/>',
  briefcase: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/>',
  chart: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-5 5"/><path d="M15 9h4v4"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowUpRight: '<path d="M7 17 17 7M7 7h10v10"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  lifeBuoy: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="m5.6 5.6 4.3 4.3m4.2 4.2 4.3 4.3m0-12.8-4.3 4.3m-4.2 4.2-4.3 4.3"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  eyeOff: '<path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8"/><path d="M9.9 5.2A10.7 10.7 0 0 1 12 5c6.5 0 10 7 10 7a14.6 14.6 0 0 1-3 3.7M6.2 6.2C3.5 8 2 12 2 12s3.5 7 10 7a10.7 10.7 0 0 0 3-.4"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  eyeSmall: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  edit: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  close: '<path d="m18 6-12 12M6 6l12 12"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
  ship: '<path d="M3 17h18l-2 4H5l-2-4ZM5 17l-2-6 9 2 9-2-2 6"/><path d="M12 13V3l5 4h-5"/>',
  coins: '<circle cx="8" cy="8" r="5"/><path d="M16.5 10.5A5 5 0 1 1 10 16.7"/><path d="M8 6v4m-1.5-2H9.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  filter: '<path d="M4 7h16M7 12h10m-7 5h4"/>',
  pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/>',
  package: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4.3 7.5 7.7 4.4 7.7-4.4M12 12v9"/>',
  wrench: '<path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4L14 13l-3-3 3.7-3.7Z"/>',
  trend: '<path d="M3 17 9 11l4 4 8-9M15 6h6v6"/>'
};
const icon = (name, extra = '') => `<svg ${extra} viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.file}</svg>`;
document.querySelectorAll('[data-icon]').forEach(node => { node.innerHTML = icon(node.dataset.icon); });

const pages = [
  { id: 'dashboard', title: 'ภาพรวม', description: 'ภาพรวมธุรกิจ Nical Marine ของคุณ', nav: 'ภาพรวม', icon: 'dashboard' },
  { id: 'customers', title: 'ลูกค้า', description: 'จัดการข้อมูลและความสัมพันธ์กับลูกค้าของคุณ', nav: 'ลูกค้า', icon: 'users' },
  { id: 'products', title: 'สินค้า', description: 'รายการสินค้า อุปกรณ์ และข้อมูลทางเทคนิค', nav: 'สินค้า', icon: 'box' },
  { id: 'quotations', title: 'ใบเสนอราคา', description: 'ติดตามและจัดการใบเสนอราคาทั้งหมด', nav: 'ใบเสนอราคา', icon: 'quote' },
  { id: 'projects', title: 'โครงการ', description: 'ติดตามความคืบหน้าโครงการของคุณ', nav: 'โครงการ', icon: 'briefcase' },
  { id: 'finance', title: 'การเงิน', description: 'สรุปรายรับ ต้นทุน และผลประกอบการ', nav: 'การเงิน', icon: 'chart' },
  { id: 'documents', title: 'เอกสาร', description: 'จัดเก็บและค้นหาเอกสารสำคัญของบริษัท', nav: 'เอกสาร', icon: 'file' },
  { id: 'knowledge', title: 'คลังความรู้', description: 'แหล่งรวมคู่มือและข้อมูลทางเทคนิค', nav: 'คลังความรู้', icon: 'book' },
  { id: 'about', title: 'เกี่ยวกับเรา', description: 'ข้อมูลบริษัทและธุรกิจของ Nical Marine', nav: 'เกี่ยวกับเรา', icon: 'ship' }
];
const nav = document.getElementById('mainNav');
nav.innerHTML = pages.map(p => `<button class="nav-item" data-page="${p.id}">${icon(p.icon)}<span>${p.nav}</span></button>`).join('');

const customers = [
  ['AC','บริษัท แอตลาส มารีน จำกัด','Atlas Marine Co., Ltd.','C-2024-001','คุณอนันต์ วัฒนชัย','02-345-6789','กรุงเทพฯ','ลูกค้าประจำ'],
  ['SP','สยาม พอร์ต เซอร์วิส','Siam Port Services','C-2024-002','คุณกิตติ ศรีสุข','02-876-5432','ชลบุรี','ลูกค้าประจำ'],
  ['OC','โอเชียนิค ครูซ จำกัด','Oceanic Cruise Co., Ltd.','C-2024-003','คุณนภา รุ่งเรือง','081-234-5678','ภูเก็ต','ใหม่'],
  ['TM','ไทด์วอเตอร์ มารีน','Tidewater Marine','C-2024-004','คุณธนา ภักดี','038-555-0192','ระยอง','ลูกค้าประจำ'],
  ['BA','บริษัท บลู อาร์ค จำกัด','Blue Arc Co., Ltd.','C-2024-005','คุณสุรีย์พร ใจดี','02-221-4630','กรุงเทพฯ','ใหม่'],
  ['GN','กัลฟ์ เนวิเกชัน','Gulf Navigation','C-2024-006','คุณปริญญา กลิ่นหอม','076-442-8301','สงขลา','ลูกค้าประจำ']
];
const products = [
  ['PRD-001','GPS Navigator X500','Garmin Marine','฿48,500','นำทาง GPS · หน้าจอ 7 นิ้ว','พร้อมจำหน่าย'],
  ['PRD-002','Marine Radar 4kW','Furuno','฿126,000','เรดาร์ 4 kW · ระยะ 36 NM','พร้อมจำหน่าย'],
  ['PRD-003','VHF Radio GX6000','Standard Horizon','฿28,900','VHF · AIS รับ-ส่งสัญญาณ','พร้อมจำหน่าย'],
  ['PRD-004','Echo Sounder E700','Raymarine','฿56,400','โซนาร์ · CHIRP 600W','สินค้าใกล้หมด'],
  ['PRD-005','Autopilot AP44','Simrad','฿89,000','ระบบควบคุมอัตโนมัติ · NAC-2','พร้อมจำหน่าย'],
  ['PRD-006','Marine Battery 200Ah','Victron Energy','฿19,800','LiFePO4 · 12.8V · 200Ah','สินค้าใกล้หมด'],
  ['PRD-007','AIS Transponder Class B','Garmin Marine','฿35,500','AIS Class B · 5W','พร้อมจำหน่าย']
];
const quotations = [
  ['QT-2025-041','Atlas Marine Co., Ltd.','12 มิ.ย. 2568','฿245,000','อนุมัติแล้ว'],
  ['QT-2025-040','Oceanic Cruise Co., Ltd.','10 มิ.ย. 2568','฿128,500','รอพิจารณา'],
  ['QT-2025-039','Siam Port Services','08 มิ.ย. 2568','฿386,000','รอพิจารณา'],
  ['QT-2025-038','Tidewater Marine','05 มิ.ย. 2568','฿92,400','ไม่อนุมัติ'],
  ['QT-2025-037','Blue Arc Co., Ltd.','02 มิ.ย. 2568','฿175,000','อนุมัติแล้ว'],
  ['QT-2025-036','Gulf Navigation','29 พ.ค. 2568','฿64,800','รอพิจารณา']
];
const projects = [
  ['PRJ-2025-012','ติดตั้งระบบนำทางเรือ MV Atlas','Atlas Marine Co., Ltd.','กำลังดำเนินการ','03 มิ.ย. 2568','฿245,000'],
  ['PRJ-2025-011','อัปเกรดเรดาร์ท่าเรือแหลมฉบัง','Siam Port Services','กำลังดำเนินการ','20 พ.ค. 2568','฿386,000'],
  ['PRJ-2025-010','ระบบสื่อสารเรือ Ocean Star','Oceanic Cruise Co., Ltd.','รอเริ่มงาน','15 มิ.ย. 2568','฿128,500'],
  ['PRJ-2025-009','บำรุงรักษาระบบนำทางประจำปี','Tidewater Marine','เสร็จสิ้น','05 พ.ค. 2568','฿92,400'],
  ['PRJ-2025-008','ติดตั้ง AIS เรือ Blue Horizon','Blue Arc Co., Ltd.','เสร็จสิ้น','17 เม.ย. 2568','฿175,000'],
  ['PRJ-2025-007','ปรับปรุงระบบควบคุมเรือ','Gulf Navigation','กำลังดำเนินการ','10 เม.ย. 2568','฿318,000']
];
const transactions = [
  ['INV-2025-086','ติดตั้ง GPS Navigator X500','Atlas Marine Co., Ltd.','10 มิ.ย. 2568','฿245,000','รายรับ'],
  ['INV-2025-085','งานติดตั้งและทดสอบระบบ','Siam Port Services','08 มิ.ย. 2568','฿86,000','รายรับ'],
  ['EXP-2025-041','จัดซื้อ Marine Radar 4kW','Furuno Thailand','06 มิ.ย. 2568','฿64,000','ต้นทุน'],
  ['EXP-2025-040','ค่าขนส่งอุปกรณ์ทางทะเล','Ocean Freight Co.','03 มิ.ย. 2568','฿12,500','ต้นทุน'],
  ['INV-2025-084','บำรุงรักษาระบบนำทาง','Tidewater Marine','01 มิ.ย. 2568','฿92,400','รายรับ'],
  ['EXP-2025-039','ค่าแรงติดตั้งโครงการ','ทีมช่างภาคสนาม','30 พ.ค. 2568','฿28,000','ต้นทุน'],
  ['INV-2025-083','จำหน่าย VHF Radio GX6000','Blue Arc Co., Ltd.','28 พ.ค. 2568','฿56,800','รายรับ']
];
const documents = [
  ['ใบเสนอราคา Atlas Marine — มิถุนายน 2568','QT-2025-041 · 12 มิ.ย. 2568','PDF','2.4 MB','pdf'],
  ['คู่มือการใช้งาน GPS Navigator X500','PRD-001 · 08 มิ.ย. 2568','PDF','5.1 MB','pdf'],
  ['สรุปรายรับและต้นทุน Q2 2568','FIN-Q2-2025 · 05 มิ.ย. 2568','XLSX','840 KB','xlsx'],
  ['สัญญาโครงการติดตั้งระบบนำทาง','PRJ-2025-012 · 03 มิ.ย. 2568','PDF','1.8 MB','pdf'],
  ['ข้อมูลจำเพาะ Marine Radar 4kW','PRD-002 · 30 พ.ค. 2568','DOCX','1.2 MB','docx'],
  ['รายงานตรวจสอบเรือ MV Atlas','PRJ-2025-010 · 22 พ.ค. 2568','PDF','3.7 MB','pdf']
];
const knowledge = [
  ['book','คู่มือผลิตภัณฑ์','คู่มือการใช้งานและการติดตั้งจากผู้ผลิตชั้นนำ ครอบคลุมระบบนำทางและสื่อสาร','18 เอกสาร','อัปเดต 12 มิ.ย. 2568'],
  ['wrench','ข้อมูลทางเทคนิค','ข้อมูลสเปกสินค้า แผนผังสายไฟ และข้อแนะนำการบำรุงรักษา','24 รายการ','อัปเดต 10 มิ.ย. 2568'],
  ['ship','โครงการที่ผ่านมา','บทเรียนและเอกสารอ้างอิงจากโครงการที่ดำเนินการเสร็จสิ้น','12 โครงการ','อัปเดต 05 มิ.ย. 2568'],
  ['layers','มาตรฐานและข้อกำหนด','มาตรฐานความปลอดภัยทางทะเล ข้อกำหนด IMO และแนวทางการติดตั้ง','9 เอกสาร','อัปเดต 02 มิ.ย. 2568'],
  ['pin','คู่มือหน้างาน','รายการตรวจสอบการติดตั้งและแบบฟอร์มสำหรับทีมภาคสนาม','7 รายการ','อัปเดต 28 พ.ค. 2568'],
  ['package','คลังอุปกรณ์','ข้อมูลรุ่นสินค้า การรับประกัน และอุปกรณ์เสริมที่รองรับ','16 รายการ','อัปเดต 20 พ.ค. 2568']
];

const pageContent = document.getElementById('pageContent');
let currentPage = 'dashboard';
let toastTimer;
const statusClass = (text) => text.includes('อนุมัติแล้ว') || text.includes('เสร็จสิ้น') || text.includes('ประจำ') ? 'status-success' : text.includes('รอ') || text.includes('ใหม่') ? 'status-pending' : text.includes('ไม่อนุมัติ') ? 'status-rejected' : text.includes('ดำเนินการ') ? 'status-progress' : text.includes('ใกล้หมด') ? 'status-pending' : 'status-neutral';
const statusTag = text => `<span class="status ${statusClass(text)}">${text}</span>`;
const initials = text => text.replace(/บริษัท|จำกัด|Co\.?,?\s*Ltd\.?|Services|Marine|Company|ศูนย์/g, '').trim().split(/\s+/).slice(0, 2).map(w => [...w][0]).join('').toUpperCase() || 'NM';
const pageTitle = id => pages.find(p => p.id === id)?.title || 'ภาพรวม';
const heading = (title, desc, actions = '') => `<div class="page-heading"><div><h1>${title}</h1><p>${desc}</p></div><div class="heading-actions">${actions}</div></div>`;
const actionButton = (text, action, iconName = 'plus', primary = true) => `<button class="button button-sm ${primary ? 'button-primary' : 'button-outline'}" data-action="${action}">${icon(iconName)}${text}</button>`;
const searchToolbar = (placeholder, filters = '', actions = '') => `<div class="toolbar"><div class="toolbar-left"><label class="search-box">${icon('search')}<input type="search" data-search placeholder="${placeholder}" aria-label="${placeholder}"></label>${filters}</div><div class="toolbar-right">${actions}</div></div>`;
const tableFooter = count => `<div class="table-footer"><span>แสดง ${Math.min(count, 7)} จาก ${count} รายการ</span><div class="pagination"><button class="page-number" aria-label="ก่อนหน้า">‹</button><button class="page-number selected">1</button><button class="page-number">2</button><button class="page-number">3</button><button class="page-number" aria-label="หน้าถัดไป">›</button></div></div>`;
const table = (heads, rows, rowClass = '') => `<div class="table-wrap"><table class="data-table ${rowClass}"><thead><tr>${heads.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></div>`;
const rowAction = (action, label, iconName) => `<button class="row-action" data-action="${action}" aria-label="${label}">${icon(iconName)}</button>`;

function renderDashboard() {
  const stats = [
    ['ลูกค้าทั้งหมด','156','ราย','เพิ่มขึ้น 12%','users'],
    ['ใบเสนอราคา','48','รายการ','เพิ่มขึ้น 8%','quote'],
    ['โครงการ','24','โครงการ','เพิ่มขึ้น 5%','briefcase'],
    ['รายรับรวม','฿2.45M','บาท','เพิ่มขึ้น 18%','chart'],
    ['ต้นทุนรวม','฿1.62M','บาท','ลดลง 3%','coins'],
    ['กำไรสุทธิ','฿830K','บาท','เพิ่มขึ้น 24%','trend']
  ];
  const statCards = stats.map((s, i) => `<article class="card stat-card"><div class="stat-top"><span>${s[0]}</span><span class="stat-icon">${icon(s[4])}</span></div><div class="stat-value"><strong>${s[1]}</strong><small>${s[2]}</small></div><div class="stat-trend ${i === 4 ? '' : ''}">↗ ${s[3]} <span>จากเดือนก่อน</span></div></article>`).join('');
  const recent = projects.slice(0, 4).map(p => `<tr><td><span class="table-id">${p[0]}</span></td><td><div class="primary-cell">${p[1]}</div></td><td>${p[2]}</td><td>${statusTag(p[3])}</td><td>${p[4]}</td><td><b>${p[5]}</b></td></tr>`).join('');
  return `${heading('ภาพรวม', 'ภาพรวมธุรกิจ Nical Marine ของคุณ', `<button class="button button-sm button-outline" data-action="export">${icon('download')}ส่งออกรายงาน</button>`)}
    <div class="stat-grid">${statCards}</div>
    <div class="dashboard-charts">
      <article class="card chart-card"><div class="card-heading"><div><h2 class="section-title">รายรับและต้นทุน</h2><p class="section-subtitle">ภาพรวมผลประกอบการรายเดือน</p></div><div class="chart-controls"><div class="chart-legend"><span><i class="legend-dot"></i>รายรับ</span><span><i class="legend-dot expense"></i>ต้นทุน</span></div><select class="select-small" aria-label="เลือกช่วงเวลา"><option>ปี 2568</option><option>ปี 2567</option></select></div></div>
        <div class="line-chart"><svg viewBox="0 0 620 195" role="img" aria-label="กราฟรายรับและต้นทุนตั้งแต่เดือนมกราคมถึงมิถุนายน"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#3982b9" stop-opacity=".16"/><stop offset="1" stop-color="#3982b9" stop-opacity="0"/></linearGradient></defs>
          <path class="chart-grid" d="M42 20H610M42 58H610M42 96H610M42 134H610M42 172H610"/><text class="chart-label" x="0" y="24">600k</text><text class="chart-label" x="0" y="62">450k</text><text class="chart-label" x="0" y="100">300k</text><text class="chart-label" x="0" y="138">150k</text><text class="chart-label" x="18" y="176">0</text>
          <path class="chart-area" d="M55 114 C92 108 105 85 145 90 S202 112 240 75 S299 66 335 78 S392 43 430 55 S487 78 525 43 S578 36 600 29 L600 172 L55 172Z"/>
          <path class="chart-line-revenue" d="M55 114 C92 108 105 85 145 90 S202 112 240 75 S299 66 335 78 S392 43 430 55 S487 78 525 43 S578 36 600 29"/>
          <path class="chart-line-expense" d="M55 143 C95 132 108 120 145 127 S202 139 240 119 S299 108 335 118 S392 95 430 108 S487 124 525 94 S578 100 600 83"/>
          <text class="chart-label" x="45" y="191">ม.ค.</text><text class="chart-label" x="140" y="191">ก.พ.</text><text class="chart-label" x="235" y="191">มี.ค.</text><text class="chart-label" x="330" y="191">เม.ย.</text><text class="chart-label" x="425" y="191">พ.ค.</text><text class="chart-label" x="525" y="191">มิ.ย.</text></svg></div>
      </article>
      <article class="card chart-card"><div class="card-heading"><div><h2 class="section-title">สถานะโครงการ</h2><p class="section-subtitle">สรุปโครงการทั้งหมด</p></div><button class="link-button" data-page="projects">ดูทั้งหมด ${icon('arrowRight')}</button></div>
        <div class="donut-wrap"><div class="donut-holder"><svg class="donut" viewBox="0 0 120 120" aria-label="สัดส่วนสถานะโครงการ"><circle class="donut-bg" cx="60" cy="60" r="50"/><circle class="donut-value" cx="60" cy="60" r="50"/><circle class="donut-value-2" cx="60" cy="60" r="50"/></svg><div class="donut-center"><strong>24</strong><small>โครงการ</small></div></div><div class="donut-legend"><div><i class="legend-dot"></i>กำลังดำเนินการ<b>12 โครงการ</b></div><div><i class="legend-dot expense"></i>เสร็จสิ้น<b>8 โครงการ</b></div><div><i class="legend-dot" style="background:#edf1f5"></i>รอเริ่มงาน<b>4 โครงการ</b></div></div></div></article>
    </div>
    <article class="card recent-card"><div class="card-heading"><div><h2 class="section-title">โครงการล่าสุด</h2><p class="section-subtitle">รายการโครงการที่อัปเดตล่าสุด</p></div><button class="link-button" data-page="projects">ดูโครงการทั้งหมด ${icon('arrowRight')}</button></div>${table(['รหัสโครงการ','ชื่อโครงการ','ลูกค้า','สถานะ','วันที่เริ่ม','มูลค่า'], recent)}</article>`;
}

function renderCustomers() {
  const rows = customers.map(c => `<tr><td><div class="primary-cell"><span class="initial-avatar">${c[0]}</span><span>${c[1]}<small class="cell-sub">${c[2]}</small></span></div></td><td><span class="table-id">${c[3]}</span></td><td>${c[4]}<small class="cell-sub">${c[5]}</small></td><td>${c[6]}</td><td>${statusTag(c[7])}</td><td>${rowAction('details', 'ดูรายละเอียดลูกค้า', 'eyeSmall')}${rowAction('edit', 'แก้ไขข้อมูล', 'edit')}</td></tr>`).join('');
  return `${heading('ลูกค้า','จัดการข้อมูลและความสัมพันธ์กับลูกค้าของคุณ',actionButton('เพิ่มลูกค้า','add-customer'))}<article class="card">${searchToolbar('ค้นหาชื่อลูกค้า บริษัท หรือรหัสลูกค้า')}<div data-table-container>${table(['ชื่อลูกค้า','รหัสลูกค้า','ผู้ติดต่อ','จังหวัด','ประเภท','จัดการ'], rows)}${tableFooter(customers.length)}</div></article>`;
}
function renderProducts() {
  const rows = products.map(p => `<tr><td><div class="primary-cell"><span class="initial-avatar">${icon('box')}</span><span>${p[1]}<small class="cell-sub">${p[2]}</small></span></div></td><td><span class="table-id">${p[0]}</span></td><td class="product-spec">${p[4]}</td><td><b>${p[3]}</b></td><td>${statusTag(p[5])}</td><td>${rowAction('details','ดูรายละเอียดสินค้า','eyeSmall')}${rowAction('edit','แก้ไขสินค้า','edit')}</td></tr>`).join('');
  const filters = `<select class="filter-select" data-filter aria-label="กรองสถานะสินค้า"><option value="">ทุกสถานะ</option><option>พร้อมจำหน่าย</option><option>สินค้าใกล้หมด</option></select>`;
  return `${heading('สินค้า','รายการสินค้า อุปกรณ์ และข้อมูลทางเทคนิค',actionButton('เพิ่มสินค้า','add-product'))}<article class="card">${searchToolbar('ค้นหาชื่อสินค้า หรือรหัสสินค้า',filters)}<div data-table-container>${table(['สินค้า','รหัสสินค้า','ข้อมูลทางเทคนิค','ราคา','สถานะสต็อก','จัดการ'], rows)}${tableFooter(products.length)}</div></article>`;
}
function renderQuotations() {
  const rows = quotations.map(q => `<tr><td><span class="table-id">${q[0]}</span></td><td><div class="primary-cell">${q[1]}</div></td><td>${q[2]}</td><td><b>${q[3]}</b></td><td>${statusTag(q[4])}</td><td>${rowAction('details','ดูรายละเอียดใบเสนอราคา','eyeSmall')}${rowAction('download','ดาวน์โหลดใบเสนอราคา','download')}</td></tr>`).join('');
  const filters = `<select class="filter-select" data-filter aria-label="กรองสถานะ"><option value="">ทุกสถานะ</option><option>รอพิจารณา</option><option>อนุมัติแล้ว</option><option>ไม่อนุมัติ</option></select>`;
  return `${heading('ใบเสนอราคา','ติดตามและจัดการใบเสนอราคาทั้งหมด',actionButton('สร้างใบเสนอราคา','add-quotation'))}<article class="card">${searchToolbar('ค้นหาเลขที่ใบเสนอราคา หรือลูกค้า',filters)}<div data-table-container>${table(['เลขที่เอกสาร','ลูกค้า','วันที่ออก','มูลค่ารวม','สถานะ','จัดการ'], rows)}${tableFooter(quotations.length)}</div></article>`;
}
function renderProjects() {
  const rows = projects.map(p => `<tr><td><span class="table-id">${p[0]}</span></td><td><div class="primary-cell">${p[1]}</div></td><td>${p[2]}</td><td>${statusTag(p[3])}</td><td>${p[4]}</td><td><b>${p[5]}</b></td><td>${rowAction('details','ดูรายละเอียดโครงการ','eyeSmall')}${rowAction('edit','แก้ไขโครงการ','edit')}</td></tr>`).join('');
  const filters = `<select class="filter-select" data-filter aria-label="กรองสถานะ"><option value="">ทุกสถานะ</option><option>กำลังดำเนินการ</option><option>รอเริ่มงาน</option><option>เสร็จสิ้น</option></select>`;
  return `${heading('โครงการ','ติดตามความคืบหน้าโครงการของคุณ',actionButton('เพิ่มโครงการ','add-project'))}<article class="card">${searchToolbar('ค้นหาโครงการ รหัส หรือชื่อลูกค้า',filters)}<div data-table-container>${table(['รหัสโครงการ','ชื่อโครงการ','ลูกค้า','สถานะ','วันที่เริ่ม','มูลค่าโครงการ','จัดการ'], rows)}${tableFooter(projects.length)}</div></article>`;
}
function renderFinance() {
  const financeRows = type => transactions.filter(t => t[5] === type).map(t => `<tr><td><span class="table-id">${t[0]}</span></td><td><div class="primary-cell">${t[1]}</div></td><td>${t[2]}</td><td>${t[3]}</td><td><b class="${type === 'ต้นทุน' ? 'finance-expense' : ''}">${type === 'ต้นทุน' ? '−' : '+'} ${t[4]}</b></td></tr>`).join('');
  return `${heading('การเงิน','สรุปรายรับ ต้นทุน และผลประกอบการ',`<button class="button button-sm button-outline" data-action="export">${icon('download')}ส่งออกรายงาน</button>`)}
    <div class="finance-summary">${[['รายรับรวม','฿2,450,000','จากธุรกิจและโครงการ','chart'],['ต้นทุนรวม','฿1,620,000','สินค้าและค่าใช้จ่าย','coins'],['กำไรสุทธิ','฿830,000','อัตรากำไร 33.9%','trend']].map(x => `<article class="card info-card"><div class="info-card-label"><span class="stat-icon">${icon(x[3])}</span>${x[0]}</div><div class="info-card-value">${x[1]}</div><div class="info-card-foot">${x[2]}</div></article>`).join('')}</div>
    ${searchToolbar('ค้นหาเลขที่เอกสาร รายการ หรือบริษัท')}
    <article class="card recent-card"><div class="card-heading"><div><h2 class="section-title">รายรับ</h2><p class="section-subtitle">รายได้จากลูกค้าและโครงการ</p></div></div><div data-table-container>${table(['เลขที่เอกสาร','รายการ','ลูกค้า / ผู้รับบริการ','วันที่','จำนวนเงิน'], financeRows('รายรับ'))}${tableFooter(transactions.filter(t => t[5] === 'รายรับ').length)}</div></article>
    <article class="card recent-card"><div class="card-heading"><div><h2 class="section-title">ต้นทุน</h2><p class="section-subtitle">ต้นทุนสินค้าและค่าใช้จ่าย</p></div></div><div data-table-container>${table(['เลขที่เอกสาร','รายการ','ผู้จำหน่าย / รายการ','วันที่','จำนวนเงิน'], financeRows('ต้นทุน'))}${tableFooter(transactions.filter(t => t[5] === 'ต้นทุน').length)}</div></article>`;
}
function renderDocuments() {
  const rows = documents.map((d, i) => `<tr><td><div class="document-name"><span class="file-type ${d[4]}">${d[2]}</span><span>${d[0]}<small class="cell-sub">${d[1]}</small></span></div></td><td>${d[2]}</td><td>${d[3]}</td><td>${i < 3 ? 'Nical Company' : 'ทีมโครงการ'}</td><td>${rowAction('preview','ดูตัวอย่างเอกสาร','eyeSmall')}${rowAction('download','ดาวน์โหลดเอกสาร','download')}</td></tr>`).join('');
  return `${heading('เอกสาร','จัดเก็บและค้นหาเอกสารสำคัญของบริษัท',actionButton('อัปโหลดเอกสาร','upload','plus'))}<article class="card">${searchToolbar('ค้นหาชื่อเอกสาร หรือรหัสโครงการ',`<select class="filter-select" data-filter aria-label="กรองประเภทเอกสาร"><option value="">ทุกประเภท</option><option>PDF</option><option>XLSX</option><option>DOCX</option></select>`)}<div data-table-container>${table(['ชื่อเอกสาร','ประเภท','ขนาดไฟล์','อัปโหลดโดย','จัดการ'], rows)}${tableFooter(documents.length)}</div></article>`;
}
function renderKnowledge() {
  return `${heading('คลังความรู้','แหล่งรวมคู่มือและข้อมูลทางเทคนิคสำหรับทีมของคุณ',`<label class="search-box">${icon('search')}<input type="search" data-knowledge-search placeholder="ค้นหาคลังความรู้" aria-label="ค้นหาคลังความรู้"></label>`)}
    <div class="knowledge-grid">${knowledge.map((k,i) => `<button class="card knowledge-card" data-action="knowledge" data-index="${i}" style="text-align:left;color:inherit;border:1px solid #edf0f3;cursor:pointer"><span class="knowledge-icon">${icon(k[0])}</span><h3>${k[1]}</h3><p>${k[2]}</p><div class="knowledge-meta"><span>${k[3]}</span><span>${k[4]}</span></div></button>`).join('')}</div>
    <article class="card knowledge-detail"><div class="card-heading"><div><h2 class="section-title">รายการที่เพิ่มล่าสุด</h2><p class="section-subtitle">เอกสารและข้อมูลในคลังความรู้</p></div><button class="link-button" data-page="documents">ดูเอกสารทั้งหมด ${icon('arrowRight')}</button></div>
      ${table(['ชื่อเอกสาร','หมวดหมู่','อัปเดตล่าสุด','จัดการ'], documents.slice(1,5).map(d => `<tr><td><div class="document-name"><span class="file-type ${d[4]}">${d[2]}</span>${d[0]}</div></td><td>คู่มือผลิตภัณฑ์</td><td>${d[1].split('· ')[1]}</td><td>${rowAction('preview','ดูตัวอย่าง','eyeSmall')}${rowAction('download','ดาวน์โหลด','download')}</td></tr>`).join(''))}</article>`;
}

function renderAbout() {
  return `${heading('เกี่ยวกับเรา','รู้จัก Nical Marine Co., Ltd.')}
    <section class="about-hero card">
      <div class="about-hero-copy">
        <span class="eyebrow">ABOUT NICAL MARINE</span>
        <h2>Nical Marine Co., Ltd.</h2>
        <p class="about-thai-name">บริษัท นิคอล มารีน จำกัด</p>
        <p class="about-intro">บริษัทที่ดำเนินธุรกิจในกรุงเทพฯ ประเทศไทย โดยเชี่ยวชาญด้านการค้าและการผลิตอุปกรณ์ความปลอดภัย รวมถึงแพชูชีพสำหรับงานทางทะเล</p>
      </div>
      <div class="about-hero-mark" aria-hidden="true">${icon('ship')}</div>
    </section>
    <section class="about-details" aria-label="Company details">
      <article class="card about-detail-card"><span class="about-detail-icon">${icon('pin')}</span><div><span class="about-detail-label">ที่ตั้ง</span><h3>กรุงเทพฯ ประเทศไทย</h3><p>Bangkok, Thailand</p></div></article>
      <article class="card about-detail-card"><span class="about-detail-icon">${icon('wrench')}</span><div><span class="about-detail-label">ธุรกิจหลัก</span><h3>อุปกรณ์ความปลอดภัยทางทะเล</h3><p>Trading and manufacturing</p></div></article>
      <article class="card about-detail-card"><span class="about-detail-icon">${icon('lifeBuoy')}</span><div><span class="about-detail-label">ผลิตภัณฑ์เฉพาะทาง</span><h3>แพชูชีพ</h3><p>Marine life rafts</p></div></article>
    </section>
    <article class="card about-company-card">
      <div><span class="eyebrow">COMPANY PROFILE</span><h2>ข้อมูลบริษัท</h2><p>ข้อมูลสถานะและลักษณะธุรกิจของบริษัทตามแหล่งอ้างอิงที่ระบุ</p></div>
      <div class="about-company-status"><span class="status status-success">ดำเนินกิจการอยู่</span><span>Active company</span></div>
    </article>
    <div class="about-sources"><span>แหล่งข้อมูล:</span><a href="https://www.dataforthai.com/company/0105561035630/" target="_blank" rel="noopener noreferrer">DataForThai ${icon('arrowUpRight')}</a><a href="https://www.matchlink.asia/business/page/Thailand/BANGKOK/01976-nical-marine-co-ltd.html" target="_blank" rel="noopener noreferrer">MatchLink ${icon('arrowUpRight')}</a></div>`;
}

const renderers = { dashboard: renderDashboard, customers: renderCustomers, products: renderProducts, quotations: renderQuotations, projects: renderProjects, finance: renderFinance, documents: renderDocuments, knowledge: renderKnowledge, about: renderAbout };
function navigate(id) {
  if (!renderers[id]) return;
  currentPage = id;
  pageContent.innerHTML = renderers[id]();
  document.querySelectorAll('.nav-item').forEach(button => button.classList.toggle('active', button.dataset.page === id));
  document.getElementById('breadcrumbCurrent').textContent = pageTitle(id);
  closeSidebar();
  pageContent.focus({ preventScroll: true });
}
function toast(message) {
  const region = document.getElementById('toastRegion');
  const item = document.createElement('div');
  item.className = 'toast';
  item.innerHTML = icon('check');
  item.append(document.createTextNode(message));
  region.replaceChildren(item);
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { region.innerHTML = ''; }, 3000);
}
function openModal(title, description, body, submitLabel = 'บันทึกข้อมูล') {
  const layer = document.getElementById('modalLayer');
  const closeOnly = submitLabel.startsWith('ปิด');
  layer.innerHTML = `<form class="modal" id="demoForm"><div class="modal-header"><div><h2>${title}</h2><p>${description}</p></div><button class="modal-close" type="button" data-action="close-modal" aria-label="ปิด">${icon('close')}</button></div><div class="modal-body">${body}</div><div class="modal-footer">${closeOnly ? `<button class="button button-sm button-primary" type="button" data-action="close-modal">${submitLabel}</button>` : `<button class="button button-sm button-outline" type="button" data-action="close-modal">ยกเลิก</button><button class="button button-sm button-primary" type="submit">${submitLabel}</button>`}</div></form>`;
  layer.classList.add('open');
  layer.setAttribute('aria-hidden', 'false');
  layer.querySelector('input,select,textarea')?.focus();
}
function openHelp() {
  const layer = document.getElementById('modalLayer');
  const showKnowledgeLink = !document.getElementById('appShell').classList.contains('is-hidden');
  layer.innerHTML = `<section class="modal help-modal" role="dialog" aria-modal="true" aria-labelledby="helpTitle" aria-describedby="helpDescription"><div class="modal-header"><div><h2 id="helpTitle">ศูนย์ช่วยเหลือ</h2><p id="helpDescription">คำแนะนำการใช้งาน Nical Marine</p></div><button class="modal-close" type="button" data-action="close-modal" aria-label="ปิด">${icon('close')}</button></div><div class="help-content"><details class="help-topic" open><summary>เริ่มต้นใช้งานระบบอย่างไร?</summary><p>หลังเข้าสู่ระบบ เลือกเมนูด้านซ้ายเพื่อดูภาพรวม จัดการลูกค้า สินค้า ใบเสนอราคา โครงการ การเงิน และเอกสาร</p></details><details class="help-topic"><summary>ลืมรหัสผ่านหรือเข้าสู่ระบบไม่ได้</summary><p>กรุณาติดต่อผู้ดูแลระบบของบริษัทเพื่อขอรีเซ็ตรหัสผ่าน และตรวจสอบชื่อผู้ใช้งานก่อนลองอีกครั้ง</p><button class="help-inline-action" type="button" data-action="help-password">ดูวิธีรีเซ็ตรหัสผ่าน</button></details><details class="help-topic"><summary>ข้อมูลที่แสดงในระบบเป็นข้อมูลจริงหรือไม่?</summary><p>หน้าจอนี้เป็นตัวอย่างการใช้งาน ข้อมูลและการบันทึกบางรายการเป็นข้อมูลจำลองและยังไม่เชื่อมต่อฐานข้อมูล</p></details></div><div class="modal-footer">${showKnowledgeLink ? '<button class="button button-sm button-outline" type="button" data-action="help-knowledge">ไปที่คลังความรู้</button>' : ''}<button class="button button-sm button-primary" type="button" data-action="close-modal">ปิด</button></div></section>`;
  layer.classList.add('open');
  layer.setAttribute('aria-hidden', 'false');
  layer.querySelector('.modal-close').focus();
}
function field(label, placeholder, type = 'text', full = false) {
  return `<div class="form-field ${full ? 'full' : ''}"><label>${label}</label><input type="${type}" placeholder="${placeholder}" ${type === 'email' ? 'autocomplete="email"' : ''}></div>`;
}
function closeModal() {
  const layer = document.getElementById('modalLayer');
  layer.classList.remove('open');
  layer.setAttribute('aria-hidden', 'true');
  layer.innerHTML = '';
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('mobile-open');
  document.getElementById('sidebarScrim').classList.remove('open');
}
function showDetails(kind) {
  const content = {
    customers: `<div class="form-field full"><label>ชื่อลูกค้า</label><input value="บริษัท แอตลาส มารีน จำกัด" readonly></div>${field('ผู้ติดต่อ','คุณอนันต์ วัฒนชัย')}${field('หมายเลขโทรศัพท์','02-345-6789')}${field('อีเมล','contact@atlasmarine.co.th','email')}${field('ที่อยู่','กรุงเทพมหานคร', 'text', true)}`,
    products: `<div class="form-field full"><label>ชื่อสินค้า</label><input value="GPS Navigator X500" readonly></div>${field('ผู้ผลิต','Garmin Marine')}${field('ราคา','฿48,500')}${field('ข้อมูลทางเทคนิค','หน้าจอ 7 นิ้ว · GPS', 'text', true)}${field('สถานะ','พร้อมจำหน่าย')}`,
    quotations: `<div class="form-field full"><label>เลขที่ใบเสนอราคา</label><input value="QT-2025-041" readonly></div>${field('ลูกค้า','Atlas Marine Co., Ltd.')}${field('วันที่ออก','12 มิ.ย. 2568')}${field('ยอดรวม','฿245,000')}${field('สถานะ','อนุมัติแล้ว')}`,
    projects: `<div class="form-field full"><label>ชื่อโครงการ</label><input value="ติดตั้งระบบนำทางเรือ MV Atlas" readonly></div>${field('รหัสโครงการ','PRJ-2025-012')}${field('ลูกค้า','Atlas Marine Co., Ltd.')}${field('วันที่เริ่ม','03 มิ.ย. 2568')}${field('สถานะ','กำลังดำเนินการ')}`
  }[kind] || '';
  openModal(`รายละเอียด${pageTitle(kind)}`, 'ข้อมูลตัวอย่างสำหรับการแสดงผล', content, 'ปิดรายละเอียด');
}
function modalFor(action) {
  const configs = {
    'add-customer': ['เพิ่มลูกค้าใหม่','กรอกข้อมูลเบื้องต้นของลูกค้า',`${field('ชื่อลูกค้า','ชื่อบริษัท', 'text', true)}${field('ผู้ติดต่อ','ชื่อ-นามสกุล')}${field('หมายเลขโทรศัพท์','0xx-xxx-xxxx','tel')}${field('อีเมล','name@company.com','email')}${field('จังหวัด','เลือกจังหวัด')}${field('ที่อยู่','ที่อยู่บริษัท','text',true)}`,'เพิ่มลูกค้า'],
    'add-product': ['เพิ่มสินค้าใหม่','กรอกข้อมูลสินค้าและอุปกรณ์',`${field('ชื่อสินค้า','ชื่อสินค้า','text',true)}${field('รหัสสินค้า','เช่น PRD-008')}${field('ผู้ผลิต','ชื่อผู้ผลิต')}${field('ราคา (บาท)','0','number')}${field('ข้อมูลทางเทคนิค','รายละเอียดสินค้า','text',true)}`,'เพิ่มสินค้า'],
    'add-project': ['เพิ่มโครงการใหม่','กรอกข้อมูลโครงการเบื้องต้น',`${field('ชื่อโครงการ','ชื่อโครงการ','text',true)}${field('รหัสโครงการ','PRJ-2025-013')}${field('ชื่อลูกค้า','เลือกลูกค้า')}${field('วันที่เริ่ม','เลือกวันที่','date')}${field('รายละเอียด','รายละเอียดโครงการ','text',true)}`,'เพิ่มโครงการ'],
    'add-quotation': ['สร้างใบเสนอราคา','ระบุลูกค้าและรายการสินค้า',`${field('ลูกค้า','ค้นหาและเลือกลูกค้า','text',true)}${field('วันที่ออก','เลือกวันที่','date')}${field('สินค้า','ค้นหาและเลือกสินค้า')}${field('จำนวน','1','number')}${field('ราคาต่อหน่วย (บาท)','0','number')}${field('หมายเหตุ','รายละเอียดเพิ่มเติม','text',true)}`,'สร้างใบเสนอราคา']
  };
  if (configs[action]) openModal(...configs[action]);
}
function downloadDemo(name) {
  const data = `Nical Marine\\n${name}\\nเอกสารตัวอย่างสำหรับการสาธิตระบบ`;
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([data], { type: 'text/plain;charset=utf-8' }));
  link.download = `${name.replace(/[\\\\/:*?"<>|]/g, '-')}.txt`;
  link.click();
  URL.revokeObjectURL(link.href);
  toast('ดาวน์โหลดเอกสารตัวอย่างแล้ว');
}

document.addEventListener('click', event => {
  const pageButton = event.target.closest('[data-page]');
  if (pageButton) { event.preventDefault(); navigate(pageButton.dataset.page); return; }
  const actionButtonElement = event.target.closest('[data-action]');
  if (!actionButtonElement) return;
  const action = actionButtonElement.dataset.action;
  if (action.startsWith('add-')) modalFor(action);
  else if (action === 'help') openHelp();
  else if (action === 'help-password') {
    closeModal();
    toast('กรุณาติดต่อผู้ดูแลระบบเพื่อรีเซ็ตรหัสผ่าน');
  }
  else if (action === 'help-knowledge') {
    closeModal();
    navigate('knowledge');
  }
  else if (action === 'upload') document.getElementById('fileInput').click();
  else if (action === 'preview') {
    const name = actionButtonElement.closest('tr')?.querySelector('.document-name')?.innerText.split('\n')[0] || 'เอกสารตัวอย่าง';
    const doc = documents.find(d => d[0] === name) || documents[0];
    const layer = document.getElementById('modalLayer');
    layer.innerHTML = `<section class="modal"><div class="modal-header"><div><h2>ตัวอย่างเอกสาร</h2><p>${doc[0]}</p></div><button class="modal-close" type="button" data-action="close-modal" aria-label="ปิด">${icon('close')}</button></div><div class="preview-box"><span class="file-type ${doc[4]}">${doc[2]}</span><h3>${doc[0]}</h3><p>ตัวอย่างเอกสารสำหรับแสดงผลในระบบ Nical Marine<br>ประเภทไฟล์ ${doc[2]} · ขนาด ${doc[3]}<br><br>หมายเหตุ: ไฟล์นี้เป็นข้อมูลจำลองสำหรับการสาธิตหน้าจอ</p></div><div class="modal-footer"><button class="button button-sm button-outline" data-action="close-modal">ปิด</button><button class="button button-sm button-primary" data-action="download">${icon('download')}ดาวน์โหลด</button></div></section>`;
    layer.classList.add('open');
    layer.setAttribute('aria-hidden','false');
  } else if (action === 'download') {
    const name = actionButtonElement.closest('tr')?.querySelector('.document-name')?.innerText.split('\n')[0] || 'เอกสาร Nical Marine';
    downloadDemo(name);
  } else if (action === 'details') showDetails(currentPage);
  else if (action === 'edit') { toast('เปิดแบบฟอร์มแก้ไขข้อมูลตัวอย่าง'); }
  else if (action === 'close-modal') closeModal();
  else if (action === 'export') toast('สร้างรายงานตัวอย่างเรียบร้อย');
  else if (action === 'knowledge') {
    const item = knowledge[Number(actionButtonElement.dataset.index)];
    openModal(item[1], item[2], `<div class="form-field full"><label>เอกสารที่เกี่ยวข้อง</label><textarea readonly>• คู่มือผลิตภัณฑ์และแนวทางการใช้งาน\\n• ข้อมูลทางเทคนิคและข้อแนะนำ\\n• เอกสารอ้างอิงสำหรับทีมงาน Nical Marine\\n\\nหมวดหมู่นี้มี ${item[3]} พร้อมใช้งาน</textarea></div>`, 'ปิด');
  }
});
function updateTableRows() {
  const bodies = pageContent.querySelectorAll('.data-table tbody');
  if (!bodies.length) return;
  const query = pageContent.querySelector('[data-search]')?.value.trim().toLocaleLowerCase() || '';
  const filter = pageContent.querySelector('[data-filter]')?.value.toLocaleLowerCase() || '';
  bodies.forEach(body => {
    const rows = [...body.querySelectorAll('tr:not([data-no-results])')];
    let visible = 0;
    rows.forEach(row => {
      const text = row.textContent.toLocaleLowerCase();
      const match = text.includes(query) && (!filter || text.includes(filter));
      row.hidden = !match;
      if (match) visible++;
    });
    let emptyRow = body.querySelector('[data-no-results]');
    if (visible === 0 && !emptyRow) {
      emptyRow = document.createElement('tr');
      emptyRow.dataset.noResults = 'true';
      const cell = document.createElement('td');
      cell.className = 'table-empty';
      cell.colSpan = 10;
      cell.textContent = 'ไม่พบข้อมูลที่ตรงกับคำค้นหาหรือตัวกรอง';
      emptyRow.append(cell);
      body.append(emptyRow);
    } else if (visible > 0) {
      emptyRow?.remove();
    }
  });
}
pageContent.addEventListener('input', event => {
  if (event.target.matches('[data-search]')) {
    updateTableRows();
  } else if (event.target.matches('[data-knowledge-search]')) {
    const query = event.target.value.trim().toLocaleLowerCase();
    pageContent.querySelectorAll('.knowledge-card').forEach(card => { card.hidden = !card.innerText.toLocaleLowerCase().includes(query); });
  }
});
pageContent.addEventListener('change', event => {
  if (event.target.matches('[data-filter]')) updateTableRows();
});
document.getElementById('loginForm').addEventListener('submit', event => {
  event.preventDefault();
  document.getElementById('loginScreen').classList.add('is-hidden');
  document.getElementById('appShell').classList.remove('is-hidden');
  navigate('dashboard');
});
document.getElementById('togglePassword').addEventListener('click', event => {
  const password = document.getElementById('password');
  const visible = password.type === 'password';
  password.type = visible ? 'text' : 'password';
  event.currentTarget.setAttribute('aria-label', visible ? 'ซ่อนรหัสผ่าน' : 'แสดงรหัสผ่าน');
  event.currentTarget.innerHTML = icon(visible ? 'eyeOff' : 'eye');
});
document.getElementById('forgotPassword').addEventListener('click', event => { event.preventDefault(); toast('กรุณาติดต่อผู้ดูแลระบบเพื่อรีเซ็ตรหัสผ่าน'); });
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.add('mobile-open');
  document.getElementById('sidebarScrim').classList.add('open');
});
document.getElementById('sidebarScrim').addEventListener('click', closeSidebar);
document.getElementById('profileButton').addEventListener('click', () => {
  document.getElementById('appShell').classList.add('is-hidden');
  document.getElementById('loginScreen').classList.remove('is-hidden');
  document.getElementById('password').value = '';
});
document.getElementById('topProfile').addEventListener('click', () => {
  document.getElementById('appShell').classList.add('is-hidden');
  document.getElementById('loginScreen').classList.remove('is-hidden');
  document.getElementById('password').value = '';
});
document.getElementById('fileInput').addEventListener('change', event => {
  const file = event.target.files[0];
  if (file) toast(`เลือกไฟล์ “${file.name}” แล้ว (ตัวอย่างหน้าจอเท่านั้น)`);
  event.target.value = '';
});
document.getElementById('modalLayer').addEventListener('click', event => {
  if (event.target.id === 'modalLayer') closeModal();
});
document.getElementById('modalLayer').addEventListener('submit', event => {
  if (event.target.id !== 'demoForm') return;
  event.preventDefault();
  closeModal();
  toast('บันทึกตัวอย่างเรียบร้อย (ไม่มีการเชื่อมต่อฐานข้อมูล)');
});
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeModal(); closeSidebar(); } });
document.getElementById('loginYear').textContent = new Date().getFullYear();
document.getElementById('todayDate').textContent = new Intl.DateTimeFormat('th-TH', { dateStyle: 'medium' }).format(new Date());
navigate('dashboard');
