const products = [
  { sku: "FUR-001", name: "Sheesham Wood Bed", category: "Furniture", price: "Rs. 28,000", desc: "Solid wood king-size frame." },
  { sku: "FUR-002", name: "Queen Storage Bed", category: "Furniture", price: "Rs. 31,500", desc: "Hydraulic storage with headboard." },
  { sku: "FUR-003", name: "6-Seater Dining Table", category: "Furniture", price: "Rs. 24,500", desc: "Engineered wood with chair set." },
  { sku: "FUR-004", name: "Round Dining Set", category: "Furniture", price: "Rs. 21,900", desc: "Compact family dining setup." },
  { sku: "FUR-005", name: "L-Shape Sofa", category: "Furniture", price: "Rs. 39,000", desc: "Comfortable 5-seater fabric sofa." },
  { sku: "FUR-006", name: "3-Seater Sofa", category: "Furniture", price: "Rs. 22,800", desc: "Modern cushioned seating." },
  { sku: "FUR-007", name: "Center Coffee Table", category: "Furniture", price: "Rs. 7,400", desc: "Minimal center table for hall." },
  { sku: "FUR-008", name: "TV Unit", category: "Furniture", price: "Rs. 13,500", desc: "Wall-friendly media storage unit." },
  { sku: "FUR-009", name: "4-Door Wardrobe", category: "Furniture", price: "Rs. 33,000", desc: "Large wardrobe with mirror panel." },
  { sku: "FUR-010", name: "Sliding Wardrobe", category: "Furniture", price: "Rs. 37,200", desc: "Space-saving sliding design." },
  { sku: "FUR-011", name: "Office Workstation Desk", category: "Furniture", price: "Rs. 12,000", desc: "Commercial-grade workstation." },
  { sku: "FUR-012", name: "Executive Office Table", category: "Furniture", price: "Rs. 18,400", desc: "Premium executive desk finish." },
  { sku: "FUR-013", name: "Bookshelf Unit", category: "Furniture", price: "Rs. 8,200", desc: "Open shelf storage for books." },
  { sku: "FUR-014", name: "Shoe Rack Cabinet", category: "Furniture", price: "Rs. 6,900", desc: "Entryway shoe organizer." },
  { sku: "FUR-015", name: "Study Table", category: "Furniture", price: "Rs. 5,800", desc: "Compact student desk setup." },
  { sku: "FUR-016", name: "Dressing Table", category: "Furniture", price: "Rs. 11,300", desc: "Mirror and drawer combo design." },
  { sku: "FUR-017", name: "Recliner Chair", category: "Furniture", price: "Rs. 17,900", desc: "Push-back comfort recliner." },
  { sku: "FUR-018", name: "Bar Stool Pair", category: "Furniture", price: "Rs. 4,700", desc: "High stool set for counter use." },
  { sku: "HRD-001", name: "Hydraulic Door Closer", category: "Hardware", price: "Rs. 1,450", desc: "Smooth controlled door closing." },
  { sku: "HRD-002", name: "Stainless Steel Handle Set", category: "Hardware", price: "Rs. 680", desc: "Rust-resistant premium handles." },
  { sku: "HRD-003", name: "Cabinet Hinge Pack", category: "Hardware", price: "Rs. 420", desc: "Soft-close hinges set of 4." },
  { sku: "HRD-004", name: "Main Door Lock", category: "Hardware", price: "Rs. 1,980", desc: "Heavy-duty locking system." },
  { sku: "HRD-005", name: "Mortise Lock Body", category: "Hardware", price: "Rs. 1,350", desc: "Secure lock for wooden doors." },
  { sku: "HRD-006", name: "Digital Door Lock", category: "Hardware", price: "Rs. 8,900", desc: "PIN and key access lockset." },
  { sku: "HRD-007", name: "Drawer Channel Pair", category: "Hardware", price: "Rs. 290", desc: "Smooth telescopic rails." },
  { sku: "HRD-008", name: "Tower Bolt 8 inch", category: "Hardware", price: "Rs. 160", desc: "Sturdy safety bolt finish." },
  { sku: "HRD-009", name: "Magnetic Door Stopper", category: "Hardware", price: "Rs. 260", desc: "Wall-protecting magnetic stop." },
  { sku: "HRD-010", name: "Screw Assortment Box", category: "Hardware", price: "Rs. 510", desc: "Multiple sizes in one kit." },
  { sku: "HRD-011", name: "Wood Adhesive 1kg", category: "Hardware", price: "Rs. 330", desc: "Strong wood bonding glue." },
  { sku: "HRD-012", name: "Edge Banding Roll", category: "Hardware", price: "Rs. 490", desc: "Decorative edge finishing strip." },
  { sku: "HRD-013", name: "Modular Kitchen Basket", category: "Hardware", price: "Rs. 2,600", desc: "SS pull-out basket system." },
  { sku: "HRD-014", name: "Cabinet Knob Set", category: "Hardware", price: "Rs. 380", desc: "Elegant knobs for cabinets." },
  { sku: "HRD-015", name: "Aluminium Profile Handle", category: "Hardware", price: "Rs. 750", desc: "Modern wardrobe profile handle." },
  { sku: "HRD-016", name: "PVC Skirting Strip", category: "Hardware", price: "Rs. 120/meter", desc: "Floor edge protection strip." },
  { sku: "PLY-001", name: "Commercial Plywood 18mm", category: "Plywood", price: "Rs. 2,350/sheet", desc: "General-purpose furniture grade." },
  { sku: "PLY-002", name: "Commercial Plywood 12mm", category: "Plywood", price: "Rs. 1,780/sheet", desc: "Versatile cabinet plywood." },
  { sku: "PLY-003", name: "Marine Grade Plywood", category: "Plywood", price: "Rs. 3,100/sheet", desc: "Moisture-resistant heavy duty." },
  { sku: "PLY-004", name: "BWP Waterproof Plywood", category: "Plywood", price: "Rs. 3,450/sheet", desc: "Boiling water proof quality." },
  { sku: "PLY-005", name: "Laminated Plywood Panel", category: "Plywood", price: "Rs. 2,850/sheet", desc: "Decorative surface finish panel." },
  { sku: "PLY-006", name: "Block Board 19mm", category: "Plywood", price: "Rs. 2,420/sheet", desc: "Door and partition application." },
  { sku: "PLY-007", name: "Flush Door Core", category: "Plywood", price: "Rs. 2,050/sheet", desc: "Stable and durable door core." },
  { sku: "PLY-008", name: "MDF Board 18mm", category: "Plywood", price: "Rs. 1,650/sheet", desc: "Smooth machinable board." },
  { sku: "PLY-009", name: "HDF Board 8mm", category: "Plywood", price: "Rs. 1,120/sheet", desc: "High-density compact board." },
  { sku: "PLY-010", name: "Veneer Sheet Walnut", category: "Plywood", price: "Rs. 190/sqft", desc: "Natural wood veneer finish." },
  { sku: "PLY-011", name: "Teak Veneer Sheet", category: "Plywood", price: "Rs. 210/sqft", desc: "Premium teak surface layer." },
  { sku: "PLY-012", name: "PVC Laminate Sheet", category: "Plywood", price: "Rs. 120/sqft", desc: "Scratch-resistant decorative layer." },
  { sku: "PLY-013", name: "WPC Board", category: "Plywood", price: "Rs. 2,950/sheet", desc: "Termite-resistant composite board." },
  { sku: "PLY-014", name: "Flexible Plywood", category: "Plywood", price: "Rs. 2,150/sheet", desc: "Curved furniture design material." },
  { sku: "PLY-015", name: "Calibrated Plywood", category: "Plywood", price: "Rs. 3,280/sheet", desc: "Uniform thickness calibrated board." },
  { sku: "PLY-016", name: "Pre-Laminated MDF", category: "Plywood", price: "Rs. 1,980/sheet", desc: "Ready-to-use decorative sheet." }
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

const detailBackdrop = document.getElementById("detailBackdrop");
const detailModal = document.getElementById("productDetailModal");
const closeDetailBtn = document.getElementById("closeDetailBtn");
const detailThumbs = document.getElementById("detailThumbs");
const detailMainImage = document.getElementById("detailMainImage");
const detailCategory = document.getElementById("detailCategory");
const detailTitle = document.getElementById("detailTitle");
const detailSku = document.getElementById("detailSku");
const detailDesc = document.getElementById("detailDesc");
const detailRating = document.getElementById("detailRating");
const detailPrice = document.getElementById("detailPrice");
const detailMrp = document.getElementById("detailMrp");
const detailDiscount = document.getElementById("detailDiscount");
const detailStock = document.getElementById("detailStock");
const detailQty = document.getElementById("detailQty");
const detailAddCartBtn = document.getElementById("detailAddCartBtn");
const detailOrderBtn = document.getElementById("detailOrderBtn");

const PAGE_SIZE = 12;
let visibleCount = PAGE_SIZE;
const cart = {};
const wishlist = new Set();
let activeDetailSku = "";
let activeDetailImageIndex = 0;
const WHATSAPP_ORDER_NUMBER = "918292077357";

const categoryImageSets = {
  Furniture: [
    "images/furniture.svg",
    "images/furniture-side.svg",
    "images/furniture-back.svg",
    "images/furniture-detail.svg"
  ],
  Hardware: [
    "images/hardware.svg",
    "images/hardware-side.svg",
    "images/hardware-back.svg",
    "images/hardware-detail.svg"
  ],
  Plywood: [
    "images/plywood.svg",
    "images/plywood-side.svg",
    "images/plywood-back.svg",
    "images/plywood-detail.svg"
  ]
};

function parseNumericPrice(priceText) {
  const match = priceText.replace(/,/g, "").match(/\d+/);
  return match ? Number(match[0]) : 0;
}

function extractUnit(priceText) {
  const slashIndex = priceText.indexOf("/");
  return slashIndex >= 0 ? priceText.slice(slashIndex) : "";
}

function formatCurrency(value) {
  return "Rs. " + new Intl.NumberFormat("en-IN").format(value);
}

function getProductBySku(sku) {
  return catalog.find((item) => item.sku === sku);
}

const catalog = products.map((item, index) => {
  const basePrice = parseNumericPrice(item.price);
  const unit = extractUnit(item.price);
  const discount = 8 + (index % 6) * 4;
  const finalPrice = Math.max(50, Math.round((basePrice * (100 - discount)) / 100));
  const mrp = Math.max(finalPrice + 20, Math.round(basePrice * 1.12));
  const rating = Number((3.8 + (index % 10) * 0.11).toFixed(1));
  const reviews = 68 + index * 9;
  const inStock = (index + 1) % 9 !== 0;

  return {
    ...item,
    basePrice,
    unit,
    discount,
    finalPrice,
    mrp,
    rating: Math.min(4.9, rating),
    reviews,
    inStock,
    images: categoryImageSets[item.category] || categoryImageSets.Furniture
  };
});

function getFilteredProducts() {
  const search = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const sort = sortFilter.value;

  const filtered = catalog.filter((item) => {
    const keyword = `${item.name} ${item.sku} ${item.desc}`.toLowerCase();
    const matchSearch = keyword.includes(search);
    const matchCategory = category === "all" || item.category === category;
    return matchSearch && matchCategory;
  });

  if (sort === "priceLow") filtered.sort((a, b) => a.finalPrice - b.finalPrice);
  if (sort === "priceHigh") filtered.sort((a, b) => b.finalPrice - a.finalPrice);
  if (sort === "ratingHigh") filtered.sort((a, b) => b.rating - a.rating);
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

      return `
      <article class="product-card" data-sku="${item.sku}">
        <div class="product-image-wrap">
          <img class="product-image" src="${item.images[0]}" alt="${item.name}" loading="lazy">
          <span class="discount-tag">${item.discount}% OFF</span>
          <button class="${wishClass}" type="button" data-action="wishlist" data-sku="${item.sku}" aria-label="Add to wishlist">W</button>
        </div>
        <span class="pill">${item.category}</span>
        <h3>${item.name}</h3>
        <p class="sku">${item.sku}</p>
        <p class="desc">${item.desc}</p>
        <p class="rating">Rating: ${item.rating} (${item.reviews})</p>
        <p class="price-row">
          <span class="price">${formatCurrency(item.finalPrice)}${item.unit}</span>
          <span class="mrp">${formatCurrency(item.mrp)}${item.unit}</span>
        </p>
        <p class="${stockClass}">${stockText}</p>
        <button class="btn btn-primary add-cart-btn" type="button" data-action="addToCart" data-sku="${item.sku}" ${item.inStock ? "" : "disabled"}>
          ${item.inStock ? "Add to Cart" : "Notify Me"}
        </button>
        <p class="tap-hint">Click card to view more images and order.</p>
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

function addToCart(sku, qty = 1) {
  const product = getProductBySku(sku);
  const safeQty = Math.max(1, Number(qty) || 1);
  if (!product || !product.inStock) return;
  cart[sku] = (cart[sku] || 0) + safeQty;
  renderCart();
}

function buildWhatsappCartMessage(entries, total) {
  const lines = entries.map(
    (row) => `${row.qty} x ${row.item.name} (${row.item.sku}) - ${formatCurrency(row.item.finalPrice)}${row.item.unit}`
  );
  return [
    "Hello Samrat Sharma Furniture,",
    "I want to place an order for these items:",
    ...lines,
    `Total: ${formatCurrency(total)}`,
    "Name:",
    "Address:"
  ].join("\n");
}

function orderOnWhatsapp() {
  const entries = getCartEntries();
  if (!entries.length) {
    alert("Cart is empty. Add products first.");
    return;
  }

  const total = entries.reduce((sum, row) => sum + row.item.finalPrice * row.qty, 0);
  const message = buildWhatsappCartMessage(entries, total);
  const waUrl = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

function setActiveDetailImage(item, imageIndex) {
  activeDetailImageIndex = Math.max(0, Math.min(imageIndex, item.images.length - 1));
  detailMainImage.src = item.images[activeDetailImageIndex];
  detailMainImage.alt = `${item.name} image ${activeDetailImageIndex + 1}`;

  const thumbButtons = detailThumbs.querySelectorAll(".thumb-btn");
  thumbButtons.forEach((button) => {
    const idx = Number(button.dataset.index);
    button.classList.toggle("active", idx === activeDetailImageIndex);
  });
}

function renderDetailThumbnails(item) {
  detailThumbs.innerHTML = item.images
    .map(
      (img, idx) => `
      <button class="thumb-btn ${idx === 0 ? "active" : ""}" type="button" data-action="setDetailImage" data-index="${idx}" aria-label="View image ${idx + 1}">
        <img src="${img}" alt="${item.name} thumbnail ${idx + 1}">
      </button>
    `
    )
    .join("");
}

function openProductDetail(sku) {
  const item = getProductBySku(sku);
  if (!item) return;

  activeDetailSku = sku;
  detailCategory.textContent = item.category;
  detailTitle.textContent = item.name;
  detailSku.textContent = item.sku;
  detailDesc.textContent = item.desc;
  detailRating.textContent = `Rating: ${item.rating} (${item.reviews})`;
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
}

function closeProductDetail() {
  detailModal.hidden = true;
  detailModal.setAttribute("aria-hidden", "true");
  detailBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  activeDetailSku = "";
  activeDetailImageIndex = 0;
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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!detailModal.hidden) {
      closeProductDetail();
      return;
    }
    if (cartDrawer.classList.contains("open")) closeCart();
  }
});

document.getElementById("year").textContent = String(new Date().getFullYear());
renderProducts();
renderCart();
