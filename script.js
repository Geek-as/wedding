// ===== TANGGAL ACARA =====
const eventDate = new Date("April 5, 2026 09:00:00").getTime();
const expireDate = new Date("April 12, 2026 23:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();

  // Kalau sudah lewat masa tayang
  if (now > expireDate) {
    const main = document.getElementById("main-content");
    const expired = document.getElementById("expired-message");

    if (main) main.style.display = "none";
    if (expired) expired.classList.remove("hidden");
    return;
  }

  const distance = eventDate - now;

  if (distance < 0) {
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
