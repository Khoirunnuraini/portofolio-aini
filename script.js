/* =========================================================
   KHOIRUN NURAINI — Portfolio Interactive Logic
   ========================================================= */

// Konfigurasi Warna & Font Tailwind CSS
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        theme: {
            extend: {
                fontFamily: {
                    sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                    serif: ['"Playfair Display"', 'serif'],
                },
                colors: {
                    pinksoft: {
                        50: '#FFF5F8',
                        100: '#FCE7F3',
                        200: '#FBCFE8',
                        300: '#F9A8D4',
                        400: '#F472B6',
                        500: '#EC4899',
                        600: '#DB2777',
                        700: '#BE185D',
                    }
                },
                boxShadow: {
                    'soft-pink': '0 10px 40px -10px rgba(236, 72, 153, 0.16)',
                    'card-hover': '0 20px 40px -15px rgba(219, 39, 119, 0.24)',
                }
            }
        }
    };
}

// Generator SVG Fallback jika file gambar lokal belum tersedia
function createFallbackSVG(filename, label, bgHex, textHex) {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="550" viewBox="0 0 800 550">
            <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="${bgHex}"/>
                    <stop offset="100%" stop-color="#FFFFFF"/>
                </linearGradient>
            </defs>
            <rect width="800" height="550" fill="url(#g)"/>
            <rect x="30" y="30" width="740" height="490" rx="24" fill="none" stroke="${textHex}" stroke-width="2" stroke-dasharray="10 8" opacity="0.4"/>
            <circle cx="400" cy="215" r="44" fill="${textHex}" opacity="0.12"/>
            <text x="400" y="227" font-family="sans-serif" font-size="30" font-weight="bold" fill="${textHex}" text-anchor="middle">✦</text>
            <text x="400" y="300" font-family="sans-serif" font-size="23" font-weight="bold" fill="#1E293B" text-anchor="middle">${label}</text>
            <text x="400" y="336" font-family="monospace" font-size="16" fill="${textHex}" text-anchor="middle">File: ${filename}</text>
        </svg>
    `;
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

// Kamus Terjemahan Dwi-Bahasa (ID & EN)
const translations = {
    id: {
        nav_about: "Tentang Saya",
        nav_projects: "Projek",
        nav_skills: "Skill",
        nav_certs: "Sertifikat",
        nav_contact: "Kontak",
        hero_welcome: "Selamat Datang",
        hero_greeting: "Halo, perkenalkan saya",
        hero_subtitle: "Pelajar TJKT SMKN 1 Blitar sekaligus Penari Tradisional & Modern Dance berprestasi yang memadukan ketelitian teknologi dengan keindahan seni gerak.",
        hero_cta_project: "Lihat Projek",
        hero_cta_contact: "Hubungi Saya",
        badge_dancer: "Tari & Dance",
        about_tag: "Tentang Saya",
        about_title: "Mengenal Lebih Dekat",
        about_desc: "Saya adalah pelajar SMKN 1 Blitar jurusan TJKT (Teknik Jaringan Komputer dan Telekomunikasi) yang juga aktif di bidang seni tari dan dance serta memiliki beberapa sertifikat kejuaraan.",
        about_card1_title: "Pelajar TJKT SMKN 1 Blitar",
        about_card1_desc: "Mendalami administrasi infrastruktur jaringan, manajemen basis data, serta pengembangan aplikasi perkantoran dan kasir.",
        about_card2_title: "Seni Tari, Dance & Kejuaraan",
        about_card2_desc: "Aktif tampil dan berkompetisi pada ajang seni tari tradisional maupun modern dance dengan raihan berbagai sertifikat kejuaraan.",
        proj_tag: "Karya & Praktikum",
        proj_title: "Projek Saya",
        proj_subtitle: "Hasil pengembangan sistem basis data dan aplikasi kasir yang telah saya bangun. Klik gambar untuk memperbesar.",
        view_detail: "Perbesar Gambar",
        proj1_title: "Projek Database",
        proj1_desc: "Perancangan struktur tabel relasional, normalisasi data, dan pengelolaan query basis data agar penyimpanan informasi berjalan rapi, aman, dan terstruktur.",
        proj2_badge: "Aplikasi Kasir",
        proj2_title: "Projek Kasir",
        proj2_desc: "Aplikasi transaksi kasir untuk pencatatan penjualan, kalkulasi total pembayaran otomatis, manajemen stok produk, serta laporan rekap transaksi harian.",
        skill_tag: "Kompetensi & Bakat",
        skill_title: "Skill Saya",
        skill_subtitle: "Kombinasi keahlian teknis di bidang TJKT & aplikasi serta kemampuan artistik dalam seni tari dan pertunjukan.",
        skill_cat_it: "Bidang TJKT & IT",
        sk_net: "Administrasi Jaringan",
        sk_db: "Manajemen Database",
        sk_pos: "Aplikasi Kasir & Perkantoran",
        skill_cat_art: "Bidang Seni Tari & Pertunjukan",
        sk_trad: "Tari Tradisional",
        sk_choreo: "Koreografi & Pertunjukan",
        sk_expr: "Ekspresi & Keluwesan Gerak",
        sk_team: "Kekompakan Tim Tari",
        cert_tag: "Pencapaian & Penghargaan",
        cert_title: "Sertifikat",
        cert_subtitle: "Sertifikat kompetensi utama serta 5 sertifikat kejuaraan seni tari dan dance. Klik gambar untuk membuka preview.",
        cert_main_title: "Sertifikat Kompetensi / Utama",
        cert_dance_heading: "Galeri 5 Sertifikat Kejuaraan Tari & Dance",
        cert_item_prefix: "Sertifikat Kejuaraan Tari & Dance",
        contact_tag: "Mari Terhubung",
        contact_title: "Kontak Saya",
        contact_subtitle: "Hubungi saya melalui email pribadi atau kunjungi akun Instagram saya untuk berkenalan maupun berkolaborasi.",
        contact_email_label: "Email Pribadi",
        btn_send_email: "Kirim Email",
        btn_copy: "Salin",
        contact_ig_label: "Instagram Pribadi",
        contact_ig_hint: "Kunjungi Profil Instagram",
        footer_note: "SMKN 1 Blitar • Teknik Jaringan Komputer & Telekomunikasi",
        lb_prev: "Sebelumnya",
        lb_next: "Berikutnya",
        toast_copied: "Alamat email berhasil disalin!"
    },
    en: {
        nav_about: "About Me",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_certs: "Certificates",
        nav_contact: "Contact",
        hero_welcome: "Welcome",
        hero_greeting: "Hello, I am",
        hero_subtitle: "A TJKT student at SMKN 1 Blitar as well as an accomplished Traditional & Modern Dancer combining technical precision with the art of movement.",
        hero_cta_project: "View Projects",
        hero_cta_contact: "Contact Me",
        badge_dancer: "Dance & Arts",
        about_tag: "About Me",
        about_title: "Get to Know Me",
        about_desc: "I am a student at SMKN 1 Blitar majoring in Computer and Network Engineering (TJKT), actively involved in traditional and modern dance, and have achieved several championship certificates.",
        about_card1_title: "TJKT Student at SMKN 1 Blitar",
        about_card1_desc: "Studying network infrastructure administration, database management, and office/cashier application development.",
        about_card2_title: "Dance, Choreography & Championships",
        about_card2_desc: "Actively performing and competing in traditional and modern dance competitions with multiple championship certificates.",
        proj_tag: "Works & Practice",
        proj_title: "My Projects",
        proj_subtitle: "Database systems and cashier applications I have built. Click any image to enlarge.",
        view_detail: "Zoom Image",
        proj1_title: "Database Project",
        proj1_desc: "Relational table structure design, data normalization, and SQL query management for neat, secure, and structured data storage.",
        proj2_badge: "Cashier App",
        proj2_title: "Cashier Application Project",
        proj2_desc: "Point-of-sale cashier application to record sales transactions, calculate automatic totals, manage inventory, and generate daily sales reports.",
        skill_tag: "Capabilities & Talents",
        skill_title: "My Skills",
        skill_subtitle: "A blend of technical skills in TJKT & applications alongside artistic abilities in dance and stage performance.",
        skill_cat_it: "TJKT & IT Field",
        sk_net: "Network Administration",
        sk_db: "Database Management",
        sk_pos: "Cashier & Office Applications",
        skill_cat_art: "Dance & Performing Arts",
        sk_trad: "Traditional Dance",
        sk_choreo: "Choreography & Performance",
        sk_expr: "Grace & Stage Expression",
        sk_team: "Dance Team Synchronization",
        cert_tag: "Achievements & Awards",
        cert_title: "Certificates",
        cert_subtitle: "Main competency certificate and 5 dance championship certificates. Click any image to open preview.",
        cert_main_title: "Competency / Main Certificate",
        cert_dance_heading: "Gallery of 5 Dance Championship Certificates",
        cert_item_prefix: "Dance Championship Certificate",
        contact_tag: "Let's Connect",
        contact_title: "Contact Me",
        contact_subtitle: "Reach out to me via personal email or visit my Instagram profile to connect or collaborate.",
        contact_email_label: "Personal Email",
        btn_send_email: "Send Email",
        btn_copy: "Copy",
        contact_ig_label: "Personal Instagram",
        contact_ig_hint: "Visit Instagram Profile",
        footer_note: "SMKN 1 Blitar • Computer & Network Engineering (TJKT)",
        lb_prev: "Previous",
        lb_next: "Next",
        toast_copied: "Email address copied to clipboard!"
    }
};

let currentLang = 'id';
let currentLightboxIndex = 0;

// Daftar seluruh item gambar untuk Lightbox (2 Projek + 1 Sertifikat Utama + 5 Sertifikat Tari)
function getGalleryItems() {
    const t = translations[currentLang];
    const items = [
        { src: 'database.jpeg', title: t.proj1_title, desc: 'File: database.jpeg' },
        { src: 'kasir.jpeg', title: t.proj2_title, desc: 'File: kasir.jpeg' },
        { src: 'sertif.jpg', title: t.cert_main_title, desc: 'File: sertif.jpg' }
    ];
    for (let i = 1; i <= 5; i++) {
        items.push({
            src: `${i}.jpg`,
            title: `${t.cert_item_prefix} #${i}`,
            desc: `File: ${i}.jpg`
        });
    }
    return items;
}

