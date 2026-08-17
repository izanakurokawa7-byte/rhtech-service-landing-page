import { ServiceItem, GalleryItem, TestimonialItem, FaqItem } from '../types';

export const BUSINESS_INFO = {
  name: 'RH Tech',
  tagline: 'Solusi Servis Laptop, PC Desktop & Rakit Komputer Profesional',
  phone: '0851-7436-5619',
  whatsappNumber: '6285174365619', // Format for WA API
  address: 'Kp. Benda legok, RT.02/RW.09, Benda, Kec. Cicurug, Kabupaten Sukabumi, Jawa Barat 43359',
  mapsUrl: 'https://maps.app.goo.gl/X9VeRW1NDpojYqUh7',
  email: 'rhtech.official@gmail.com',
  instagram: '@rhtech',
  hours: 'Senin - Minggu: 09.00 - 22.00 WIB',
  experienceYears: 3,
  completedDevices: 'Berbagai Merk',
  satisfactionRate: 'Transparan',
  warrantyDays: '30 Hari',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'servis-laptop',
    title: 'Servis Laptop',
    category: 'laptop',
    icon: 'Laptop',
    shortDesc: 'Perbaikan laptop mati total, no display, ganti keyboard, baterai, LCD pecah, & perbaikan engsel.',
    features: [
      'Pengecekan IC Power & Motherboard',
      'Penggantian Keyboard & Touchpad',
      'Ganti Layar LCD / OLED Original',
      'Rekonstruksi & Las Engsel Jebol'
    ],
    estimatedTime: '1 - 3 Hari',
    startingPrice: 'Rp 100.000',
    warranty: 'Garansi s/d 30 Hari',
    popular: true,
  },
  {
    id: 'rakit-pc',
    title: 'Custom Rakit PC Gaming & Editing',
    category: 'rakit',
    icon: 'Cpu',
    shortDesc: 'Rakit PC Gaming, Editing / 3D Rendering, Streaming, atau Office sesuai budget dan kebutuhan Anda.',
    features: [
      'Konsultasi Spek & Kompatibilitas Gratis',
      'Cable Management Super Rapi & Bersih',
      'Stress Test Stabilitas & Suhu 24 Jam',
      'Sudah Termasuk Install Windows & Driver Terbaru'
    ],
    estimatedTime: '1 - 2 Hari',
    startingPrice: 'Rp 250.000 (Jasa Rakit)',
    warranty: 'Garansi Perakitan 30 Hari (Garansi Part Menyesuaikan Tipe Baru/Bekas)',
    popular: true,
  },
  {
    id: 'deep-clean',
    title: 'Deep Cleaning & Repaste Thermal',
    category: 'cleaning',
    icon: 'Fan',
    shortDesc: 'Pembersihan debu total pada heatsink & kipas, plus ganti thermal paste berkualitas tinggi (Deepcool Z3 / Setara).',
    features: [
      'Pembersihan Kipas & Sirip Heatsink',
      'Thermal Paste High-Performance',
      'Ganti Thermal Pad VRAM (Optional)',
      'Turunkan Suhu CPU & GPU hingga 10-25°C'
    ],
    estimatedTime: '2 - 4 Jam',
    startingPrice: 'Rp 100.000',
    warranty: 'Garansi Bebas Overheat',
    popular: false,
  },
  {
    id: 'upgrade-hardware',
    title: 'Upgrade SSD & Tambah RAM',
    category: 'upgrade',
    icon: 'HardDrive',
    shortDesc: 'Sulap laptop / PC lemot jadi ngebut hingga 10x lipat dengan SSD NVMe/SATA dan RAM berkecepatan tinggi.',
    features: [
      'Kloning Windows & Data Tanpa Hilang',
      'Pilihan SSD NVMe Gen 3/4 & SATA 3',
      'Support Upgrade RAM DDR3, DDR4 & DDR5',
      'Optimasi Startup & Efisiensi Sistem'
    ],
    estimatedTime: '1 - 3 Jam',
    startingPrice: 'Rp 100.000 (Jasa Pasang)',
    warranty: 'Garansi Resmi Part 3-5 Tahun',
    popular: false,
  },
  {
    id: 'install-os',
    title: 'Install Ulang OS & Software',
    category: 'laptop',
    icon: 'AppWindow',
    shortDesc: 'Instalasi Windows 10/11 Pro, MacOS, Linux, driver lengkap, antivirus, & software esensial penunjang kerja.',
    features: [
      'Clean Install Bebas Bloatware & Virus',
      'Update Driver Hardware Paling Stabil',
      'Office, PDF, Browser, & Essential Apps',
      'Backup Data Penting Sebelum Install'
    ],
    estimatedTime: '1 - 3 Jam',
    startingPrice: 'Rp 100.000',
    warranty: 'Garansi Software 14 Hari',
    popular: false,
  },
  {
    id: 'recovery-data',
    title: 'Penyelamatan & Recovery Data',
    category: 'pc',
    icon: 'Database',
    shortDesc: 'Solusi darurat menyelamatkan file penting dari laptop mati, Windows corrupt, atau SSD/HDD yang mulai error.',
    features: [
      'Bypass OS & Recovery Partisi (Diskpart)',
      'Penyelamatan Data Kritis (Skripsi/Dokumen)',
      'Kloning Data dari Drive Bad Sector',
      'Pengecekan Total Kesehatan Storage'
    ],
    estimatedTime: '1 - 3 Hari',
    startingPrice: 'Rp 150.000',
    warranty: 'Kerahasiaan Data 100% Terjamin',
    popular: false,
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Deep Clean & Repaste Laptop Gaming Asus ROG',
    category: 'cleaning',
    beforeImage: '/pcserver-school.png',
    afterImage: '/pcrakitan-pribadi.png',
    beforeLabel: 'Kipas & Heatsink Penuh Debu (Suhu 95°C)',
    afterLabel: 'Bersih Total + Arctic MX-4 (Suhu Stabil 68°C)',
    description: 'Pembersihan kerak debu tebal pada bilah turbofan dan pembaruan thermal paste yang telah mengering selama 3 tahun pemakaian.',
    specsOrDetails: 'Asus ROG Strix G15 • i7-10870H • RTX 3060'
  },
  {
    id: 'gal-2',
    title: 'Custom PC Gaming & Editing White Aesthetic',
    category: 'rakit',
    beforeImage: '/laptop-samsung-crash.png',
    afterImage: '/mobosamsung.png',
    beforeLabel: 'Unboxing Part & Persiapan Perakitan',
    afterLabel: 'Selesai Rakit + Cable Management Rapi',
    description: 'Perakitan PC tema all-white dengan airflow positif, rute kabel tersembunyi di panel belakang, dan sinkronisasi RGB ARGB.',
    specsOrDetails: 'Ryzen 7 7800X3D • RTX 4070 Ti Super • 32GB DDR5 6000MHz'
  },
  {
    id: 'gal-3',
    title: 'Restorasi Dudukan Engsel Laptop Pecah / Jebol',
    category: 'laptop',
    beforeImage: '/nvidia20.png',
    afterImage: '/laptopcustomer.png',
    beforeLabel: 'Casing Bawah Menganga & Mur Kuningan Lepas',
    afterLabel: 'Dudukan Resin Diperkuat & Rapat Sempurna',
    description: 'Rekonstruksi titik tumpu engsel laptop dengan epoxy resin berkekuatan tinggi, engsel disetel ulang agar tidak terlalu keras saat dibuka.',
    specsOrDetails: 'Lenovo IdeaPad Slim 3 • Bodi Polycarbonate'
  },
  {
    id: 'gal-4',
    title: 'Cable Management & Upgrade Watercooling AIO',
    category: 'rakit',
    beforeImage: '/cleaning.png',
    afterImage: '/data-rc.png',
    beforeLabel: 'Kabel Kusut & Menghalangi Airflow Udara',
    afterLabel: 'Jalur Kabel Rapih + AIO 240mm Terpasang',
    description: 'Tata ulang manajemen kabel power supply, pemasangan liquid cooler 240mm, dan penambahan fan intake bawah untuk sirkulasi optimal.',
    specsOrDetails: 'Intel Core i5-13600KF • Case NZXT H5 Flow'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Dimas Prasetyo',
    device: 'Laptop Acer Predator Helios 300',
    service: 'Deep Cleaning & Ganti Kipas',
    rating: 5,
    comment: 'Puas banget servis di RH Tech! Laptop awalnya sering thermal throttling pas main Valorant, setelah dibersihkan dan diganti pasta suhunya drop jauh. Pelayanannya ramah dan ada video progresnya via WA.',
    date: '3 hari yang lalu',
  },
  {
    id: 'testi-2',
    name: 'Aditya Nugroho',
    device: 'PC Rakitan Gaming',
    service: 'Rakit PC Baru Budget 15 Juta',
    rating: 5,
    comment: 'Konsultasi speknya sangat detail dan gak maksain part mahal yang gak perlu. Hasil rakitannya super rapi, kabel belakang ditata cantik, kardus part utuh dikembalikan semua. Rekomended 100%!',
    date: '1 minggu yang lalu',
  },
  {
    id: 'testi-3',
    name: 'Siti Sarah',
    device: 'MacBook Air M1',
    service: 'Ganti Layar LCD & Pemulihan Data',
    rating: 5,
    comment: 'Layar sempet kena benturan retak bergaris. Di tempat lain dibilang harus ganti atas bawah mahal banget, di RH Tech dikasih solusi ganti panel LCD nya aja dengan harga jauh lebih masuk akal. Cepat dan bergaransi.',
    date: '2 minggu yang lalu',
  },
  {
    id: 'testi-4',
    name: 'Rian Firmansyah',
    device: 'PC Office Motherboard H61',
    service: 'Servis Mati Total & Upgrade SSD',
    rating: 5,
    comment: 'PC kantor mati kena petir, diselamatkan kapasitor powernya sama Mas Rizky di RH Tech. Sekalian pasang SSD, komputernya langsung kenceng lagi. Terima kasih banyak!',
    date: '3 minggu yang lalu',
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Apakah ada biaya untuk pengecekan awal kerusakan?',
    answer: 'Pengecekan dan konsultasi awal di RH Tech 100% GRATIS. Jika setelah kami cek dan estimasikan biaya Anda memutuskan tidak jadi servis, tidak ada biaya apapun yang dipungut.',
    category: 'Umum'
  },
  {
    id: 'faq-2',
    question: 'Berapa lama estimasi pengerjaan servis laptop / PC?',
    answer: 'Untuk pengerjaan ringan seperti deep clean, repaste, install ulang, dan upgrade SSD/RAM bisa selesai dalam 1 - 3 jam (bisa ditunggu). Untuk kerusakan motherboard / mati total membutuhkan waktu 1 - 3 hari kerja tergantung ketersediaan part.',
    category: 'Waktu'
  },
  {
    id: 'faq-3',
    question: 'Apakah servis di RH Tech bergaransi?',
    answer: 'Ya! Semua pengerjaan servis hardware di RH Tech kami berikan garansi tertulis selama 30 hari. Untuk komponen / sparepart baru bergaransi resmi distributor 1 - 5 tahun.',
    category: 'Garansi'
  },
  {
    id: 'faq-4',
    question: 'Apakah bisa rakit PC dengan part yang saya beli sendiri?',
    answer: 'Tentu saja bisa! Anda cukup membawa seluruh part yang sudah dibeli ke workshop kami, dan kami siap merakitkannya dengan cable management profesional, install OS, driver, dan stress test.',
    category: 'Rakit PC'
  },
  {
    id: 'faq-5',
    question: 'Apakah data pribadi saya aman saat laptop diservis?',
    answer: 'Keamanan dan privasi data pelanggan adalah prioritas utama kami. Teknisi kami bekerja secara profesional dan tidak akan membuka atau menyalin data pribadi Anda tanpa izin tertulis.',
    category: 'Keamanan'
  }
];
