const link = document.createElement("a");
link.href = "https://google.com";
link.textContent = "กดตรงนี้";

document.body.appendChild(link);

/* ─────────────────────────────────────────────────────────
   📌 เพิ่มโพสต์ใหม่ได้ที่นี่ — เพิ่ม object ใหม่ใน array นี้
   category ที่ใช้ได้: urgent | announce | event | academic | scholarship
   ───────────────────────────────────────────────────────── */
const posts = [
{
    id: 1,
    category: "event",
    icon: "🎉",
    title: "ปฐมนิเทศรอบ มหาลัย",
    excerpt: '<a href="https://docs.google.com/forms/d/e/1FAIpQLScr4DVovgOBPmTo7SIsZphdaQ3yA0gybFJUWJ2dKzmlZNcjBA/formResponse" target="_blank">คลิกลงทะเบียน</a>',
    content: "มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี ขอเชิญนักศีกษา เข้าร่วมงาน ปฐมนิเทศ รอบหมาลัย 2026\n\n📅 วันที่: 29 พฤษภาคม 2569 และ วันที่: 30 พฤษภาคม 2569\n🕗 เวลา: 07.00-16.00 น.\n📍 สถานที่: ณ หอประชุมมหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี\n\n<a href='https://docs.google.com/forms/d/e/1FAIpQLScr4DVovgOBPmTo7SIsZphdaQ3yA0gybFJUWJ2dKzmlZNcjBA/formResponse' target='_blank' style='color:#ffd700;font-weight:bold;'>📌 คลิกลงทะเบียนที่นี่</a>\n\nสิ่งที่ได้เมื่อเข้าร่วม:\n• เสริมสร้างมิตรภาพ\n• ความบรรเทิงต่างๆ\n• กิจกรรมหมวดที่ 16\n",
    date: "6 พฤษภาคม 2568"
    
  },

  

  

 
  

  

  
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
