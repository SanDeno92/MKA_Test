
// js/ueberuns.js - Über uns Section

function renderUeberUns() {
  const container = document.getElementById('ueber-uns');
  if (!container) return;

  container.innerHTML = `
    <div class="about-img">
      <img src="assets/techniker.jpg" alt="Techniker montiert Klimaanlage">
    </div>
    <div>
      <div class="eyebrow">Über uns</div>
      <h2 style="margin-top:12px;font-size:28px;font-weight:700;line-height:1.15;">MKA Haustechnik steht für Kompetenz und Qualität im Bereich Haustechnik.</h2>
      <p style="margin-top:16px;color:#6B7280;line-height:1.6;">
        Unser erfahrenes Team setzt auf moderne Technik und individuelle Beratung, um Ihnen die besten Ergebnisse zu bieten.
        Von der Planung bis zur Wartung – wir denken mit und liefern saubere Arbeit.
      </p>
      <div style="margin-top:24px;display:flex;align-items:center;gap:12px;padding:16px;background:#F9FAFB;border:1px solid #E5E7EB;border-radius:16px;">
        <div style="width:48px;height:48px;background:#0B1220;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;">MM</div>
        <div>
          <div style="font-weight:600;font-size:14px;">Marco Maßmann</div>
          <div style="font-size:12px;color:#6B7280;">Ihr Ansprechpartner • MKA Haustechnik GmbH</div>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', renderUeberUns);
