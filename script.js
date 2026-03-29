/* ═══════════════════════════════════════════════════════════
   script.js — ไฟล์ควบคุมการทำงานทั้งหมด
   ═══════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────
   📌 เพิ่มโพสต์ใหม่ได้ที่นี่ — เพิ่ม object ใหม่ใน array นี้
   category ที่ใช้ได้: urgent | announce | event | academic | scholarship
   ───────────────────────────────────────────────────────── */
const posts = [
  {
    id: 1,
    category: "urgent",
    icon: "⚠️",
    title: "ประกาศด่วน: ปิดทำการชั่วคราวอาคาร 9 เพื่อซ่อมแซมระบบไฟฟ้า",
    excerpt: "งานอาคารสถานที่แจ้งปิดอาคาร 9 ชั่วคราวในวันที่ 1-2 เมษายน 2568 เพื่อซ่อมแซมระบบไฟฟ้า โปรดวางแผนการใช้ห้องเรียนล่วงหน้า",
    content: "งานอาคารสถานที่และบริการขอแจ้งให้ทราบว่า จะดำเนินการซ่อมแซมระบบไฟฟ้าภายในอาคาร 9 ในวันที่ 1-2 เมษายน 2568 ตั้งแต่เวลา 08.00-17.00 น.\n\nในช่วงเวลาดังกล่าวจะไม่สามารถใช้ไฟฟ้าภายในอาคารได้ โปรดประสานงานกับงานตารางสอนเพื่อขอย้ายห้องเรียน\n\nขออภัยในความไม่สะดวก",
    date: "28 มีนาคม 2568",
    views: "1,205"
  },
  {
    id: 2,
    category: "event",
    icon: "🎉",
    title: "งาน Open House RMUTT 2025 วันที่ 20 เมษายน 2568",
    excerpt: "มทร.ธัญบุรี เปิดบ้านต้อนรับนักเรียนและผู้ปกครอง พบกับกิจกรรม workshop บูธแนะแนว และทัวร์ชมมหาวิทยาลัย",
    content: "มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี ขอเชิญนักเรียน ผู้ปกครอง และผู้สนใจเข้าร่วมงาน Open House RMUTT 2025\n\n📅 วันที่: 20 เมษายน 2568\n🕗 เวลา: 08.30-16.00 น.\n📍 สถานที่: ลานกิจกรรมกลาง มทร.ธัญบุรี\n\nกิจกรรมภายในงาน:\n• แนะแนวหลักสูตรทุกคณะ\n• Workshop ทดลองเรียนสาขาที่สนใจ\n• ทัวร์ชมห้องปฏิบัติการทันสมัย\n• ข้อมูลทุนการศึกษา",
    date: "25 มีนาคม 2568",
    views: "3,540"
  },
  {
    id: 3,
    category: "scholarship",
    icon: "🎓",
    title: "เปิดรับสมัครทุนการศึกษาเพชรราชมงคล ประจำปีการศึกษา 2568",
    excerpt: "กองพัฒนานักศึกษาเปิดรับสมัครทุนเพชรราชมงคล 50 ทุน สำหรับนักศึกษาที่มีผลการเรียนดีและขาดแคลนทุนทรัพย์",
    content: "กองพัฒนานักศึกษาขอประกาศรับสมัครทุนการศึกษาเพชรราชมงคล ประจำปีการศึกษา 2568\n\n🎯 คุณสมบัติผู้สมัคร:\n• เป็นนักศึกษา มทร.ธัญบุรี ชั้นปีที่ 2 ขึ้นไป\n• GPA ไม่ต่ำกว่า 2.75\n• มีความจำเป็นทางการเงิน\n• ไม่ได้รับทุนอื่นในปีเดียวกัน\n\n💰 มูลค่าทุน: 20,000 บาทต่อปี\n📝 รับสมัคร: 1-30 เมษายน 2568\n📍 สมัครที่: กองพัฒนานักศึกษา อาคาร 1 ชั้น 2",
    date: "22 มีนาคม 2568",
    views: "2,180"
  },
  {
    id: 4,
    category: "academic",
    icon: "📚",
    title: "ปฏิทินการสอบปลายภาค ภาคการศึกษาที่ 2/2567",
    excerpt: "สำนักส่งเสริมวิชาการประกาศตารางสอบปลายภาค ภาคเรียน 2/2567 ระหว่างวันที่ 28 เมษายน ถึง 9 พฤษภาคม 2568",
    content: "สำนักส่งเสริมวิชาการและงานทะเบียนขอประกาศตารางสอบปลายภาค ภาคการศึกษาที่ 2/2567\n\n📅 กำหนดการสอบ: 28 เมษายน – 9 พฤษภาคม 2568\n🕗 รอบเช้า: 09.00-12.00 น.\n🕐 รอบบ่าย: 13.00-16.00 น.\n\nนักศึกษาสามารถตรวจสอบตารางสอบรายวิชาได้ที่ระบบบริการการศึกษา (Reg) และโปรดตรวจสอบห้องสอบก่อนวันสอบ 1-2 วัน",
    date: "20 มีนาคม 2568",
    views: "5,670"
  },
  {
    id: 5,
    category: "announce",
    icon: "📋",
    title: "ประกาศผลการเลือกตั้งนายกสโมสรนักศึกษา ประจำปี 2568",
    excerpt: "ประกาศผลการเลือกตั้งนายกสโมสรนักศึกษา มทร.ธัญบุรี ประจำปีการศึกษา 2568 อย่างเป็นทางการ",
    content: "กองพัฒนานักศึกษาขอประกาศผลการเลือกตั้งนายกสโมสรนักศึกษา มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี ประจำปีการศึกษา 2568\n\nผลการเลือกตั้ง:\n🥇 นายกสโมสรฯ คนใหม่: นายสมชาย ใจดี (วิศวกรรมไฟฟ้า ชั้นปีที่ 3)\nจำนวนผู้มาใช้สิทธิ์: 4,820 คน (คิดเป็น 68.3%)\n\nขอแสดงความยินดีกับนายกสโมสรฯ คนใหม่ และคณะกรรมการสโมสรฯ ทุกท่าน",
    date: "15 มีนาคม 2568",
    views: "892"
  },
  {
    id: 6,
    category: "event",
    icon: "🌏",
    title: "รับสมัครนักศึกษาแลกเปลี่ยน ณ มหาวิทยาลัยในญี่ปุ่น ประจำปี 2568",
    excerpt: "กองวิเทศสัมพันธ์เปิดรับสมัครนักศึกษาเข้าร่วมโครงการแลกเปลี่ยน 1 ภาคการศึกษา ณ มหาวิทยาลัยโตเกียวโพลีเทคนิค",
    content: "กองวิเทศสัมพันธ์และความร่วมมือระหว่างประเทศขอเปิดรับสมัครนักศึกษาเข้าร่วมโครงการแลกเปลี่ยน\n\n🇯🇵 สถานที่: Tokyo Polytechnic University, ญี่ปุ่น\n📅 ระยะเวลา: กันยายน – มกราคม 2569 (1 ภาคการศึกษา)\n🎯 จำนวนรับ: 5 คน\n\nคุณสมบัติ:\n• GPA ไม่ต่ำกว่า 2.50\n• สามารถสื่อสารภาษาอังกฤษได้\n• ไม่มีประวัติทางวินัย\n\nรับสมัคร: 1-30 เมษายน 2568 ที่กองวิเทศสัมพันธ์",
    date: "10 มีนาคม 2568",
    views: "1,340"
  },
  {
    id: 7,
    category: "announce",
    icon: "🏗️",
    title: "อัปเดตความคืบหน้าการก่อสร้างอาคารเรียนรวมใหม่",
    excerpt: "ฝ่ายอาคารสถานที่อัปเดตความคืบหน้างานก่อสร้างอาคารเรียนรวม 10 ชั้น คาดแล้วเสร็จภาคต้น 2569",
    content: "มหาวิทยาลัยฯ ขอรายงานความคืบหน้าการก่อสร้างอาคารเรียนรวมหลังใหม่\n\n🏗️ ความคืบหน้า: 65%\n📅 คาดแล้วเสร็จ: ธันวาคม 2568\n🏢 จำนวนชั้น: 10 ชั้น\n💺 ความจุรวม: 5,000 ที่นั่ง\n\nสิ่งอำนวยความสะดวก:\n• ห้องเรียน Smart Classroom 80 ห้อง\n• ห้องประชุมใหญ่ 2 ห้อง\n• Co-working Space ชั้น 1\n• ร้านอาหาร และ Convenience Store",
    date: "5 มีนาคม 2568",
    views: "756"
  },

  /* ─────────────────────────────────────────────────────────
     👇 เพิ่มโพสต์ใหม่ต่อจากนี้ — Copy object ด้านบนแล้วแก้ค่า
     ───────────────────────────────────────────────────────── */
];

