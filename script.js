// Manual catalog mode.
// Add/replace products in this array with your own original product photos.
// For each product, keep images as local paths in your project, e.g.:
// "images/products/bed-01.jpg"
const manualProducts = [
  {
    sku: "BED-000",
    name: "Seesham Bed",
    category: "Furniture",
    price: 9587,
    mrp: 24999,
    desc: "Brown finish engineered wood bed. Queen size frame for 72 x 60 inch mattress, knock down delivery, 1 year warranty.",
    images: ["images/Beds/71gVH3UvsxL._SX679_.jpg"],
    inStock: true
  },
  {
    sku: "BED-001",
    name: "Engineered Wood Queen Bed",
    category: "Furniture",
    price: 9587,
    mrp: 24999,
    desc: "Modern queen size bed with clean finish.",
    images: ["images/furniture.svg", "images/furniture-side.svg"],
    inStock: true
  },
  {
    sku: "BED-002",
    name: "King Bed With Storage",
    category: "Furniture",
    price: 18990,
    mrp: 28999,
    desc: "Hydraulic storage bed with headboard.",
    images: ["images/furniture-back.svg", "images/furniture-detail.svg"],
    inStock: true
  },
  {
    sku: "BED-003",
    name: "Single Bed Frame",
    category: "Furniture",
    price: 7499,
    mrp: 10999,
    desc: "Compact single bed for kids room.",
    images: ["images/furniture-side.svg"],
    inStock: true
  },
  {
    sku: "CHR-001",
    name: "Premium Dining Chair",
    category: "Furniture",
    price: 2699,
    mrp: 3999,
    desc: "Solid wood dining chair with cushion seat.",
    images: ["images/furniture.svg"],
    inStock: true
  },
  {
    sku: "CHR-002",
    name: "Office Ergonomic Chair",
    category: "Furniture",
    price: 5899,
    mrp: 8499,
    desc: "Adjustable office chair with lumbar support.",
    images: ["images/furniture-detail.svg"],
    inStock: true
  },
  {
    sku: "SFA-001",
    name: "3 Seater Fabric Sofa",
    category: "Furniture",
    price: 22499,
    mrp: 30999,
    desc: "Comfortable 3 seater sofa for living room.",
    images: ["images/furniture-back.svg"],
    inStock: true
  },
  {
    sku: "TBL-001",
    name: "6 Seater Dining Table",
    category: "Furniture",
    price: 17999,
    mrp: 25999,
    desc: "Dining set table suitable for family use.",
    images: ["images/furniture-side.svg"],
    inStock: true
  },
  {
    sku: "TBL-002",
    name: "Center Coffee Table",
    category: "Furniture",
    price: 6499,
    mrp: 9999,
    desc: "Center table with lower shelf storage.",
    images: ["images/furniture-detail.svg"],
    inStock: true
  },
  {
    sku: "ALM-001",
    name: "4 Door Almirah",
    category: "Furniture",
    price: 26999,
    mrp: 34999,
    desc: "Large 4 door almirah with locker section.",
    images: ["images/furniture.svg"],
    inStock: true
  },
  {
    sku: "TVU-001",
    name: "TV Unit Cabinet",
    category: "Furniture",
    price: 11499,
    mrp: 16999,
    desc: "Wall-friendly TV unit with drawers.",
    images: ["images/furniture-back.svg"],
    inStock: true
  },
  {
    sku: "DSK-001",
    name: "Study Table With Drawer",
    category: "Furniture",
    price: 5599,
    mrp: 7999,
    desc: "Compact study table for home and office.",
    images: ["images/furniture-side.svg"],
    inStock: false
  },
  {
    sku: "HRD-001",
    name: "Door Handle Set",
    category: "Hardware",
    price: 850,
    mrp: 1200,
    desc: "Stainless steel door handle set.",
    images: ["images/hardware.svg"],
    inStock: true
  },
  {
    sku: "HRD-002",
    name: "Hydraulic Door Closer",
    category: "Hardware",
    price: 1450,
    mrp: 2100,
    desc: "Soft close door closer with fitting kit.",
    images: ["images/hardware-side.svg"],
    inStock: true
  },
  {
    sku: "PLY-001",
    name: "Commercial Plywood 18mm",
    category: "Plywood",
    price: 2350,
    mrp: 2950,
    desc: "Commercial grade plywood sheet.",
    images: ["images/plywood.svg"],
    inStock: true
  },
  {
    sku: "PLY-002",
    name: "Marine Plywood 18mm",
    category: "Plywood",
    price: 3190,
    mrp: 3890,
    desc: "Water resistant marine plywood sheet.",
    images: ["images/plywood-side.svg"],
    inStock: true
  }
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const resultsText = document.getElementById("resultsText");

const cartDrawer = document.getElementById("cartDrawer");
const cartItemsNode = document.getElementById("cartItems");
const cartTotalNode = document.getElementById("cartTotal");
const cartCountNode = document.getElementById("cartCount");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const clearCartBtn = document.getElementById("clearCartBtn");
const orderWhatsappBtn = document.getElementById("orderWhatsappBtn");
const contactForm = document.getElementById("contactForm");

const detailBackdrop = document.getElementById("detailBackdrop");
const detailModal = document.getElementById("productDetailModal");
const detailBackBtn = document.getElementById("detailBackBtn");
const closeDetailBtn = document.getElementById("closeDetailBtn");
const detailThumbs = document.getElementById("detailThumbs");
const detailMainImage = document.getElementById("detailMainImage");
const detailCategory = document.getElementById("detailCategory");
const detailTitle = document.getElementById("detailTitle");
const detailSku = document.getElementById("detailSku");
const detailDesc = document.getElementById("detailDesc");
const detailPrice = document.getElementById("detailPrice");
const detailMrp = document.getElementById("detailMrp");
const detailDiscount = document.getElementById("detailDiscount");
const detailStock = document.getElementById("detailStock");
const detailQty = document.getElementById("detailQty");
const detailAddCartBtn = document.getElementById("detailAddCartBtn");
const detailOrderBtn = document.getElementById("detailOrderBtn");

const PAGE_SIZE = 12;
const WHATSAPP_ORDER_NUMBER = "918292077357";

let visibleCount = PAGE_SIZE;
const cart = {};
const wishlist = new Set();
let activeDetailSku = "";
let activeDetailImageIndex = 0;

const categoryFallbackImage = {
  Furniture: "images/furniture.svg",
  Hardware: "images/hardware.svg",
  Plywood: "images/plywood.svg"
};

function parseNumericPrice(value) {
  if (typeof value === "number") return value;
  const text = String(value || "");
  const match = text.replace(/,/g, "").match(/\d+/);
  return match ? Number(match[0]) : 0;
}

function formatCurrency(value) {
  return "Rs. " + new Intl.NumberFormat("en-IN").format(Math.max(0, Math.round(value || 0)));
}

function normalizeImages(images, category) {
  const fallback = categoryFallbackImage[category] || categoryFallbackImage.Furniture;
  if (!Array.isArray(images) || !images.length) return [fallback];
  const clean = images.map((img) => String(img || "").trim()).filter(Boolean);
  if (!clean.length) return [fallback];
  return clean;
}

function normalizeCatalog(products) {
  return products.map((item, index) => {
    const category = item.category || "Furniture";
    const finalPrice = parseNumericPrice(item.price);
    let mrp = parseNumericPrice(item.mrp);
    if (!mrp || mrp <= finalPrice) mrp = Math.max(finalPrice + 1, Math.round(finalPrice * 1.12));
    const discount = Math.max(1, Math.round(((mrp - finalPrice) / mrp) * 100));

    return {
      sku: item.sku || `SKU-${String(index + 1).padStart(4, "0")}`,
      name: item.name || `Product ${index + 1}`,
      category,
      desc: item.desc || "Product description",
      finalPrice,
      mrp,
      discount,
      unit: item.unit || "",
      inStock: item.inStock !== false,
      images: normalizeImages(item.images, category)
    };
  });
}

const catalog = normalizeCatalog(manualProducts);

function getProductBySku(sku) {
  return catalog.find((item) => item.sku === sku);
}

function getFilteredProducts() {
  const search = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const sort = sortFilter.value;

  const filtered = catalog.filter((item) => {
    const hay = `${item.name} ${item.sku} ${item.desc}`.toLowerCase();
    const matchSearch = hay.includes(search);
    const matchCategory = category === "all" || item.category === category;
    return matchSearch && matchCategory;
  });

  if (sort === "priceLow") filtered.sort((a, b) => a.finalPrice - b.finalPrice);
  if (sort === "priceHigh") filtered.sort((a, b) => b.finalPrice - a.finalPrice);
  if (sort === "discountHigh") filtered.sort((a, b) => b.discount - a.discount);
  return filtered;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  const visible = filtered.slice(0, visibleCount);

  if (!filtered.length) {
    productGrid.innerHTML = "<p>No products found. Try a different keyword or category.</p>";
    resultsText.textContent = "Showing 0 products";
    loadMoreBtn.style.display = "none";
    return;
  }

  resultsText.textContent = `Showing ${visible.length} of ${filtered.length} products`;
  productGrid.innerHTML = visible
    .map((item) => {
      const stockClass = item.inStock ? "stock in" : "stock out";
      const stockText = item.inStock ? "In Stock" : "Out of Stock";
      const wishClass = wishlist.has(item.sku) ? "wish-btn active" : "wish-btn";
      const fallback = categoryFallbackImage[item.category] || categoryFallbackImage.Furniture;

      return `
      <article class="product-card" data-sku="${item.sku}">
        <div class="product-image-wrap">
          <img class="product-image" src="${item.images[0]}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src='${fallback}';">
          <span class="discount-tag">${item.discount}% OFF</span>
          <button class="${wishClass}" type="button" data-action="wishlist" data-sku="${item.sku}" aria-label="Add to wishlist">W</button>
        </div>
        <span class="pill">${item.category}</span>
        <h3>${item.name}</h3>
        <p class="sku">${item.sku}</p>
        <p class="price-row">
          <span class="price">${formatCurrency(item.finalPrice)}${item.unit}</span>
          <span class="mrp">${formatCurrency(item.mrp)}${item.unit}</span>
        </p>
        <p class="${stockClass}">${stockText}</p>
        <button class="btn btn-primary add-cart-btn" type="button" data-action="addToCart" data-sku="${item.sku}" ${item.inStock ? "" : "disabled"}>
          ${item.inStock ? "Add to Cart" : "Notify Me"}
        </button>
        <p class="tap-hint">Click card to view images and order.</p>
      </article>
    `;
    })
    .join("");

  loadMoreBtn.style.display = visible.length < filtered.length ? "inline-block" : "none";
}

function getCartEntries() {
  return Object.entries(cart)
    .map(([sku, qty]) => {
      const item = getProductBySku(sku);
      return item ? { item, qty } : null;
    })
    .filter(Boolean);
}

function renderCart() {
  const entries = getCartEntries();
  const totalQty = entries.reduce((sum, row) => sum + row.qty, 0);
  const total = entries.reduce((sum, row) => sum + row.item.finalPrice * row.qty, 0);

  cartCountNode.textContent = String(totalQty);
  cartTotalNode.textContent = formatCurrency(total);

  if (!entries.length) {
    cartItemsNode.innerHTML = "<p class='cart-empty'>Your cart is empty.</p>";
    return;
  }

  cartItemsNode.innerHTML = entries
    .map(
      ({ item, qty }) => `
      <div class="cart-item">
        <div>
          <p class="cart-name">${item.name}</p>
          <p class="cart-line">${formatCurrency(item.finalPrice)}${item.unit} x ${qty}</p>
        </div>
        <div class="qty-controls">
          <button class="icon-btn" type="button" data-action="decCart" data-sku="${item.sku}">-</button>
          <span>${qty}</span>
          <button class="icon-btn" type="button" data-action="incCart" data-sku="${item.sku}">+</button>
          <button class="icon-btn danger" type="button" data-action="removeCart" data-sku="${item.sku}">x</button>
        </div>
      </div>
    `
    )
    .join("");
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  drawerBackdrop.hidden = false;
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  drawerBackdrop.hidden = true;
}

function addToCart(sku, qty) {
  const product = getProductBySku(sku);
  const safeQty = Math.max(1, Number(qty) || 1);
  if (!product || !product.inStock) return;
  cart[sku] = (cart[sku] || 0) + safeQty;
  renderCart();
}

function orderOnWhatsapp() {
  const entries = getCartEntries();
  if (!entries.length) {
    alert("Cart is empty. Add products first.");
    return;
  }

  const total = entries.reduce((sum, row) => sum + row.item.finalPrice * row.qty, 0);
  const lines = entries.map(
    (row) => `${row.qty} x ${row.item.name} (${row.item.sku}) - ${formatCurrency(row.item.finalPrice)}${row.item.unit}`
  );
  const message = [
    "Hello Samrat Sharma Furniture,",
    "I want to place an order for these items:",
    ...lines,
    `Total: ${formatCurrency(total)}`,
    "Name:",
    "Address:"
  ].join("\n");

  const waUrl = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

function setActiveDetailImage(item, imageIndex) {
  activeDetailImageIndex = Math.max(0, Math.min(imageIndex, item.images.length - 1));
  const fallback = categoryFallbackImage[item.category] || categoryFallbackImage.Furniture;
  detailMainImage.src = item.images[activeDetailImageIndex];
  detailMainImage.onerror = function detailImageFallback() {
    this.onerror = null;
    this.src = fallback;
  };
  detailMainImage.alt = `${item.name} image ${activeDetailImageIndex + 1}`;

  const thumbButtons = detailThumbs.querySelectorAll(".thumb-btn");
  thumbButtons.forEach((button) => {
    const idx = Number(button.dataset.index);
    button.classList.toggle("active", idx === activeDetailImageIndex);
  });
}

function renderDetailThumbnails(item) {
  const fallback = categoryFallbackImage[item.category] || categoryFallbackImage.Furniture;
  detailThumbs.innerHTML = item.images
    .map(
      (img, idx) => `
      <button class="thumb-btn ${idx === 0 ? "active" : ""}" type="button" data-action="setDetailImage" data-index="${idx}" aria-label="View image ${idx + 1}">
        <img src="${img}" alt="${item.name} thumbnail ${idx + 1}" onerror="this.onerror=null;this.src='${fallback}';">
      </button>
    `
    )
    .join("");
}

function openProductDetail(sku, fromHistory) {
  const item = getProductBySku(sku);
  if (!item) return;
  activeDetailSku = sku;
  detailCategory.textContent = item.category;
  detailTitle.textContent = item.name;
  detailSku.textContent = item.sku;
  detailDesc.textContent = item.desc;
  detailPrice.textContent = `${formatCurrency(item.finalPrice)}${item.unit}`;
  detailMrp.textContent = `${formatCurrency(item.mrp)}${item.unit}`;
  detailDiscount.textContent = `${item.discount}% OFF`;
  detailStock.textContent = item.inStock ? "In Stock" : "Out of Stock";
  detailStock.className = item.inStock ? "stock in" : "stock out";
  detailAddCartBtn.disabled = !item.inStock;
  detailOrderBtn.disabled = !item.inStock;
  detailQty.value = "1";

  renderDetailThumbnails(item);
  setActiveDetailImage(item, 0);

  detailModal.hidden = false;
  detailModal.setAttribute("aria-hidden", "false");
  detailBackdrop.hidden = false;
  document.body.classList.add("modal-open");

  if (!fromHistory) {
    history.pushState({ productModal: true, sku }, "");
  }
}

function closeProductDetail(fromHistory) {
  if (detailModal.hidden) return;
  detailModal.hidden = true;
  detailModal.setAttribute("aria-hidden", "true");
  detailBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  activeDetailSku = "";
  activeDetailImageIndex = 0;

  if (!fromHistory && history.state && history.state.productModal) {
    history.back();
  }
}

function orderSingleProductOnWhatsapp(sku, qty) {
  const item = getProductBySku(sku);
  const safeQty = Math.max(1, Number(qty) || 1);
  if (!item || !item.inStock) return;

  const total = item.finalPrice * safeQty;
  const message = [
    "Hello Samrat Sharma Furniture,",
    "I want to order this item:",
    `${safeQty} x ${item.name} (${item.sku})`,
    `Price: ${formatCurrency(item.finalPrice)}${item.unit}`,
    `Total: ${formatCurrency(total)}`,
    "Name:",
    "Address:"
  ].join("\n");
  const waUrl = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

productGrid.addEventListener("click", (event) => {
  const buttonTarget = event.target.closest("button[data-action]");
  if (buttonTarget) {
    const action = buttonTarget.dataset.action;
    const sku = buttonTarget.dataset.sku;

    if (action === "addToCart") {
      addToCart(sku, 1);
      return;
    }

    if (action === "wishlist") {
      if (wishlist.has(sku)) wishlist.delete(sku);
      else wishlist.add(sku);
      renderProducts();
      return;
    }
  }

  const card = event.target.closest(".product-card[data-sku]");
  if (card) openProductDetail(card.dataset.sku);
});

detailThumbs.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action='setDetailImage']");
  if (!button || !activeDetailSku) return;
  const item = getProductBySku(activeDetailSku);
  if (!item) return;
  const index = Number(button.dataset.index);
  setActiveDetailImage(item, index);
});

