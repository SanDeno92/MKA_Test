
// js/main.js - Hauptfunktionen

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  closeMenu();
}

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

function closeMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.remove('open');
}

function openModal(serviceId) {
  const service = services.find(s => s.id === serviceId);
  if (!service) return;

  document.getElementById('modalTitle').textContent = service.title;
  document.getElementById('modalShort').textContent = service.shortDesc;
  document.getElementById('modalLong').textContent = service.longDesc;
  document.getElementById('modalIcon').innerHTML = service.icon;
  document.getElementById('modalIcon').className = 'modal-icon ' + service.colorClass;

  const includesDiv = document.getElementById('modalIncludes');
  includesDiv.innerHTML = '';
  service.includes.forEach(item => {
    const div = document.createElement('div');
    div.style.cssText = 'display:flex;gap:10px;margin-top:8px;font-size:13px;';
    div.innerHTML = '<span style="width:20px;height:20px;background:#EFF6FF;color:#2563EB;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;">✓</span>' + item;
    includesDiv.appendChild(div);
  });

  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== e.currentTarget && e.target.closest('.modal') && !e.target.classList.contains('close')) {
    // Wenn innerhalb Modal geklickt, nicht schließen
    if (e.target.id !== 'modal') return;
  }
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

function requestService() {
  closeModal();
  setTimeout(() => scrollToSection('kontakt'), 150);
}

// ESC schließt Modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('modal').classList.remove('open');
    document.body.style.overflow = '';
  }
});
