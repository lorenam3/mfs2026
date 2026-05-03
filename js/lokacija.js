document.addEventListener("DOMContentLoaded", () => {

  const wrapper = document.getElementById("map-wrapper");
  if (!wrapper) return;

  function getConsent() {
    return localStorage.getItem("cookieConsent");
  }

  function blockMap() {
    wrapper.innerHTML = `
      <div style="width:100%;height:450px;background:#111;color:#aaa;display:flex;align-items:center;justify-content:center;text-align:center;border-radius:10px;padding:20px;">
        <div>
          <p>Za prikaz Google karte potrebno je prihvatiti kolačiće.</p>
        </div>
      </div>
    `;
  }

  function loadMap() {
    if (getConsent() !== "accepted") return;

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

  function renderMap() {
    if (getConsent() !== "accepted") {
      blockMap();
      return;
    }

    loadMap();
  }

  renderMap();

  wrapper.addEventListener("click", (e) => {
    const btn = e.target.closest("#enable-map");
    if (!btn) return;

  });

});