// Render 5 Kartu Sertifikat Kejuaraan Tari & Dance (1.jpg s/d 5.jpg)
function renderDanceCertificates() {
    const grid = document.getElementById('dance-certs-grid');
    if (!grid) return;

    const prefixText = translations[currentLang].cert_item_prefix;
    let html = '';

    for (let i = 1; i <= 5; i++) {
        const filename = `${i}.jpg`;
        const title = `${prefixText} #${i}`;
        const galleryIdx = i + 2; // Index 3 s/d 7 di getGalleryItems()
        html += `
            <div class="group bg-white rounded-3xl p-4 border border-pink-100 shadow-soft-pink hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                 onclick="openLightboxByIndex(${galleryIdx})">
                <div class="relative aspect-[4/3] rounded-2xl overflow-hidden bg-pinksoft-50 mb-3.5">
                    <img 
                        src="${filename}" 
                        alt="${title}" 
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onerror="this.onerror=null; this.src=createFallbackSVG('${filename}', 'Kejuaraan Tari & Dance #${i}', '#FFF5F8', '#DB2777');"
                    >
                    <div class="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/95 text-pink-600 flex items-center justify-center text-xs font-bold shadow-xs">
                        #${i}
                    </div>
                </div>
                <div class="flex items-center justify-between px-1">
                    <div class="min-w-0 pr-2">
                        <h4 class="font-bold text-slate-800 text-sm sm:text-base truncate group-hover:text-pink-600 transition-colors">${title}</h4>
                        <p class="text-xs text-slate-400">File: ${filename}</p>
                    </div>
                    <i data-lucide="zoom-in" class="w-4 h-4 text-pink-400 group-hover:text-pink-600 transition-colors shrink-0"></i>
                </div>
            </div>
        `;
    }

    grid.innerHTML = html;
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Fungsi Ganti Bahasa (ID / EN)
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    const btnId = document.getElementById('btn-id');
    const btnEn = document.getElementById('btn-en');

    if (btnId && btnEn) {
        if (lang === 'id') {
            btnId.className = "px-3 py-1 rounded-full text-xs font-bold transition-all bg-pink-500 text-white shadow-sm";
            btnEn.className = "px-3 py-1 rounded-full text-xs font-bold transition-all text-pink-700 hover:text-pink-900";
        } else {
            btnEn.className = "px-3 py-1 rounded-full text-xs font-bold transition-all bg-pink-500 text-white shadow-sm";
            btnId.className = "px-3 py-1 rounded-full text-xs font-bold transition-all text-pink-700 hover:text-pink-900";
        }
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    renderDanceCertificates();
}

// Tutup Menu Mobile
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.add('hidden');
    }
}

