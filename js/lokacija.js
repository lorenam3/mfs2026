document.addEventListener("DOMContentLoaded", () => {

  const wrapper = document.getElementById("map-wrapper");
  if (!wrapper) return;

  function getConsent() {
    return localStorage.getItem("cookieConsent");
  }

  function setConsent(value) {
    localStorage.setItem("cookieConsent", value);
  }

  function blockMap() {
    wrapper.innerHTML = `
      <div style="width:100%;height:450px;background:#111;color:#aaa;display:flex;align-items:center;justify-content:center;text-align:center;border-radius:10px;padding:20px;">
        <div>
          <p>Za prikaz Google karte potrebno je prihvatiti kolačiće.</p>
          <button class="cta" id="enable-map">Prikaži kartu</button>
        </div>
      </div>
    `;
  }

  function loadMap() {
    wrapper.innerHTML = `
      <iframe 
        src="https://www.google.com/maps?q=Automotodrom+Grobnik&output=embed&t=k"
        width="100%" 
        height="450"
        style="border:0;"
        allowfullscreen
        loading="lazy">
      </iframe>
    `;
  }

  if (getConsent() === "accepted") {
    loadMap();
  } else {
    blockMap();
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("#enable-map");
    if (!btn) return;

    localStorage.setItem("cookieConsent", "accepted");
    wrapper.innerHTML = "";
    loadMap();
  });

});