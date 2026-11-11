/**
 * The Bigz Crochet - Public Client Configuration
 * Arsitektur: GAS-PRO-API (Frontend Terpisah + Backend Google Apps Script)
 * 
 * CATATAN PENTING KEAMANAN (Aturan R11 gas-rahasia-script-properties):
 * File ini HANYA memuat konfigurasi publik. Kredensial rahasia seperti
 * Token Fonnte, Session Secret, dan Sandi Darurat WAJIB disimpan
 * di Script Properties backend Google Apps Script.
 */

const CONFIG = {
  // Masukkan URL Deployment Google Apps Script Web App (Exec URL) Anda di sini.
  // Contoh: 'https://script.google.com/macros/s/AKfycbx.../exec'
  // Jika string ini kosong (''), aplikasi otomatis berjalan dalam mode Instant Demo (Mock).
  GAS_URL: 'https://script.google.com/macros/s/AKfycbzUiO1UyO1H5tqAj5KcAovrD5Jqc-3wMC_WiQQXjLVAYi_mw9u0uNLrGpMR3_HRVBnI/exec',

  // Google OAuth 2.0 Client ID (Publik) dari Google Cloud Console
  // Opsional: biarkan kosong jika hanya menggunakan Login Akses Darurat (Emergency Backdoor)
  GOOGLE_CLIENT_ID: '',

  // Identitas Toko Bawaan (Akan disinkronkan otomatis saat terhubung ke backend)
  STORE: {
    name: 'The Bigz Crochet',
    tagline: 'Handcrafted with Love & Care',
    currency: 'RM',
    currencySymbol: 'RM ',
    contactPhone: '+60 12-345 6789',
    adminWA: '60123456789',
    instagram: '@thebigzcrochet',
    address: 'Petaling Jaya, Selangor, Malaysia',
    bank: {
      name: 'Maybank (Malayan Banking Berhad)',
      accountName: 'THE BIGZ CROCHET ENTERPRISE',
      accountNumber: '5140 1234 5678',
      duitNowId: '123456789012',
      qrImage: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=DuitNow-TheBigzCrochet-514012345678'
    }
  },

  // Cache & UX Settings (gas-scale-turbo & gas-instant-ux)
  CACHE_TTL_MINUTES: 30,
  MAX_UPLOAD_SIZE_MB: 2.0, // Batas kompresi gambar sebelum kirim Base64
  MOCK_DELAY_MS: 300 // Simulasi latensi instan saat mode demo
};
