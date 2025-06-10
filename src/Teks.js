// src/Teks.js

export const Teks = {
  // ✅ Navigasi diperbarui
  nav: {
    home: 'Beranda',
    about: 'Tentang Kami',
    marketplace: 'Marketplace',
    facts: 'Fakta',
    contact: 'Kontak',
  },
  auth: {
    welcome: 'Selamat datang,',
    logout: 'Keluar',
    login: 'Masuk',
    register: 'Daftar',
    getStarted: 'Mulai Sekarang',
    learnMore: 'Pelajari Lebih Lanjut',
  },
  modal: {
    welcomeBack: 'Selamat Datang Kembali',
    createAccount: 'Buat Akun Baru',
    signInToContinue: 'Masuk untuk mengakses dasbor lingkungan Anda.',
    joinUs: 'Bergabunglah dengan kami dalam misi melindungi planet kita.',
    continueWithGoogle: 'Lanjutkan dengan Google',
    emailLabel: 'Alamat Email',
    emailPlaceholder: 'Masukkan email Anda',
    passwordLabel: 'Kata Sandi',
    passwordPlaceholder: 'Masukkan kata sandi Anda',
    confirmPasswordLabel: 'Konfirmasi Kata Sandi',
    confirmPasswordPlaceholder: 'Konfirmasi kata sandi Anda',
    signIn: 'Masuk',
    signUp: 'Daftar',
    noAccount: 'Belum punya akun?',
    haveAccount: 'Sudah punya akun?',
  },
  hero: {
    title: 'jagaBumi',
    subtitle: 'Satu Langkah untuk Bumi',
    description: 'Bangun kesadaran, lakukan aksi, dan dukung produk ramah lingkungan.Bersama, kita bisa menjaga bumi tetap lestari.',
  },
  bankSampah: {
    title: 'BANK SAMPAH',
    subtitle: 'TERDEKAT ANDA',
    description: 'Kelola sampah Anda secara bertanggung jawab dan berkontribusi pada ekonomi sirkular. Temukan lokasi bank sampah terdekat untuk menukarkan sampah Anda menjadi sesuatu yang berharga.',
    explore: 'Cari Lokasi Bank Sampah',
    cardTitle: 'Kelola Sampah, Ciptakan Perubahan',
  },
  aboutPage: {
    title: 'Tentang Peduli Lingkungan',
    subtitle: 'Misi kami adalah memanfaatkan teknologi untuk menciptakan masa depan yang berkelanjutan bagi planet kita.',
    missionTitle: 'Visi & Misi Kami',
    missionText: 'Menjadi pelopor dalam solusi teknologi lingkungan yang inovatif, memberdayakan komunitas dan industri untuk beroperasi secara berkelanjutan. Misi kami adalah menyediakan data real-time, sistem perlindungan canggih, dan edukasi untuk menjaga kelestarian ekosistem.',
    teamTitle: 'Tim Hebat di Balik Inovasi',
    team: [
      { name: 'Dr. Arini', role: 'Founder & CEO', avatar: 'A' },
      { name: 'Budi Santoso', role: 'Lead Engineer', avatar: 'B' },
      { name: 'Citra Lestari', role: 'Environmental Scientist', avatar: 'C' },
      { name: 'Dharma Putra', role: 'Head of Operations', avatar: 'D' },
    ]
  },
  contact: {
    title: 'HUBUNGI KAMI',
    phone: 'Telepon',
    email: 'Email',
    location: 'Lokasi',
    button: 'Hubungi Kami Sekarang',
  },
  footer: {
    description: 'Mempelopori teknologi lingkungan untuk planet yang lebih hijau dan berkelanjutan.',
    quickLinks: 'Tautan Cepat',
    contactUs: 'Hubungi Kami',
    copyright: `© ${new Date().getFullYear()} Peduli Lingkungan. Hak cipta dilindungi.`,
  },
  alerts: {
    fillFields: 'Harap isi semua kolom yang diperlukan.',
    loginSuccess: 'Berhasil masuk!',
    socialLoginSuccess: 'Berhasil masuk dengan',
    passwordMismatch: 'Kata sandi tidak cocok.',
    passwordLength: 'Kata sandi harus terdiri dari minimal 6 karakter.',
    registerSuccess: 'Pendaftaran berhasil!',
    logoutSuccess: 'Berhasil keluar!',
  }
};

