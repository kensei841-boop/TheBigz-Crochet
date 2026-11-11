/**
 * The Bigz Crochet - Reactive Frontend Engine
 * Arsitektur: GAS-PRO-API + GAS-SCALE-TURBO + Instant UX
 */

// =========================================================================
// 1. DATA AWAL DEMO (FALLBACK OFFLINE / INSTANT DEMO)
// =========================================================================

const DEMO_PRODUCTS = [
  {
    id: 'PRD-001',
    name: 'Daisy Blossom Granny Tote Bag',
    category: 'Bags',
    price: 65.00,
    originalPrice: 75.00,
    discount: '13% OFF',
    rating: 4.9,
    reviews: 84,
    stock: 10,
    imageUrl: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80',
    description: 'Beg tote corak bunga daisy bersaiz 35x30 cm diperbuat daripada 100% benang kapas susu lembut (milk cotton). Sangat kukuh dan bergaya estetik untuk kegunaan harian.',
    specs: ['100% Milk Cotton', 'Panjang Tali: 60 cm', 'Basuhan Tangan Sejuk'],
    active: true
  },
  {
    id: 'PRD-002',
    name: 'Pastel Mint Bunny Amigurumi',
    category: 'Amigurumi',
    price: 42.00,
    originalPrice: 48.00,
    discount: '12% OFF',
    rating: 5.0,
    reviews: 62,
    stock: 8,
    imageUrl: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=600&q=80',
    description: 'Boneka arnab comel warna pudina pastel, tinggi 22 cm bersama gaun rajut merah jambu. Diisi dengan kapas poliester premium anti-alergi, selamat untuk kanak-kanak.',
    specs: ['Kapas Premium Anti-Alergi', 'Tinggi: 22 cm', 'Boleh Cuci Lembut'],
    active: true
  },
  {
    id: 'PRD-003',
    name: 'Cozy Ripple Wave Bucket Hat',
    category: 'Wearables',
    price: 38.00,
    originalPrice: 45.00,
    discount: '15% OFF',
    rating: 4.8,
    reviews: 47,
    stock: 12,
    imageUrl: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=600&q=80',
    description: 'Topi bucket rajutan buatan tangan corak gelombang riak warna krim & hijau zaitun. Lembut, sejuk, dan fleksibel mengikut pelbagai saiz kepala.',
    specs: ['Benang Kapas Bernafas', 'Saiz Lilitan: 56-58 cm', 'Gaya Scandinavian'],
    active: true
  },
  {
    id: 'PRD-004',
    name: 'Sunburst Flower Keychain Charm',
    category: 'Accessories',
    price: 15.00,
    originalPrice: 18.00,
    discount: '16% OFF',
    rating: 4.9,
    reviews: 110,
    stock: 25,
    imageUrl: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80',
    description: 'Gantungan kunci bunga matahari mini rajut dengan klip emas berkualiti tinggi. Sesuai untuk hiasan beg, kunci kereta, atau hadiah cenderahati istimewa.',
    specs: ['Klip Aloi Tahan Karat', 'Diameter: 7 cm', 'Ringan & Tahan Lasak'],
    active: true
  },
  {
    id: 'PRD-005',
    name: 'Lavender Meadow Clutch Handbag',
    category: 'Bags',
    price: 75.00,
    originalPrice: 85.00,
    discount: '11% OFF',
    rating: 4.9,
    reviews: 39,
    stock: 6,
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    description: 'Beg tangan clutch elegan rona ungu lavender dengan butang kayu artisan dan tali bahu rajut yang boleh ditanggalkan.',
    specs: ['Butang Kayu Semula Jadi', 'Saiz: 26x18 cm', 'Lapisan Dalam Satin'],
    active: true
  },
  {
    id: 'PRD-006',
    name: 'Baby Strawberry Coaster Set (4 pcs)',
    category: 'Accessories',
    price: 28.00,
    originalPrice: 32.00,
    discount: '12% OFF',
    rating: 4.7,
    reviews: 53,
    stock: 15,
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80',
    description: 'Set 4 keping alas cawan rajut bentuk buah strawberi comel. Menyerap titisan air dan melindungi permukaan meja kayu anda.',
    specs: ['Set 4 Keping', 'Diameter: 10 cm', 'Menyerap Air Pantas'],
    active: true
  }
];

const DEMO_ORDERS = [
  {
    orderId: 'TBC-202611-008',
    date: '2026-11-11 14:32:00',
    customerName: 'Nur Aisyah',
    whatsapp: '60128889999',
    shippingAddress: 'No. 12 Jalan Mutiara 3, Petaling Jaya, 47300 Selangor',
    paymentMethod: 'BANK_QR',
    total: 107.00,
    status: 'Pending Verification',
    slipUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
    items: [
      { id: 'PRD-001', name: 'Daisy Blossom Granny Tote Bag', price: 65.00, qty: 1 },
      { id: 'PRD-002', name: 'Pastel Mint Bunny Amigurumi', price: 42.00, qty: 1 }
    ]
  },
  {
    orderId: 'TBC-202611-007',
    date: '2026-11-11 11:15:00',
    customerName: 'Siti Sarah',
    whatsapp: '60172345678',
    shippingAddress: 'B-15-2 Vista Kiara, Mont Kiara, 50480 Kuala Lumpur',
    paymentMethod: 'FPX_TRANSFER',
    total: 65.00,
    status: 'Terverifikasi',
    slipUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
    items: [
      { id: 'PRD-001', name: 'Daisy Blossom Granny Tote Bag', price: 65.00, qty: 1 }
    ]
  }
];

// =========================================================================
// 2. STATE MANAGER (REAKTIF & INSTAN)
// =========================================================================

const AppState = {
  products: [],
  categories: ['All', 'Bags', 'Amigurumi', 'Wearables', 'Accessories'],
  selectedCategory: 'All',
  searchQuery: '',
  cart: [],
  selectedProduct: null,
  detailQty: 1,
  activeView: 'splash', // 'splash', 'catalog', 'orders', 'admin_login', 'admin_portal'
  adminTab: 'dashboard', // 'dashboard', 'orders', 'products', 'settings'
  adminSession: null,
  ordersList: [],
  currentOrder: null,
  selectedVerifyOrder: null,
  appliedPromo: null,
  uploadSlipBase64: null,
  isSubmitting: false,
  charts: {}
};

// =========================================================================
// 3. INISIALISASI APLIKASI
// =========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initStorage();
  initRouter();
  loadCatalogData();
  renderCartBadge();
  setupEventListeners();
  checkAdminSession();
});

