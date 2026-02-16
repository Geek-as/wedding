// Tanggal acara
const eventDate = new Date("April 5, 2026 09:00:00").getTime();

// Tanggal expire (H+7)
const expireDate = new Date("April 12, 2026 23:59:59").getTime();

const now = new Date().getTime();

if (now > expireDate) {
  document.getElementById("main-content").style.display = "none";
  document.getElementById("expired-message").classList.remove("hidden");
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "Acara sedang berlangsung";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("countdown").innerHTML =
    `${days} Hari ${hours} Jam ${minutes} Menit`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