// Salin Email ke Clipboard tanpa alert()
function copyEmail() {
    const emailEl = document.getElementById('email-text');
    if (!emailEl) return;

    const emailText = emailEl.textContent.trim();
    const tempInput = document.createElement('input');
    tempInput.value = emailText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    const toast = document.getElementById('copy-toast');
    const toastMsg = document.getElementById('toast-msg');
    if (toast && toastMsg) {
        toastMsg.textContent = translations[currentLang].toast_copied;
        toast.classList.remove('hidden');
        toast.classList.add('flex');

        setTimeout(() => {
            toast.classList.add('hidden');
            toast.classList.remove('flex');
        }, 2800);
    }
}

// Lightbox Preview & Navigasi
function openLightboxByIndex(index) {
    const items = getGalleryItems();
    currentLightboxIndex = (index + items.length) % items.length;
    const item = items[currentLightboxIndex];

    const modal = document.getElementById('lightbox-modal');
    const imgEl = document.getElementById('lightbox-img');
    if (!modal || !imgEl) return;

    document.getElementById('lightbox-title').textContent = item.title;
    document.getElementById('lightbox-desc').textContent = item.desc;
    document.getElementById('lightbox-counter').textContent = `${currentLightboxIndex + 1} / ${items.length}`;

    imgEl.onerror = function () {
        this.onerror = null;
        this.src = createFallbackSVG(item.src, item.title, '#FCE7F3', '#DB2777');
    };
    imgEl.src = item.src;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function navigateLightbox(step) {
    openLightboxByIndex(currentLightboxIndex + step);
}

function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Dukungan Keyboard untuk Lightbox (Escape, Panah Kiri, Panah Kanan)
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('lightbox-modal');
        if (modal && !modal.classList.contains('hidden')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
            if (e.key === 'ArrowRight') navigateLightbox(1);
        }
    });

    renderDanceCertificates();
    if (window.lucide) {
        lucide.createIcons();
    }
});
