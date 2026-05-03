document.addEventListener("DOMContentLoaded", () => {

  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const rejectBtn = document.getElementById("reject-cookies");

  const consent = localStorage.getItem("cookieConsent");

  if (!banner) {
    console.log("Cookie banner NOT FOUND");
    return;
  }

  if (!consent) {
    banner.style.display = "block";
  } else {
    banner.style.display = "none";
  }

  if (acceptBtn) {
    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "accepted");
        banner.style.display = "none";

        location.reload();
    });
  }

  if (rejectBtn) {
    rejectBtn.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "rejected");

        location.reload();
    });
  }

});