detailAddCartBtn.addEventListener("click", () => {
  if (!activeDetailSku) return;
  addToCart(activeDetailSku, Number(detailQty.value));
  openCart();
});

detailOrderBtn.addEventListener("click", () => {
  if (!activeDetailSku) return;
  orderSingleProductOnWhatsapp(activeDetailSku, Number(detailQty.value));
});

detailBackBtn.addEventListener("click", () => {
  if (history.state && history.state.productModal) history.back();
  else closeProductDetail(true);
});
closeDetailBtn.addEventListener("click", closeProductDetail);
detailBackdrop.addEventListener("click", closeProductDetail);

cartItemsNode.addEventListener("click", (event) => {
  const target = event.target.closest("button[data-action]");
  if (!target) return;
  const sku = target.dataset.sku;
  const action = target.dataset.action;

  if (!cart[sku]) return;
  if (action === "incCart") cart[sku] += 1;
  if (action === "decCart") cart[sku] = Math.max(0, cart[sku] - 1);
  if (action === "removeCart") cart[sku] = 0;
  if (cart[sku] === 0) delete cart[sku];
  renderCart();
});

searchInput.addEventListener("input", () => {
  visibleCount = PAGE_SIZE;
  renderProducts();
});

categoryFilter.addEventListener("change", () => {
  visibleCount = PAGE_SIZE;
  renderProducts();
});

