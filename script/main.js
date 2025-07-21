// ⏰ Countdown ke Hari Bahagia
const targetDate = new Date('2025-09-07');
const countdownElem = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  countdownElem.textContent = `Menuju Hari Bahagia: ${days} hari lagi 💐`;
}
updateCountdown();
setInterval(updateCountdown, 60000);

// 🎵 Musik
function playMusic() {
  document.getElementById('bg-music').play();
}
function pauseMusic() {
  document.getElementById('bg-music').pause();
}

// 💌 Buka Undangan
function startInvitation() {
  document.getElementById('landing').style.display = 'none';
  document.getElementById('content').style.display = 'block';
  playMusic();
}

// 📱 RSVP via WhatsApp
function sendRSVP() {
  const name = document.getElementById("guestName").value.trim();
  if (!name) {
    alert("Isi dulu nama kamu ya!");
    return;
  }
  const message = `Halo! Saya, ${name}, akan hadir di acara pernikahan Akhirudin & Novi 💐`;
  const waURL = `https://wa.me/6289606357045?text=${encodeURIComponent(message)}`;
  window.open(waURL, '_blank');
}

// 💬 Ucapan & Doa + localStorage
function submitBlessing(event) {
  event.preventDefault();
  const name = document.getElementById("blessingName").value.trim();
  const message = document.getElementById("blessingMessage").value.trim();
  if (!name || !message) return;

  const blessing = {
    name,
    message,
    time: new Date().toLocaleString()
  };

  const data = JSON.parse(localStorage.getItem("blessings") || "[]");
  data.unshift(blessing);
  localStorage.setItem("blessings", JSON.stringify(data));
  displayBlessings();
  event.target.reset();
}

function displayBlessings() {
  const container = document.getElementById("blessingList");
  container.innerHTML = "";
  const data = JSON.parse(localStorage.getItem("blessings") || "[]");
  data.forEach(b => {
    const card = document.createElement("div");
    card.className = "blessing-entry";
    card.innerHTML = `<strong>${b.name}</strong> <span style="float:right;">🕒 ${b.time}</span><br>${b.message}`;
    container.appendChild(card);
  });
}
document.addEventListener("DOMContentLoaded", displayBlessings);

// 🔗 Share
function shareViaWhatsApp() {
  const link = "https://undangan-akhirudin-novi.com";
  window.open(`https://wa.me/?text=${encodeURIComponent(link)}`, "_blank");
}

function shareViaFacebook() {
  const link = "https://undangan-akhirudin-novi.com";
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`, "_blank");
}

// 🌗 Ganti Tema
function toggleTheme() {
  const body = document.body;
  if (body.classList.contains("theme-malam")) {
    body.classList.replace("theme-malam", "theme-siang");
  } else {
    body.classList.replace("theme-siang", "theme-malam");
  }
}

// ✨ Animasi Fade Section
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
document.querySelectorAll(".section").forEach(section => observer.observe(section));

// 📲 Navigasi tombol bawah
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// 📋 Salin rekening + notifikasi bawah
function copyRekening(id) {
  const text = document.getElementById(id).textContent;
  navigator.clipboard.writeText(text).then(() => {
    showNotif(`✅ Disalin: ${text}`);
  });
}

function showNotif(message) {
  const notif = document.createElement("div");
  notif.className = "copynotif";
  notif.textContent = message;
  document.body.appendChild(notif);
  setTimeout(() => notif.classList.add("visible"), 50);
  setTimeout(() => {
    notif.classList.remove("visible");
    setTimeout(() => notif.remove(), 400);
  }, 2500);
}