function initStorage() {
  try {
    const savedCart = localStorage.getItem('tbc_cart');
    if (savedCart) AppState.cart = JSON.parse(savedCart);

    const savedProducts = localStorage.getItem('tbc_products');
    if (savedProducts) {
      AppState.products = JSON.parse(savedProducts);
    } else {
      AppState.products = [...DEMO_PRODUCTS];
      localStorage.setItem('tbc_products', JSON.stringify(AppState.products));
    }

    const savedOrders = localStorage.getItem('tbc_orders');
    if (savedOrders) {
      AppState.ordersList = JSON.parse(savedOrders);
    } else {
      AppState.ordersList = [...DEMO_ORDERS];
      localStorage.setItem('tbc_orders', JSON.stringify(AppState.ordersList));
    }
  } catch (e) {
    console.warn('Gagal membaca storage, menggunakan memori ram:', e);
    AppState.products = [...DEMO_PRODUCTS];
    AppState.ordersList = [...DEMO_ORDERS];
  }
}

function initRouter() {
  // Jika pengguna sudah pernah membuka aplikasi, terus bawa ke katalog
  const hasVisited = sessionStorage.getItem('tbc_visited');
  if (hasVisited) {
    switchView('catalog');
  } else {
    switchView('splash');
  }
}

// =========================================================================
// 4. PEMUATAN DATA DARI BACKEND / SWR CACHE (gas-scale-turbo)
// =========================================================================

async function loadCatalogData() {
  if (!CONFIG.GAS_URL) {
    // Mode demo / tanpa server
    renderCatalog();
    return;
  }

  try {
    const url = `${CONFIG.GAS_URL}?action=init&_t=${Date.now()}`;
    const resp = await fetch(url);
    const json = await resp.json();

    if (json.success && json.data) {
      if (json.data.products && json.data.products.length > 0) {
        AppState.products = json.data.products;
        localStorage.setItem('tbc_products', JSON.stringify(AppState.products));
      }
      if (json.data.storeName) CONFIG.STORE.name = json.data.storeName;
      if (json.data.adminWA) CONFIG.STORE.adminWA = json.data.adminWA;
      if (json.data.bankAccountNumber) CONFIG.STORE.bank.accountNumber = json.data.bankAccountNumber;
      if (json.data.qrBankUrl) CONFIG.STORE.bank.qrImage = json.data.qrBankUrl;
    }
  } catch (err) {
    console.warn('Backend GAS belum dihubungi, kekal dengan data cached/demo:', err);
  } finally {
    renderCatalog();
  }
}

// =========================================================================
// 5. PENGURUSAN PAPARAN / VIEW SWITCHER (INSTANT SPA)
// =========================================================================

function switchView(viewName) {
  AppState.activeView = viewName;
  sessionStorage.setItem('tbc_visited', 'true');

  const views = ['splash', 'catalog', 'orders', 'admin_login', 'admin_portal'];
  views.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    if (el) {
      if (v === viewName) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    }
  });

  // Urus kebolehlihatan Bottom Navigation Dock
  const bottomDock = document.getElementById('floating-bottom-dock');
  if (bottomDock) {
    if (viewName === 'catalog' || viewName === 'orders') {
      bottomDock.classList.remove('hidden');
      updateBottomDockActiveState(viewName);
    } else {
      bottomDock.classList.add('hidden');
    }
  }

  // Jika masuk ke admin portal, muat statistik dashboard
  if (viewName === 'admin_portal') {
    renderAdminView();
  }

  window.scrollTo({ top: 0, behavior: 'instant' });
}

function updateBottomDockActiveState(activeNav) {
  const btnHome = document.getElementById('nav-btn-home');
  const btnOrders = document.getElementById('nav-btn-orders');
  const btnAdmin = document.getElementById('nav-btn-admin');

  [btnHome, btnOrders, btnAdmin].forEach(btn => {
    if (btn) {
      btn.classList.remove('text-primary-container', 'font-bold');
      btn.classList.add('text-text-secondary');
    }
  });

  if (activeNav === 'catalog' && btnHome) {
    btnHome.classList.add('text-primary-container', 'font-bold');
    btnHome.classList.remove('text-text-secondary');
  } else if (activeNav === 'orders' && btnOrders) {
    btnOrders.classList.add('text-primary-container', 'font-bold');
    btnOrders.classList.remove('text-text-secondary');
  }
}

// =========================================================================
// 6. RENDER KATALOG & PENCARIAN REAKTIF
// =========================================================================