sortFilter.addEventListener("change", () => {
  visibleCount = PAGE_SIZE;
  renderProducts();
});

loadMoreBtn.addEventListener("click", () => {
  visibleCount += PAGE_SIZE;
  renderProducts();
});

openCartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
drawerBackdrop.addEventListener("click", closeCart);
clearCartBtn.addEventListener("click", () => {
  Object.keys(cart).forEach((key) => delete cart[key]);
  renderCart();
});
orderWhatsappBtn.addEventListener("click", orderOnWhatsapp);

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name")?.value.trim() || "";
    const phone = document.getElementById("phone")?.value.trim() || "";
    const interest = document.getElementById("interest")?.value.trim() || "";
    const message = document.getElementById("message")?.value.trim() || "";

    const waMessage = [
      "Hello Samrat Sharma Furniture,",
      "",
      "New Inquiry:",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Interested In: ${interest}`,
      `Message: ${message}`
    ].join("\n");

    const waUrl = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, "_blank");
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!detailModal.hidden) {
      closeProductDetail();
      return;
    }
    if (cartDrawer.classList.contains("open")) closeCart();
  }
});

window.addEventListener("popstate", (event) => {
  const state = event.state || {};
  if (state.productModal && state.sku) {
    openProductDetail(state.sku, true);
    return;
  }
  if (!detailModal.hidden) {
    closeProductDetail(true);
  }
});

document.getElementById("year").textContent = String(new Date().getFullYear());
renderProducts();
renderCart();