/* ═══════════════════════════════════════════════════════════
   ไม่ต้องแก้ไขโค้ดด้านล่างนี้ (ระบบจัดการอัตโนมัติ)
   ═══════════════════════════════════════════════════════════ */

// Map category → label & CSS class
const tagMap = {
  urgent:      { label: 'ด่วน',         cls: 'tag-urgent'      },
  announce:    { label: 'ประกาศ',       cls: 'tag-announce'    },
  event:       { label: 'กิจกรรม',      cls: 'tag-event'       },
  academic:    { label: 'วิชาการ',      cls: 'tag-academic'    },
  scholarship: { label: 'ทุนการศึกษา', cls: 'tag-scholarship'  },
};

// Featured post data (แก้ไขได้ที่นี่เช่นกัน)
const featuredPost = {
  id: 'featured',
  title: 'มหาวิทยาลัยรับรางวัล Thailand Cybersecurity Excellence Awards 2025',
  category: 'announce',
  date: '📅 25 มีนาคม 2568',
  views: '👁 2,840 ครั้ง',
  content: 'มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี (มทร.ธัญบุรี) ได้รับรางวัล Best Performance Awards ในงาน Thailand Cybersecurity Excellence Awards 2025 จากสำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ (สกมช.)\n\nรางวัลดังกล่าวมอบให้แก่หน่วยงานที่มีผลการดำเนินงานด้านความมั่นคงไซเบอร์ดีเด่น เป็นส่วนหนึ่งของ Prime Minister Awards 2025 ซึ่งมีเป้าหมายส่งเสริมมาตรฐานดิจิทัลของสถาบันการศึกษาไทย\n\nมทร.ธัญบุรีเป็นหนึ่งในไม่กี่มหาวิทยาลัยที่ผ่านเกณฑ์ระดับสูงสุดในการประเมินด้านความมั่นคงปลอดภัยสารสนเทศ'
};

