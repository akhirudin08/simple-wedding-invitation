# Undangan Digital - Akhirudin 💖 Novi

Proyek undangan digital interaktif yang dirancang untuk tampil elegan, responsif, dan mudah dibagikan. Dibangun dengan HTML, CSS, dan JavaScript tanpa dependensi eksternal atau database.

## 📁 Struktur Folder

undangan/ ├── index.html ├── admin.html ← (opsional - belum aktif) ├── script/ │ └── main.js ├── style/ │ └── theme.css ├── img/ │ ├── akhirudin.jpg │ ├── noviyanti.jpg │ └── prewed1.jpg ... ├── audio/ │ └── lagu-romantis.mp3


## ✨ Fitur Utama

- Landing screen dengan judul & toggle tema
- Header: foto mempelai terpisah + frame nama emas
- Countdown ke hari H
- Jadwal acara (akad & resepsi)
- RSVP via WhatsApp
- Galeri foto pre-wedding
- QR code + tombol share sosial
- Lokasi acara (Google Maps embed)
- Ucapan & Doa (tersimpan di localStorage)
- Info rekening untuk kado digital + tombol salin
- Musik latar (auto play)
- Navigasi bawah sticky dengan ikon section
- Tema siang/malam + animasi fade

## 🛠️ Cara Edit Konten

> ⚠️ Versi ini belum memiliki panel admin. Semua perubahan dilakukan langsung di kode:

### 📝 Ubah nama & info mempelai

Edit bagian `index.html`:

```html
<span class="frame-gold">
  Mohamad Akhirudin, S.Kom<br>
  Putra ke-1 dari Bapak Fulan<br>💖<br>
  Noviyanti Yagustin, S.Ak<br>
  Putri ke-2 dari Bapak Fulan
</span>
🖼️ Ubah foto mempelai
Ganti file di folder img/:

img/akhirudin.jpg

img/noviyanti.jpg

📅 Edit tanggal acara / countdown
Di main.js:

js
const targetDate = new Date('2025-09-07'); // ganti sesuai tanggal nikah
🎵 Ganti musik latar
Ganti file di audio/ dan edit index.html:

html
<audio id="bg-music" loop>
  <source src="audio/lagu-romantis.mp3" type="audio/mpeg" />
</audio>
🏦 Ubah rekening kado
Di index.html, pada section#gift:

html
<span id="rekBCA">1234567890</span> <!-- isi rekening -->
<button onclick="copyRekening('rekBCA')">📋 Salin</button>
📍 Ubah lokasi Google Maps
Edit <iframe> di section#map:

html
<iframe src="https://www.google.com/maps/embed?..."></iframe>
🧪 Simpan Ucapan & Doa
Disimpan otomatis di browser localStorage

Tidak tersimpan ke server, hanya lokal

Dapat dihapus dengan clear browser data

🔜 Fitur Selanjutnya
Halaman admin untuk edit data tanpa coding

Preview live tiap perubahan

Mode cetak undangan PDF