export const dataBankSampah = [
  { 
    id: 'semarang1',
    nama: 'Bank Sampah Melati Bersih', 
    alamat: 'Jl. Pahlawan No. 1, Semarang', 
    jam: 'Senin - Jumat, 08:00 - 15:00',
    jenis_sampah: ['Botol Plastik', 'Kertas & Kardus', 'Logam (Kaleng)', 'Kaca'],
    cara_bergabung: 'Datang langsung ke lokasi dengan membawa KTP dan sampah yang sudah dipilah.',
    jadwal_pengumpulan: 'Setiap hari Jumat pertama setiap bulan.',
    posisi_peta: { top: '25%', left: '40%' }
  },
  { 
    id: 'salatiga1',
    nama: 'Bank Sampah Hijau Lestari', 
    alamat: 'Jl. Gajah Mada No. 22, Salatiga', 
    jam: 'Selasa & Kamis, 09:00 - 16:00',
    jenis_sampah: ['Botol Plastik', 'Kertas', 'Minyak Jelantah', 'Elektronik Kecil'],
    cara_bergabung: 'Daftar melalui WhatsApp ke nomor 0812-3456-7890 atau datang langsung.',
    jadwal_pengumpulan: 'Setiap tanggal 15 setiap bulan.',
    posisi_peta: { top: '65%', left: '60%' }
  },
  { 
    id: 'ungaran1',
    nama: 'Bank Sampah Berkah Mandiri', 
    alamat: 'Jl. Diponegoro No. 101, Ungaran', 
    jam: 'Senin - Sabtu, 08:00 - 14:00',
    jenis_sampah: ['Semua jenis kertas', 'Plastik (PET, HDPE)', 'Logam', 'Baterai bekas'],
    cara_bergabung: 'Wajib menjadi anggota dengan iuran bulanan Rp 5.000.',
    jadwal_pengumpulan: 'Setiap hari Sabtu, minggu kedua dan keempat.',
    posisi_peta: { top: '80%', left: '30%' }
  },
  { 
    id: 'semarang2',
    nama: 'Bank Sampah Sekar Arum', 
    alamat: 'Jl. A. Yani No. 58, Semarang', 
    jam: 'Rabu & Jumat, 10:00 - 17:00',
    jenis_sampah: ['Botol Plastik', 'Gelas Plastik', 'Kardus', 'Kaca'],
    cara_bergabung: 'Cukup datang ke lokasi dan timbang sampah Anda.',
    jadwal_pengumpulan: 'Setiap hari Rabu.',
    posisi_peta: { top: '40%', left: '75%' }
  }
];

// ✅ TAMBAHKAN DATA BARU INI
export const dataProdukMarketplace = [
  {
    id: 'prod1',
    namaProduk: 'Tas Belanja Lipat Ramah Lingkungan',
    penjual: 'Kreasi Daur Ulang Salatiga',
    harga: 'Rp 45.000',
    deskripsi: 'Dibuat dari 100% bahan daur ulang (rPET), tas belanja ini kuat, ringan, dan dapat dilipat menjadi kecil. Kurangi penggunaan kantong plastik sekali pakai dengan gaya.',
    gambar: 'https://images.unsplash.com/photo-1594294633123-9b8285a42036?q=80&w=1974&auto=format&fit=crop',
    isDonasi: true,
  },
  {
    id: 'prod2',
    namaProduk: 'Sikat Gigi Bambu Alami',
    penjual: 'Bumi Lestari Store',
    harga: 'Rp 15.000',
    deskripsi: 'Gagang sikat gigi terbuat dari bambu berkelanjutan yang dapat terurai secara hayati. Bulu sikat lembut bebas BPA, aman untuk gusi dan ramah untuk planet.',
    gambar: 'https://images.unsplash.com/photo-1629828543336-2a8a5234a946?q=80&w=1974&auto=format&fit=crop',
    isDonasi: false,
  },
  {
    id: 'prod3',
    namaProduk: 'Sedotan Stainless Steel Set',
    penjual: 'Hijau Selamanya',
    harga: 'Rp 55.000',
    deskripsi: 'Set lengkap berisi 4 sedotan stainless steel (2 lurus, 2 bengkok), sikat pembersih, dan kantong pouch. Ucapkan selamat tinggal pada sedotan plastik.',
    gambar: 'https://images.unsplash.com/photo-1589733978059-d40b8a4f6596?q=80&w=1974&auto=format&fit=crop',
    isDonasi: true,
  },
  {
    id: 'prod4',
    namaProduk: 'Buku Catatan dari Kertas Daur Ulang',
    penjual: 'Kertas Harapan',
    harga: 'Rp 35.000',
    deskripsi: 'Buku catatan elegan dengan sampul dan isi yang terbuat dari kertas daur ulang berkualitas tinggi. Sempurna untuk mencatat ide-ide brilian Anda tanpa merusak hutan.',
    gambar: 'https://images.unsplash.com/photo-1456735185979-869d81a9f144?q=80&w=1974&auto=format&fit=crop',
    isDonasi: false,
  },
];