function renderCatalog() {
  const container = document.getElementById('products-grid-container');
  if (!container) return;

  const query = (AppState.searchQuery || '').toLowerCase().trim();
  const cat = AppState.selectedCategory;

  const filtered = AppState.products.filter(p => {
    const matchCat = cat === 'All' || p.category === cat;
    const matchQuery = !query ||
      p.name.toLowerCase().includes(query) ||
      (p.description && p.description.toLowerCase().includes(query)) ||
      p.category.toLowerCase().includes(query);
    return matchCat && matchQuery && p.active !== false;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-2 py-16 flex flex-col items-center justify-center text-center px-4">
        <div class="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-primary mb-3">
          <span class="material-symbols-outlined text-[32px]">search_off</span>
        </div>
        <h3 class="font-bold text-text-primary text-[17px]">Tiada Item Ditemui</h3>
        <p class="text-text-secondary text-[13.5px] mt-1 max-w-xs">Cuba tukar kata kunci carian atau pilih kategori rajutan yang lain.</p>
        <button onclick="resetCatalogFilter()" class="mt-4 px-4 py-2 rounded-full bg-primary-container text-white font-medium text-xs hover:bg-primary-dark transition-all">
          Papar Semua Item
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="card-soft overflow-hidden flex flex-col group cursor-pointer" onclick="openProductDetail('${item.id}')">
      <!-- Media Box -->
      <div class="relative w-full aspect-square bg-[#F5F5F0] overflow-hidden">
        <img src="${item.imageUrl || 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80'}" 
             alt="${item.name}" 
             loading="lazy"
             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out">
        ${item.discount ? `
          <div class="absolute top-2.5 left-2.5 bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
            ${item.discount}
          </div>
        ` : ''}
        ${item.stock <= 3 && item.stock > 0 ? `
          <div class="absolute top-2.5 right-2.5 bg-rose-100 text-rose-700 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
            Tinggal ${item.stock}
          </div>
        ` : ''}
      </div>

      <!-- Info Box -->
      <div class="p-3.5 flex flex-col flex-1 justify-between">
        <div>
          <span class="text-[10.5px] font-bold text-primary tracking-wider uppercase">${item.category}</span>
          <h4 class="font-bold text-text-primary text-[14px] line-clamp-2 mt-0.5 leading-snug group-hover:text-primary transition-colors">
            ${item.name}
          </h4>
        </div>
        
        <div class="flex items-center justify-between mt-3 pt-1">
          <div>
            <span class="text-text-secondary text-[11px] block leading-none">Harga</span>
            <span class="font-extrabold text-[16px] text-text-primary">RM ${Number(item.price).toFixed(2)}</span>
          </div>

          <button onclick="event.stopPropagation(); quickAddToCart('${item.id}')" 
                  aria-label="Tambah ke troli" 
                  class="w-9 h-9 rounded-full bg-primary-container text-white flex items-center justify-center shadow-md hover:bg-primary-dark active:scale-90 transition-all">
            <span class="material-symbols-outlined text-[20px]">add</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function selectCategory(cat) {
  AppState.selectedCategory = cat;
  // Update UI Pills
  const chips = document.querySelectorAll('.category-chip');
  chips.forEach(chip => {
    if (chip.getAttribute('data-category') === cat) {
      chip.classList.remove('bg-white', 'text-text-primary', 'border-border-subtle');
      chip.classList.add('bg-primary-container', 'text-white', 'border-transparent', 'shadow-sm');
    } else {
      chip.classList.remove('bg-primary-container', 'text-white', 'border-transparent', 'shadow-sm');
      chip.classList.add('bg-white', 'text-text-primary', 'border-border-subtle');
    }
  });
  renderCatalog();
}

function resetCatalogFilter() {
  AppState.searchQuery = '';
  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) searchInput.value = '';
  selectCategory('All');
}

// =========================================================================
// 7. MODAL DETAIL PRODUK
// =========================================================================

function openProductDetail(productId) {
  const item = AppState.products.find(p => p.id === productId);
  if (!item) return;

  AppState.selectedProduct = item;
  AppState.detailQty = 1;

  document.getElementById('modal-detail-img').src = item.imageUrl || '';
  document.getElementById('modal-detail-title').innerText = item.name;
  document.getElementById('modal-detail-category').innerText = item.category;
  document.getElementById('modal-detail-price').innerText = `RM ${Number(item.price).toFixed(2)}`;
  document.getElementById('modal-detail-desc').innerText = item.description || 'Kraftangan rajutan eksklusif berkualiti tinggi.';
  document.getElementById('modal-detail-qty').innerText = '1';

  // Update specs pills
  const specsContainer = document.getElementById('modal-detail-specs');
  if (specsContainer) {
    const specs = item.specs || ['100% Milk Cotton', 'Kualiti Artisan', 'Buatan Tangan'];
    specsContainer.innerHTML = specs.map(s => `
      <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container/60 text-primary text-[11px] font-semibold">
        <span class="material-symbols-outlined text-[13px]">check_circle</span>
        ${s}
      </span>
    `).join('');
  }

  updateDetailCtaPrice();

  const modal = document.getElementById('product-detail-modal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProductDetail() {
  const modal = document.getElementById('product-detail-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function changeDetailQty(delta) {
  AppState.detailQty = Math.max(1, AppState.detailQty + delta);
  document.getElementById('modal-detail-qty').innerText = String(AppState.detailQty);
  updateDetailCtaPrice();
}

function updateDetailCtaPrice() {
  if (!AppState.selectedProduct) return;
  const total = Number(AppState.selectedProduct.price) * AppState.detailQty;
  document.getElementById('modal-detail-cta-text').innerText = `Tambah ke Troli • RM ${total.toFixed(2)}`;
}

function confirmAddDetailToCart() {
  if (!AppState.selectedProduct) return;
  addToCart(AppState.selectedProduct, AppState.detailQty);
  closeProductDetail();
}

// =========================================================================
// 8. PENGURUSAN TROLI BELANJA (SHOPPING CART)
// =========================================================================

function quickAddToCart(productId) {
  const item = AppState.products.find(p => p.id === productId);
  if (item) addToCart(item, 1);
}

function addToCart(product, qty) {
  qty = qty || 1;
  const existing = AppState.cart.find(c => c.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    AppState.cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      imageUrl: product.imageUrl,
      qty: qty
    });
  }

  saveCart();
  renderCartBadge();
  showToast(`Ditambah ke troli: ${product.name}`, 'success');
}

function updateCartItemQty(productId, delta) {
  const item = AppState.cart.find(c => c.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    AppState.cart = AppState.cart.filter(c => c.id !== productId);
    showToast('Item dikeluarkan daripada troli', 'info');
  }

  saveCart();
  renderCartBadge();
  renderCartModal();
}

function removeCartItem(productId) {
  AppState.cart = AppState.cart.filter(c => c.id !== productId);
  saveCart();
  renderCartBadge();
  renderCartModal();
  showToast('Item dipadam daripada troli', 'info');
}

function saveCart() {
  localStorage.setItem('tbc_cart', JSON.stringify(AppState.cart));
}

function getCartCalculations() {
  const subtotal = AppState.cart.reduce((sum, it) => sum + (Number(it.price) * Number(it.qty)), 0);
  const shipping = subtotal > 0 ? 8.00 : 0.00;
  let discount = 0;

  if (AppState.appliedPromo) {
    discount = Math.min(subtotal, AppState.appliedPromo.discountAmount || 10.00);
  }

  const grandTotal = Math.max(0, subtotal + shipping - discount);

  return {
    subtotal: subtotal,
    shipping: shipping,
    discount: discount,
    grandTotal: grandTotal,
    itemCount: AppState.cart.reduce((count, it) => count + it.qty, 0)
  };
}

function renderCartBadge() {
  const calc = getCartCalculations();
  const badge = document.getElementById('cart-floating-badge');
  if (badge) {
    if (calc.itemCount > 0) {
      badge.innerText = String(calc.itemCount);
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }
}

function openCartModal() {
  renderCartModal();
  const modal = document.getElementById('cart-modal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCartModal() {
  const modal = document.getElementById('cart-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function renderCartModal() {
  const container = document.getElementById('cart-items-container');
  const calc = getCartCalculations();

  document.getElementById('cart-subtotal-text').innerText = `RM ${calc.subtotal.toFixed(2)}`;
  document.getElementById('cart-shipping-text').innerText = `RM ${calc.shipping.toFixed(2)}`;
  document.getElementById('cart-discount-text').innerText = `-RM ${calc.discount.toFixed(2)}`;
  document.getElementById('cart-total-text').innerText = `RM ${calc.grandTotal.toFixed(2)}`;

  if (AppState.cart.length === 0) {
    container.innerHTML = `
      <div class="py-12 flex flex-col items-center justify-center text-center">
        <div class="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-primary mb-3">
          <span class="material-symbols-outlined text-[32px]">shopping_bag</span>
        </div>
        <h4 class="font-bold text-text-primary text-[16px]">Troli Anda Kosong</h4>
        <p class="text-text-secondary text-[13px] mt-1">Jom terokai koleksi kraftangan crochet kami yang unik!</p>
        <button onclick="closeCartModal(); switchView('catalog');" class="mt-4 px-5 py-2.5 rounded-full bg-primary-container text-white font-semibold text-xs shadow-md">
          Mula Membeli
        </button>
      </div>
    `;
    document.getElementById('cart-checkout-btn').disabled = true;
    document.getElementById('cart-checkout-btn').classList.add('opacity-50', 'pointer-events-none');
    return;
  }

  document.getElementById('cart-checkout-btn').disabled = false;
  document.getElementById('cart-checkout-btn').classList.remove('opacity-50', 'pointer-events-none');

  container.innerHTML = AppState.cart.map(item => {
    const itemTotal = Number(item.price) * item.qty;
    return `
      <div class="flex items-center gap-3 p-3 rounded-2xl bg-surface-container-low/80 border border-border-subtle">
        <img src="${item.imageUrl || ''}" alt="${item.name}" class="w-16 h-16 rounded-xl object-cover bg-white shrink-0">
        
        <div class="flex-1 min-w-0">
          <h5 class="font-bold text-text-primary text-[13.5px] truncate">${item.name}</h5>
          <span class="text-text-secondary text-[12px] block">RM ${Number(item.price).toFixed(2)} seunit</span>
          <span class="font-extrabold text-primary text-[13px] mt-0.5 block">RM ${itemTotal.toFixed(2)}</span>
        </div>

        <div class="flex items-center gap-2 bg-white rounded-full px-2 py-1 border border-border-subtle shadow-sm">
          <button onclick="updateCartItemQty('${item.id}', -1)" class="w-6 h-6 rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary active:scale-90">
            <span class="material-symbols-outlined text-[16px]">remove</span>
          </button>
          <span class="font-bold text-[13px] w-4 text-center">${item.qty}</span>
          <button onclick="updateCartItemQty('${item.id}', 1)" class="w-6 h-6 rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary active:scale-90">
            <span class="material-symbols-outlined text-[16px]">add</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function applyPromoCode() {
  const input = document.getElementById('cart-promo-input');
  const code = (input.value || '').trim().toUpperCase();

  if (code === 'BIGZ10' || code === 'CROCHETLover') {
    AppState.appliedPromo = { code: code, discountAmount: 10.00 };
    showToast('Kod promosi berjaya! Diskaun RM 10.00 digunakan.', 'success');
  } else if (!code) {
    showToast('Sila masukkan kod promosi.', 'info');
  } else {
    showToast('Kod promosi tidak sah atau telah tamat.', 'error');
  }
  renderCartModal();
}

// =========================================================================
// 9. PROSES CHECKOUT & PEMBAYARAN (FPX / BANK QR)
// =========================================================================

function proceedToCheckout() {
  if (AppState.cart.length === 0) return;
  closeCartModal();

  const calc = getCartCalculations();
  document.getElementById('checkout-grand-total').innerText = `RM ${calc.grandTotal.toFixed(2)}`;
  document.getElementById('checkout-items-summary').innerText = `${calc.itemCount} Item (${AppState.cart.map(c => c.name).slice(0, 2).join(', ')}${AppState.cart.length > 2 ? '...' : ''})`;

  // Render info bank penerima
  document.getElementById('checkout-bank-name').innerText = CONFIG.STORE.bank.name;
  document.getElementById('checkout-bank-acc').innerText = CONFIG.STORE.bank.accountNumber;
  document.getElementById('checkout-bank-holder').innerText = CONFIG.STORE.bank.accountName;
  document.getElementById('checkout-qr-img').src = CONFIG.STORE.bank.qrImage;

  AppState.uploadSlipBase64 = null;
  document.getElementById('slip-preview-container').classList.add('hidden');
  document.getElementById('slip-upload-placeholder').classList.remove('hidden');

  const modal = document.getElementById('checkout-modal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function switchPaymentMethod(method) {
  const fpxRadio = document.getElementById('pay-method-fpx');
  const qrRadio = document.getElementById('pay-method-qr');
  const fpxSection = document.getElementById('payment-fpx-details');
  const qrSection = document.getElementById('payment-qr-details');

  if (method === 'FPX_TRANSFER') {
    fpxRadio.checked = true;
    fpxSection.classList.remove('hidden');
    qrSection.classList.add('hidden');
  } else {
    qrRadio.checked = true;
    fpxSection.classList.add('hidden');
    qrSection.classList.remove('hidden');
  }
}

function copyBankAccount() {
  const accNo = CONFIG.STORE.bank.accountNumber.replace(/\s+/g, '');
  navigator.clipboard.writeText(accNo).then(() => {
    showToast('Nombor akaun bank disalin ke papan keratan!', 'success');
  }).catch(() => {
    showToast(`No. Akaun: ${accNo}`, 'info');
  });
}

// Kompresi Gambar Bukti Bayar Menggunakan Canvas (gas-scale-turbo)
function handleSlipUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  if (!file.type.match(/image\/(jpeg|jpg|png|webp)/i)) {
    showToast('Sila muat naik fail gambar (JPG atau PNG sahaja).', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      // Kompresi ke resolusi selamat
      const canvas = document.createElement('canvas');
      const maxDim = 1000;
      let width = img.width;
      let height = img.height;

      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      const compressedBase64 = canvas.toDataURL('image/jpeg', 0.75);
      AppState.uploadSlipBase64 = compressedBase64;

      document.getElementById('slip-preview-img').src = compressedBase64;
      document.getElementById('slip-preview-container').classList.remove('hidden');
      document.getElementById('slip-upload-placeholder').classList.add('hidden');
      showToast('Resit berjaya dimuat naik & dioptimumkan.', 'success');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function removeUploadedSlip() {
  AppState.uploadSlipBase64 = null;
  document.getElementById('slip-file-input').value = '';
  document.getElementById('slip-preview-container').classList.add('hidden');
  document.getElementById('slip-upload-placeholder').classList.remove('hidden');
}

async function submitOrder() {
  if (AppState.isSubmitting) return;

  const name = document.getElementById('checkout-name').value.trim();
  const wa = document.getElementById('checkout-wa').value.trim();
  const address = document.getElementById('checkout-address').value.trim();
  const notes = document.getElementById('checkout-notes').value.trim();
  const payMethod = document.querySelector('input[name="pay_method"]:checked').value;

  if (!name) {
    showToast('Sila masukkan nama penuh anda.', 'error');
    return;
  }
  if (!wa || wa.length < 9) {
    showToast('Sila masukkan nombor WhatsApp yang sah.', 'error');
    return;
  }
  if (!address) {
    showToast('Sila masukkan alamat penghantaran.', 'error');
    return;
  }

  const calc = getCartCalculations();
  const orderPayload = {
    customerName: name,
    whatsapp: wa,
    shippingAddress: address,
    notes: notes,
    paymentMethod: payMethod,
    items: AppState.cart,
    subtotal: calc.subtotal,
    shippingFee: calc.shipping,
    discount: calc.discount,
    total: calc.grandTotal,
    slipBase64: AppState.uploadSlipBase64
  };

  AppState.isSubmitting = true;
  const btn = document.getElementById('checkout-submit-btn');
  btn.disabled = true;
  btn.innerHTML = `<span class="material-symbols-outlined text-[18px] animate-spin">sync</span> Memproses Pesanan...`;

  try {
    let orderResult = null;

    if (CONFIG.GAS_URL) {
      // Hantar ke Google Apps Script REST Backend
      const resp = await fetch(CONFIG.GAS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          action: 'order.create',
          data: orderPayload
        })
      });
      const json = await resp.json();
      if (!json.success) throw new Error(json.message || 'Gagal menghantar pesanan ke server.');
      orderResult = json.data;
    } else {
      // Simulasi mode offline / demo instan
      await new Promise(r => setTimeout(r, 600));
      const mockOrderId = 'TBC-' + new Date().toISOString().replace(/[-:T.]/g, '').slice(0, 14);
      orderResult = {
        orderId: mockOrderId,
        date: new Date().toLocaleString('id-MY'),
        customerName: name,
        whatsapp: wa,
        shippingAddress: address,
        paymentMethod: payMethod,
        total: calc.grandTotal,
        status: 'Pending Verification',
        items: AppState.cart
      };

      // Simpan ke arkib pesanan lokal
      AppState.ordersList.unshift(orderResult);
      localStorage.setItem('tbc_orders', JSON.stringify(AppState.ordersList));
    }

    AppState.currentOrder = orderResult;

    // Kosongkan Troli
    AppState.cart = [];
    AppState.appliedPromo = null;
    saveCart();
    renderCartBadge();

    closeCheckoutModal();
    openConfirmationModal(orderResult);
  } catch (err) {
    showToast('Ralat: ' + err.message, 'error');
  } finally {
    AppState.isSubmitting = false;
    btn.disabled = false;
    btn.innerHTML = `<span>Hantar Pesanan & Dapatkan Invois</span> <span class="material-symbols-outlined text-[18px]">arrow_forward</span>`;
  }
}

// =========================================================================
// 10. MODAL KEJAYAAN PESANAN & INVOIS WHATSAPP (gas-doc-engine)
// =========================================================================

function openConfirmationModal(order) {
  document.getElementById('confirm-order-id').innerText = `#${order.orderId}`;
  document.getElementById('confirm-order-total').innerText = `RM ${Number(order.total).toFixed(2)}`;
  document.getElementById('confirm-wa-number').innerText = order.whatsapp;

  const modal = document.getElementById('confirmation-modal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeConfirmationModal() {
  const modal = document.getElementById('confirmation-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

async function downloadCurrentOrderInvoice() {
  if (!AppState.currentOrder) return;
  try {
    showToast('Menjana resit PDF ber-HMAC...', 'info');
    await PDFReceiptEngine.generate(AppState.currentOrder, CONFIG.STORE);
    showToast('Invois PDF berjaya dimuat turun!', 'success');
  } catch (err) {
    showToast('Gagal menghasilkan PDF: ' + err.message, 'error');
  }
}

// =========================================================================
// 11. SEMAKAN STATUS PESANAN PELANGGAN
// =========================================================================

async function trackCustomerOrder() {
  const query = document.getElementById('track-order-input').value.trim();
  if (!query) {
    showToast('Sila masukkan No. Pesanan (Contoh: TBC-202611-008)', 'info');
    return;
  }

  const resultContainer = document.getElementById('track-order-result');
  resultContainer.innerHTML = `
    <div class="py-8 flex justify-center">
      <div class="w-8 h-8 border-3 border-primary-container border-t-transparent rounded-full animate-spin"></div>
    </div>
  `;

  try {
    let orderFound = null;

    if (CONFIG.GAS_URL) {
      const resp = await fetch(`${CONFIG.GAS_URL}?action=track_order&orderId=${encodeURIComponent(query)}`);
      const json = await resp.json();
      if (json.success) orderFound = json.data;
    } else {
      orderFound = AppState.ordersList.find(o => 
        o.orderId.toLowerCase() === query.toLowerCase() ||
        (o.whatsapp && o.whatsapp.includes(query))
      );
    }

    if (!orderFound) {
      resultContainer.innerHTML = `
        <div class="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-center">
          <span class="material-symbols-outlined text-[28px]">search_off</span>
          <p class="font-bold text-sm mt-1">Pesanan Tidak Ditemui</p>
          <p class="text-xs text-rose-600 mt-0.5">Sila pastikan No. Pesanan atau No. WhatsApp dimasukkan dengan tepat.</p>
        </div>
      `;
      return;
    }

    const items = orderFound.items || [];
    resultContainer.innerHTML = `
      <div class="card-soft p-5 flex flex-col gap-3">
        <div class="flex items-center justify-between border-b border-border-subtle pb-3">
          <div>
            <span class="text-xs text-text-secondary">No. Pesanan</span>
            <h4 class="font-bold text-text-primary text-base">#${orderFound.orderId}</h4>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-bold ${getStatusBadgeClass(orderFound.status)}">
            ${orderFound.status}
          </span>
        </div>

        <div class="grid grid-cols-2 gap-2 text-xs">
          <div>
            <span class="text-text-secondary block">Nama:</span>
            <span class="font-semibold text-text-primary">${orderFound.customerName}</span>
          </div>
          <div>
            <span class="text-text-secondary block">WhatsApp:</span>
            <span class="font-semibold text-text-primary">${orderFound.whatsapp}</span>
          </div>
          <div>
            <span class="text-text-secondary block">Tarikh:</span>
            <span class="font-semibold text-text-primary">${orderFound.date}</span>
          </div>
          <div>
            <span class="text-text-secondary block">Jumlah Bayaran:</span>
            <span class="font-bold text-primary text-sm">RM ${Number(orderFound.total).toFixed(2)}</span>
          </div>
        </div>

        <div class="mt-2 pt-2 border-t border-border-subtle">
          <span class="text-xs font-bold text-text-primary block mb-1.5">Barangan Ditempah:</span>
          <ul class="text-xs space-y-1 text-text-secondary">
            ${items.map(it => `<li>• ${it.name || it.title} (${it.qty || 1}x) - RM ${(Number(it.price) * (it.qty || 1)).toFixed(2)}</li>`).join('')}
          </ul>
        </div>

        <button onclick="downloadTrackedOrderPdf('${orderFound.orderId}')" class="mt-2 w-full py-2.5 rounded-xl bg-primary-container text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm">
          <span class="material-symbols-outlined text-[16px]">download</span>
          Muat Turun Invois PDF
        </button>
      </div>
    `;
  } catch (err) {
    resultContainer.innerHTML = `<div class="p-4 text-xs text-rose-600">Ralat: ${err.message}</div>`;
  }
}

async function downloadTrackedOrderPdf(orderId) {
  const order = AppState.ordersList.find(o => o.orderId === orderId);
  if (order) {
    await PDFReceiptEngine.generate(order, CONFIG.STORE);
    showToast('Invois PDF dimuat turun.', 'success');
  }
}

function getStatusBadgeClass(status) {
  const s = String(status || '').toUpperCase();
  if (s.includes('VERIF') || s.includes('LUNAS') || s.includes('SELESAI')) {
    return 'bg-emerald-100 text-emerald-800';
  } else if (s.includes('PENDING') || s.includes('SEMAKAN')) {
    return 'bg-amber-100 text-amber-800';
  } else if (s.includes('POS') || s.includes('KIRIM')) {
    return 'bg-blue-100 text-blue-800';
  } else {
    return 'bg-slate-100 text-slate-800';
  }
}

// =========================================================================
// 12. AUTENTIKASI ADMIN GANDA (GOOGLE OAUTH & EMERGENCY BACKDOOR)
// =========================================================================

function checkAdminSession() {
  const saved = sessionStorage.getItem('tbc_admin_token');
  if (saved) {
    AppState.adminSession = { token: saved };
  }
}

function handleEmergencyAdminLogin() {
  const pinInput = document.getElementById('emergency-pin-input');
  const passkey = (pinInput.value || '').trim();

  if (!passkey) {
    showToast('Sila masukkan kunci sandi darurat.', 'error');
    return;
  }

  // Jika terhubung ke GAS, panggil action auth.emergency
  if (CONFIG.GAS_URL) {
    fetch(CONFIG.GAS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'auth.emergency', passkey: passkey })
    })
    .then(r => r.json())
    .then(res => {
      if (res.success && res.token) {
        sessionStorage.setItem('tbc_admin_token', res.token);
        AppState.adminSession = { token: res.token, user: res.user };
        showToast('Log masuk darurat berjaya!', 'success');
        switchView('admin_portal');
      } else {
        showToast(res.message || 'Kunci sandi darurat tidak sah.', 'error');
      }
    })
    .catch(err => {
      showToast('Ralat sambungan: ' + err.message, 'error');
    });
  } else {
    // Mode demo lokal
    if (passkey === 'bigz2026') {
      const mockToken = 'mock_emergency_token.' + btoa(Date.now().toString());
      sessionStorage.setItem('tbc_admin_token', mockToken);
      AppState.adminSession = { token: mockToken, user: { email: 'emergency_admin', name: 'Emergency Admin' } };
      showToast('Log masuk darurat berjaya (Mode Demo: bigz2026)', 'success');
      switchView('admin_portal');
    } else {
      showToast('Kunci darurat salah! (Gunakan "bigz2026" untuk demo)', 'error');
    }
  }
}

function adminLogout() {
  sessionStorage.removeItem('tbc_admin_token');
  AppState.adminSession = null;
  showToast('Sesi Admin telah ditutup.', 'info');
  switchView('catalog');
}

// =========================================================================
// 13. ADMIN PORTAL (DASHBOARD, PRODUK, PESANAN & VERIFIKASI SPLIT SCREEN)
// =========================================================================

function renderAdminView() {
  if (!AppState.adminSession) {
    switchView('admin_login');
    return;
  }
  switchAdminTab(AppState.adminTab || 'dashboard');
}

function switchAdminTab(tabName) {
  AppState.adminTab = tabName;
  const tabs = ['dashboard', 'orders', 'products', 'settings'];
  tabs.forEach(t => {
    const el = document.getElementById(`admin-tab-${t}`);
    const navBtn = document.getElementById(`admin-nav-${t}`);
    if (el) {
      if (t === tabName) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    }
    if (navBtn) {
      if (t === tabName) {
        navBtn.classList.add('bg-primary-container', 'text-white');
        navBtn.classList.remove('text-slate-300', 'hover:bg-slate-800');
      } else {
        navBtn.classList.remove('bg-primary-container', 'text-white');
        navBtn.classList.add('text-slate-300', 'hover:bg-slate-800');
      }
    }
  });

  if (tabName === 'dashboard') renderAdminDashboard();
  if (tabName === 'orders') renderAdminOrders();
  if (tabName === 'products') renderAdminProductsTable();
  if (tabName === 'settings') renderAdminSettings();
}

function renderAdminDashboard() {
  // Hitung metrik jualan
  const totalRevenue = AppState.ordersList.reduce((sum, o) => sum + Number(o.total || 0), 0);
  const pendingCount = AppState.ordersList.filter(o => String(o.status).toLowerCase().includes('pending')).length;
  const verifiedCount = AppState.ordersList.filter(o => String(o.status).toLowerCase().includes('verif')).length;
  const activeProdCount = AppState.products.filter(p => p.active !== false).length;

  document.getElementById('stat-total-revenue').innerText = `RM ${totalRevenue.toFixed(2)}`;
  document.getElementById('stat-pending-orders').innerText = String(pendingCount);
  document.getElementById('stat-verified-orders').innerText = String(verifiedCount);
  document.getElementById('stat-active-products').innerText = String(activeProdCount);

  // Render Mini Table Pesanan Terkini
  const recentContainer = document.getElementById('admin-recent-orders-table');
  if (recentContainer) {
    const sliceOrders = AppState.ordersList.slice(0, 5);
    recentContainer.innerHTML = sliceOrders.map(o => `
      <tr class="border-b border-border-subtle hover:bg-slate-50 transition-colors">
        <td class="py-2.5 px-3 font-semibold text-xs text-text-primary">#${o.orderId}</td>
        <td class="py-2.5 px-3 text-xs text-text-secondary">${o.customerName}</td>
        <td class="py-2.5 px-3 text-xs font-bold text-primary">RM ${Number(o.total).toFixed(2)}</td>
        <td class="py-2.5 px-3">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${getStatusBadgeClass(o.status)}">
            ${o.status}
          </span>
        </td>
        <td class="py-2.5 px-3 text-right">
          <button onclick="openVerificationModal('${o.orderId}')" class="px-2.5 py-1 rounded-lg bg-secondary-container text-primary font-bold text-[11px] hover:bg-primary hover:text-white transition-all">
            Semak
          </button>
        </td>
      </tr>
    `).join('');
  }

  // Inisialisasi Chart.js
  renderDashboardCharts();
}

function renderDashboardCharts() {
  if (!window.Chart) return;

  // 1. Chart Jualan Harian (Line)
  const ctxDaily = document.getElementById('chart-daily-sales');
  if (ctxDaily) {
    if (AppState.charts.daily) AppState.charts.daily.destroy();

    const labels = ['7 Hari Lepas', '6 Hari Lepas', '5 Hari Lepas', '4 Hari Lepas', '3 Hari Lepas', 'Semalam', 'Hari Ini'];
    const dataVals = [145, 230, 180, 310, 260, 420, 380];

    AppState.charts.daily = new Chart(ctxDaily, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Jualan (RM)',
          data: dataVals,
          borderColor: '#10B981',
          backgroundColor: 'rgba(16, 185, 129, 0.12)',
          fill: true,
          tension: 0.35,
          borderWidth: 2.5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: '#F1F5F9' }, ticks: { font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  // 2. Chart Kategori (Doughnut)
  const ctxCategory = document.getElementById('chart-category-sales');
  if (ctxCategory) {
    if (AppState.charts.cat) AppState.charts.cat.destroy();

    AppState.charts.cat = new Chart(ctxCategory, {
      type: 'doughnut',
      data: {
        labels: ['Bags', 'Amigurumi', 'Wearables', 'Accessories'],
        datasets: [{
          data: [45, 30, 15, 10],
          backgroundColor: ['#10B981', '#059669', '#F59E0B', '#3B82F6'],
          borderWidth: 2,
          borderColor: '#FFFFFF'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } }
        }
      }
    });
  }
}

// -------------------------------------------------------------------------
// Tab Pesanan & Verifikasi Split Screen
// -------------------------------------------------------------------------

function renderAdminOrders() {
  const container = document.getElementById('admin-orders-table-body');
  if (!container) return;

  container.innerHTML = AppState.ordersList.map(o => `
    <tr class="border-b border-border-subtle hover:bg-slate-50 transition-colors">
      <td class="py-3 px-3.5 font-bold text-xs text-text-primary">#${o.orderId}</td>
      <td class="py-3 px-3.5 text-xs text-text-secondary">${o.date}</td>
      <td class="py-3 px-3.5 text-xs font-semibold text-text-primary">${o.customerName}</td>
      <td class="py-3 px-3.5 text-xs text-text-secondary">${o.whatsapp}</td>
      <td class="py-3 px-3.5 text-xs font-bold text-text-primary">RM ${Number(o.total).toFixed(2)}</td>
      <td class="py-3 px-3.5 text-xs">
        <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700">
          ${o.paymentMethod === 'BANK_QR' ? 'DuitNow QR' : 'FPX / Bank'}
        </span>
      </td>
      <td class="py-3 px-3.5">
        <span class="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold ${getStatusBadgeClass(o.status)}">
          ${o.status}
        </span>
      </td>
      <td class="py-3 px-3.5 text-right space-x-1.5">
        <button onclick="openVerificationModal('${o.orderId}')" class="px-3 py-1.5 rounded-lg bg-primary text-white font-bold text-xs hover:bg-primary-dark transition-all">
          Semak Resit
        </button>
      </td>
    </tr>
  `).join('');
}

function openVerificationModal(orderId) {
  const order = AppState.ordersList.find(o => o.orderId === orderId);
  if (!order) return;

  AppState.selectedVerifyOrder = order;

  // Papar di Split Screen Modal
  document.getElementById('verify-order-id').innerText = `#${order.orderId}`;
  document.getElementById('verify-customer-name').innerText = order.customerName;
  document.getElementById('verify-customer-wa').innerText = order.whatsapp;
  document.getElementById('verify-shipping-address').innerText = order.shippingAddress || 'Alamat tidak dinyatakan';
  document.getElementById('verify-total-amount').innerText = `RM ${Number(order.total).toFixed(2)}`;
  document.getElementById('verify-status-select').value = order.status;

  // Link WhatsApp terus ke pelanggan
  const waClean = (order.whatsapp || '').replace(/[^0-9]/g, '');
  const waLink = `https://wa.me/${waClean}?text=${encodeURIComponent(`Hai ${order.customerName}, kami dari The Bigz Crochet mengenai pesanan #${order.orderId}...`)}`;
  document.getElementById('verify-wa-btn').href = waLink;

  // Paparan Gambar Slip Bayaran di Panel Kiri
  const slipImg = document.getElementById('verify-slip-img');
  const noSlipPlaceholder = document.getElementById('verify-no-slip');

  if (order.slipUrl) {
    slipImg.src = order.slipUrl;
    slipImg.classList.remove('hidden');
    noSlipPlaceholder.classList.add('hidden');
  } else {
    slipImg.classList.add('hidden');
    noSlipPlaceholder.classList.remove('hidden');
  }

  // Senarai Item
  const itemsContainer = document.getElementById('verify-items-list');
  const items = order.items || [];
  itemsContainer.innerHTML = items.map(it => `
    <li class="flex justify-between text-xs py-1 border-b border-border-subtle/60">
      <span>${it.name || it.title} (${it.qty || 1}x)</span>
      <span class="font-bold">RM ${(Number(it.price) * (it.qty || 1)).toFixed(2)}</span>
    </li>
  `).join('');

  const modal = document.getElementById('admin-verification-modal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeVerificationModal() {
  const modal = document.getElementById('admin-verification-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

async function confirmVerifyOrder() {
  if (!AppState.selectedVerifyOrder) return;
  const newStatus = document.getElementById('verify-status-select').value;
  const note = document.getElementById('verify-admin-note').value.trim();

  try {
    if (CONFIG.GAS_URL) {
      const resp = await fetch(CONFIG.GAS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          action: 'admin.verify_order',
          token: AppState.adminSession.token,
          orderId: AppState.selectedVerifyOrder.orderId,
          status: newStatus,
          catatan: note
        })
      });
      const res = await resp.json();
      if (!res.success) throw new Error(res.message);
    }

    // Kemaskini Lokal
    AppState.selectedVerifyOrder.status = newStatus;
    localStorage.setItem('tbc_orders', JSON.stringify(AppState.ordersList));

    showToast(`Status pesanan #${AppState.selectedVerifyOrder.orderId} dikemaskini & notifikasi WhatsApp dihantar!`, 'success');
    closeVerificationModal();
    renderAdminOrders();
    renderAdminDashboard();
  } catch (err) {
    showToast('Ralat: ' + err.message, 'error');
  }
}

// -------------------------------------------------------------------------
// Tab Pengurusan Produk (CRUD)
// -------------------------------------------------------------------------

function renderAdminProductsTable() {
  const container = document.getElementById('admin-products-table-body');
  if (!container) return;

  container.innerHTML = AppState.products.map(p => `
    <tr class="border-b border-border-subtle hover:bg-slate-50 transition-colors">
      <td class="py-2.5 px-3">
        <img src="${p.imageUrl || ''}" alt="${p.name}" class="w-10 h-10 rounded-lg object-cover bg-slate-100">
      </td>
      <td class="py-2.5 px-3">
        <div class="font-bold text-xs text-text-primary">${p.name}</div>
        <span class="text-[10px] text-text-secondary">${p.category}</span>
      </td>
      <td class="py-2.5 px-3 font-bold text-xs text-text-primary">RM ${Number(p.price).toFixed(2)}</td>
      <td class="py-2.5 px-3 text-xs text-text-secondary">${p.stock} pcs</td>
      <td class="py-2.5 px-3">
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${p.active !== false ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">
          ${p.active !== false ? 'Aktif' : 'Nyahaktif'}
        </span>
      </td>
      <td class="py-2.5 px-3 text-right space-x-1">
        <button onclick="editProductModal('${p.id}')" class="px-2.5 py-1 rounded bg-slate-200 text-slate-800 text-xs font-semibold hover:bg-slate-300">
          Ubah
        </button>
        <button onclick="deleteProduct('${p.id}')" class="px-2.5 py-1 rounded bg-rose-100 text-rose-700 text-xs font-semibold hover:bg-rose-200">
          Padam
        </button>
      </td>
    </tr>
  `).join('');
}

function openAddProductModal() {
  document.getElementById('product-form-id').value = '';
  document.getElementById('product-form-name').value = '';
  document.getElementById('product-form-category').value = 'Bags';
  document.getElementById('product-form-price').value = '';
  document.getElementById('product-form-stock').value = '10';
  document.getElementById('product-form-image').value = '';
  document.getElementById('product-form-desc').value = '';

  const modal = document.getElementById('admin-product-modal');
  modal.classList.remove('hidden');
}

function editProductModal(id) {
  const p = AppState.products.find(item => item.id === id);
  if (!p) return;

  document.getElementById('product-form-id').value = p.id;
  document.getElementById('product-form-name').value = p.name;
  document.getElementById('product-form-category').value = p.category;
  document.getElementById('product-form-price').value = p.price;
  document.getElementById('product-form-stock').value = p.stock;
  document.getElementById('product-form-image').value = p.imageUrl || '';
  document.getElementById('product-form-desc').value = p.description || '';

  const modal = document.getElementById('admin-product-modal');
  modal.classList.remove('hidden');
}

function closeProductFormModal() {
  const modal = document.getElementById('admin-product-modal');
  modal.classList.add('hidden');
}

async function saveProductFromForm() {
  const id = document.getElementById('product-form-id').value;
  const name = document.getElementById('product-form-name').value.trim();
  const cat = document.getElementById('product-form-category').value;
  const price = parseFloat(document.getElementById('product-form-price').value) || 0;
  const stock = parseInt(document.getElementById('product-form-stock').value) || 0;
  const image = document.getElementById('product-form-image').value.trim();
  const desc = document.getElementById('product-form-desc').value.trim();

  if (!name || price <= 0) {
    showToast('Sila masukkan nama dan harga produk yang sah.', 'error');
    return;
  }

  const prodObj = {
    id: id || ('PRD-' + Date.now().toString(36).toUpperCase()),
    name: name,
    category: cat,
    price: price,
    stock: stock,
    imageUrl: image || 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80',
    description: desc,
    active: true
  };

  try {
    if (CONFIG.GAS_URL) {
      await fetch(CONFIG.GAS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          action: 'admin.product_save',
          token: AppState.adminSession.token,
          product: prodObj
        })
      });
    }

    if (id) {
      const idx = AppState.products.findIndex(p => p.id === id);
      if (idx !== -1) AppState.products[idx] = prodObj;
    } else {
      AppState.products.unshift(prodObj);
    }

    localStorage.setItem('tbc_products', JSON.stringify(AppState.products));
    showToast('Produk berjaya disimpan!', 'success');
    closeProductFormModal();
    renderAdminProductsTable();
    renderCatalog();
  } catch (err) {
    showToast('Ralat: ' + err.message, 'error');
  }
}

function deleteProduct(id) {
  if (!confirm('Adakah anda pasti ingin memadamkan produk ini?')) return;
  AppState.products = AppState.products.filter(p => p.id !== id);
  localStorage.setItem('tbc_products', JSON.stringify(AppState.products));
  showToast('Produk dipadamkan.', 'info');
  renderAdminProductsTable();
  renderCatalog();
}

// -------------------------------------------------------------------------
// Tab Tetapan Kedai & Kunci Rahsia
// -------------------------------------------------------------------------

function renderAdminSettings() {
  document.getElementById('setting-store-name').value = CONFIG.STORE.name;
  document.getElementById('setting-admin-wa').value = CONFIG.STORE.adminWA;
  document.getElementById('setting-bank-name').value = CONFIG.STORE.bank.name;
  document.getElementById('setting-bank-acc').value = CONFIG.STORE.bank.accountNumber;
  document.getElementById('setting-bank-holder').value = CONFIG.STORE.bank.accountName;
  document.getElementById('setting-bank-qr').value = CONFIG.STORE.bank.qrImage;
}

async function saveAdminSettings() {
  const storeName = document.getElementById('setting-store-name').value.trim();
  const adminWa = document.getElementById('setting-admin-wa').value.trim();
  const bankName = document.getElementById('setting-bank-name').value.trim();
  const bankAcc = document.getElementById('setting-bank-acc').value.trim();
  const bankHolder = document.getElementById('setting-bank-holder').value.trim();
  const bankQr = document.getElementById('setting-bank-qr').value.trim();
  const fonnteToken = document.getElementById('setting-fonnte-token').value.trim();
  const newPin = document.getElementById('setting-emergency-pin').value.trim();

  CONFIG.STORE.name = storeName || CONFIG.STORE.name;
  CONFIG.STORE.adminWA = adminWa || CONFIG.STORE.adminWA;
  CONFIG.STORE.bank.name = bankName || CONFIG.STORE.bank.name;
  CONFIG.STORE.bank.accountNumber = bankAcc || CONFIG.STORE.bank.accountNumber;
  CONFIG.STORE.bank.accountName = bankHolder || CONFIG.STORE.bank.accountName;
  CONFIG.STORE.bank.qrImage = bankQr || CONFIG.STORE.bank.qrImage;

  try {
    if (CONFIG.GAS_URL) {
      await fetch(CONFIG.GAS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          action: 'admin.settings_save',
          token: AppState.adminSession.token,
          settings: {
            storeName: storeName,
            adminWA: adminWa,
            bankName: bankName,
            bankAccountNumber: bankAcc,
            bankAccountName: bankHolder,
            qrBankUrl: bankQr,
            fonnteToken: fonnteToken,
            newEmergencyPin: newPin
          }
        })
      });
    }

    showToast('Semua tetapan berjaya disimpan!', 'success');
  } catch (err) {
    showToast('Ralat: ' + err.message, 'error');
  }
}

// =========================================================================
// 14. EVENT LISTENERS & BINDING
// =========================================================================

function setupEventListeners() {
  // Input Carian Katalog
  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value;
      renderCatalog();
    });
  }

  // File Upload Bukti Bayar
  const slipInput = document.getElementById('slip-file-input');
  if (slipInput) {
    slipInput.addEventListener('change', handleSlipUpload);
  }
}

// =========================================================================
// 15. TOAST NOTIFICATION HELPER
// =========================================================================

function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const iconName = type === 'success' ? 'check_circle' : (type === 'error' ? 'error' : 'info');
  toast.innerHTML = `
    <span class="material-symbols-outlined text-[18px]">${iconName}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