// Render post cards
function renderPosts(filter = 'all') {
  const container = document.getElementById('posts-container');
  const filtered = filter === 'all' ? posts : posts.filter(p => p.category === filter);

  if (filtered.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:60px;color:var(--text-muted)">ไม่มีโพสต์ในหมวดนี้</div>';
    return;
  }

  container.innerHTML = filtered.map((p, i) => {
    const t = tagMap[p.category] || tagMap.announce;
    return `<div class="post-card" onclick="openModal(${p.id})" style="animation-delay:${i * 0.08}s">
      <div class="post-card-icon">${p.icon}</div>
      <div class="post-card-body">
        <div style="margin-bottom:8px"><span class="tag ${t.cls}">${t.label}</span></div>
        <h3>${p.title}</h3>
        <p>${p.excerpt}</p>
        <div class="post-footer">
          <div class="post-meta">
            <span>📅 ${p.date}</span>
            <span>👁 ${p.views}</span>
          </div>
          <span style="color:var(--gold);font-size:13px;font-weight:600">อ่านต่อ →</span>
        </div>
      </div>
    </div>`;
  }).join('');
}

// Update count badges on filter bar
function updateCounts() {
  const categories = ['urgent', 'announce', 'event', 'academic', 'scholarship'];
  document.getElementById('count-all').textContent = posts.length;
  categories.forEach(cat => {
    const el = document.getElementById('count-' + cat);
    if (el) el.textContent = posts.filter(p => p.category === cat).length;
  });
}

// Filter button click
function filterPosts(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderPosts(cat);
}

// Open modal
function openModal(id) {
  const p = id === 'featured' ? featuredPost : posts.find(x => x.id === id);
  if (!p) return;
  const t = tagMap[p.category] || tagMap.announce;

  document.getElementById('modal-tag').className = `tag ${t.cls}`;
  document.getElementById('modal-tag').textContent = t.label;
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-date').textContent = p.date;
  document.getElementById('modal-views').textContent = p.views;
  document.getElementById('modal-content').innerHTML = (p.content || '')
    .split('\n')
    .map(l => l ? `<p>${l}</p>` : '')
    .join('');

  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// Close modal (click overlay)
function closeModal(e) {
  if (e.target === document.getElementById('modal')) closeModalDirect();
}

// Close modal (button / Escape)
function closeModalDirect() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

// Keyboard shortcut
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModalDirect();
});

// ─── Initialize ───
updateCounts();
renderPosts('all');
