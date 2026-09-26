
// js/kontakt.js - Kontaktformular + Kontaktkarte

function renderKontakt() {
  const container = document.getElementById('kontakt');
  if (!container) return;

  container.innerHTML = `
    <div class="form-card">
      <h3 style="font-size:20px;font-weight:700;">Kontaktieren Sie uns</h3>
      <p style="font-size:13px;color:#6B7280;margin-top:8px;">Alle Felder sind Pflichtfelder. Antwort meist innerhalb von 24h.</p>

      <form id="contactForm" style="margin-top:24px;display:grid;gap:16px;" action="https://formsubmit.co/info@mka-haustechnik.de" method="POST">
        <input type="hidden" name="_subject" value="Neue Anfrage über MKA Website 2026">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_template" value="table">

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          <div>
            <label style="font-size:12px;font-weight:500;color:#6B7280;">Name *</label>
            <input required name="Name" placeholder="Max Mustermann" class="input" style="margin-top:4px;">
          </div>
          <div>
            <label style="font-size:12px;font-weight:500;color:#6B7280;">E-Mail *</label>
            <input required type="email" name="E-Mail" placeholder="max@beispiel.de" class="input" style="margin-top:4px;">
          </div>
        </div>

        <div>
          <label style="font-size:12px;font-weight:500;color:#6B7280;">Telefon *</label>
          <input required name="Telefon" placeholder="0151 12345678" class="input" style="margin-top:4px;">
        </div>

        <div>
          <label style="font-size:12px;font-weight:500;color:#6B7280;">Nachricht *</label>
          <textarea required name="Nachricht" rows="4" placeholder="Worum geht es?" class="textarea" style="margin-top:4px;"></textarea>
        </div>

        <label style="display:flex;gap:10px;font-size:11px;color:#6B7280;line-height:1.4;">
          <input type="checkbox" required> Ich erkläre mich mit der Verarbeitung meiner Daten einverstanden. *
        </label>

        <button type="submit" class="btn-black" style="width:fit-content;height:44px;padding:0 24px;">Nachricht absenden</button>
      </form>
    </div>

    <div class="info-card">
      <div style="font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.4);font-weight:600;">Kontaktdaten</div>

      <div style="margin-top:24px;display:grid;gap:20px;">
        <div style="display:flex;gap:12px;">
          <span style="color:rgba(255,255,255,0.4);">✉️</span>
          <div>
            <div style="font-size:12px;color:rgba(255,255,255,0.4);">E-Mail</div>
            <div style="font-size:14px;font-weight:500;">info@mka-haustechnik.de</div>
          </div>
        </div>

        <div style="display:flex;gap:12px;">
          <span style="color:rgba(255,255,255,0.4);">📞</span>
          <div>
            <div style="font-size:12px;color:rgba(255,255,255,0.4);">Telefon / Mobil</div>
            <div style="font-size:14px;font-weight:500;">05427 927680 • 0160 4713020</div>
          </div>
        </div>

        <a href="tel:015117632415" class="notdienst-pill">
          <span class="pill-icon">
            📞
          </span>
          <span class="pill-text">
            <span class="pill-label">24h Notdienst</span>
            <span class="pill-number">0151 17632415</span>
            <span class="pill-sub">Rund um die Uhr erreichbar</span>
          </span>
        </a>

        <div style="display:flex;gap:12px;">
          <span style="color:rgba(255,255,255,0.4);">📍</span>
          <div>
            <div style="font-size:12px;color:rgba(255,255,255,0.4);">Standorte</div>
            <div style="font-size:13px;color:rgba(255,255,255,0.7);line-height:1.5;">Rodenbrockstr. 30, 49328 Melle<br>Paulusstr. 28, 33602 Bielefeld</div>
          </div>
        </div>
      </div>

      <div style="margin-top:32px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.1);font-size:12px;color:rgba(255,255,255,0.4);">
        Ansprechpartner: <span style="color:white;font-weight:500;">Marco Maßmann</span>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', renderKontakt);
