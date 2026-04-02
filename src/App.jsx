import { useEffect, useMemo, useRef, useState } from "react";

const manualProducts = [
  {
    sku: "BED-000",
    name: "Seesham Bed",
    category: "Furniture",
    price: 9587,
    mrp: 24999,
    desc: "Brown finish engineered wood bed. Queen size frame for 72 x 60 inch mattress, knock down delivery, 1 year warranty.",
    images: ["/images/Beds/71gVH3UvsxL._SX679_.jpg"],
    inStock: true
  },
  {
    sku: "BED-001",
    name: "Engineered Wood Queen Bed",
    category: "Furniture",
    price: 9587,
    mrp: 24999,
    desc: "Modern queen size bed with clean finish.",
    images: ["/images/furniture.svg", "/images/furniture-side.svg"],
    inStock: true
  },
  {
    sku: "BED-002",
    name: "King Bed With Storage",
    category: "Furniture",
    price: 18990,
    mrp: 28999,
    desc: "Hydraulic storage bed with headboard.",
    images: ["/images/furniture-back.svg", "/images/furniture-detail.svg"],
    inStock: true
  },
  {
    sku: "BED-003",
    name: "Single Bed Frame",
    category: "Furniture",
    price: 7499,
    mrp: 10999,
    desc: "Compact single bed for kids room.",
    images: ["/images/furniture-side.svg"],
    inStock: true
  },
  {
    sku: "CHR-001",
    name: "Premium Dining Chair",
    category: "Furniture",
    price: 2699,
    mrp: 3999,
    desc: "Solid wood dining chair with cushion seat.",
    images: ["/images/furniture.svg"],
    inStock: true
  },
  {
    sku: "CHR-002",
    name: "Office Ergonomic Chair",
    category: "Furniture",
    price: 5899,
    mrp: 8499,
    desc: "Adjustable office chair with lumbar support.",
    images: ["/images/furniture-detail.svg"],
    inStock: true
  },
  {
    sku: "SFA-001",
    name: "3 Seater Fabric Sofa",
    category: "Furniture",
    price: 22499,
    mrp: 30999,
    desc: "Comfortable 3 seater sofa for living room.",
    images: ["/images/furniture-back.svg"],
    inStock: true
  },
  {
    sku: "TBL-001",
    name: "6 Seater Dining Table",
    category: "Furniture",
    price: 17999,
    mrp: 25999,
    desc: "Dining set table suitable for family use.",
    images: ["/images/furniture-side.svg"],
    inStock: true
  },
  {
    sku: "TBL-002",
    name: "Center Coffee Table",
    category: "Furniture",
    price: 6499,
    mrp: 9999,
    desc: "Center table with lower shelf storage.",
    images: ["/images/furniture-detail.svg"],
    inStock: true
  },
  {
    sku: "ALM-001",
    name: "4 Door Almirah",
    category: "Furniture",
    price: 26999,
    mrp: 34999,
    desc: "Large 4 door almirah with locker section.",
    images: ["/images/furniture.svg"],
    inStock: true
  },
  {
    sku: "TVU-001",
    name: "TV Unit Cabinet",
    category: "Furniture",
    price: 11499,
    mrp: 16999,
    desc: "Wall-friendly TV unit with drawers.",
    images: ["/images/furniture-back.svg"],
    inStock: true
  },
  {
    sku: "DSK-001",
    name: "Study Table With Drawer",
    category: "Furniture",
    price: 5599,
    mrp: 7999,
    desc: "Compact study table for home and office.",
    images: ["/images/furniture-side.svg"],
    inStock: false
  },
  {
    sku: "HRD-001",
    name: "Door Handle Set",
    category: "Hardware",
    price: 850,
    mrp: 1200,
    desc: "Stainless steel door handle set.",
    images: ["/images/hardware.svg"],
    inStock: true
  },
  {
    sku: "HRD-002",
    name: "Hydraulic Door Closer",
    category: "Hardware",
    price: 1450,
    mrp: 2100,
    desc: "Soft close door closer with fitting kit.",
    images: ["/images/hardware-side.svg"],
    inStock: true
  },
  {
    sku: "PLY-001",
    name: "Commercial Plywood 18mm",
    category: "Plywood",
    price: 2350,
    mrp: 2950,
    desc: "Commercial grade plywood sheet.",
    images: ["/images/plywood.svg"],
    inStock: true
  },
  {
    sku: "PLY-002",
    name: "Marine Plywood 18mm",
    category: "Plywood",
    price: 3190,
    mrp: 3890,
    desc: "Water resistant marine plywood sheet.",
    images: ["/images/plywood-side.svg"],
    inStock: true
  }
];

const PAGE_SIZE = 12;
const WHATSAPP_ORDER_NUMBER = "918292077357";

const categoryFallbackImage = {
  Furniture: "/images/furniture.svg",
  Hardware: "/images/hardware.svg",
  Plywood: "/images/plywood.svg"
};

function formatCurrency(value) {
  return `Rs. ${Number(value || 0).toLocaleString("en-IN")}`;
}

function normalizeProduct(product) {
  const finalPrice = Number(product.price || 0);
  const mrp = Number(product.mrp || finalPrice);
  const discount = mrp > 0 ? Math.max(0, Math.round(((mrp - finalPrice) / mrp) * 100)) : 0;
  const images = Array.isArray(product.images) && product.images.length ? product.images : [categoryFallbackImage[product.category] || categoryFallbackImage.Furniture];
  return {
    ...product,
    finalPrice,
    mrp,
    discount,
    unit: "",
    images
  };
}

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("relevance");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [cart, setCart] = useState({});
  const [wishlist, setWishlist] = useState(new Set());
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [detail, setDetail] = useState({ sku: "", imageIndex: 0, qty: 1 });
  const audioContextRef = useRef(null);

  const catalog = useMemo(() => manualProducts.map(normalizeProduct), []);

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase();
    const list = catalog.filter((item) => {
      const hay = `${item.name} ${item.sku} ${item.desc}`.toLowerCase();
      const matchSearch = hay.includes(term);
      const matchCategory = category === "all" || item.category === category;
      return matchSearch && matchCategory;
    });

    if (sort === "priceLow") list.sort((a, b) => a.finalPrice - b.finalPrice);
    if (sort === "priceHigh") list.sort((a, b) => b.finalPrice - a.finalPrice);
    if (sort === "discountHigh") list.sort((a, b) => b.discount - a.discount);

    return list;
  }, [catalog, search, category, sort]);

  const visibleProducts = useMemo(() => filteredProducts.slice(0, visibleCount), [filteredProducts, visibleCount]);

  const detailProduct = useMemo(() => catalog.find((item) => item.sku === detail.sku) || null, [catalog, detail.sku]);

  const cartEntries = useMemo(
    () =>
      Object.entries(cart)
        .map(([sku, qty]) => {
          const item = catalog.find((x) => x.sku === sku);
          if (!item || qty <= 0) return null;
          return { item, qty };
        })
        .filter(Boolean),
    [cart, catalog]
  );

  const cartTotalQty = cartEntries.reduce((sum, row) => sum + row.qty, 0);
  const cartTotal = cartEntries.reduce((sum, row) => sum + row.item.finalPrice * row.qty, 0);

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(detailProduct));
    return () => document.body.classList.remove("modal-open");
  }, [detailProduct]);

  useEffect(() => {
    const onEsc = (event) => {
      if (event.key !== "Escape") return;
      if (detailProduct) {
        setDetail({ sku: "", imageIndex: 0, qty: 1 });
        return;
      }
      if (isCartOpen) setIsCartOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [detailProduct, isCartOpen]);

  const openWhatsApp = (message) => {
    const url = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const playAddToCartSound = () => {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContextClass();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        const resumePromise = ctx.resume();
        if (resumePromise && typeof resumePromise.catch === "function") {
          resumePromise.catch(() => {});
        }
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "square";
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.13);
    } catch {
      // Never block cart actions if audio playback is unavailable.
    }
  };

  const addToCart = (sku, qty = 1) => {
    const item = catalog.find((x) => x.sku === sku);
    if (!item || !item.inStock) return false;
    const safeQty = Math.max(1, Number(qty) || 1);
    setCart((prev) => ({ ...prev, [sku]: (prev[sku] || 0) + safeQty }));
    playAddToCartSound();
    return true;
  };

  const updateCartQty = (sku, delta) => {
    setCart((prev) => {
      const next = { ...prev };
      const qty = Math.max(0, (next[sku] || 0) + delta);
      if (!qty) delete next[sku];
      else next[sku] = qty;
      return next;
    });
  };

  const removeCartItem = (sku) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[sku];
      return next;
    });
  };

  const orderCartOnWhatsApp = () => {
    if (!cartEntries.length) {
      alert("Cart is empty. Add products first.");
      return;
    }

    const lines = cartEntries.map((row) => `${row.qty} x ${row.item.name} (${row.item.sku}) - ${formatCurrency(row.item.finalPrice)}${row.item.unit}`);
    const message = [
      "Hello Samrat Sharma Furniture,",
      "I want to place an order for these items:",
      ...lines,
      `Total: ${formatCurrency(cartTotal)}`,
      "Name:",
      "Address:"
    ].join("\n");

    openWhatsApp(message);
  };

  const orderSingleOnWhatsApp = () => {
    if (!detailProduct) return;
    const qty = Math.max(1, Number(detail.qty) || 1);
    const total = detailProduct.finalPrice * qty;
    const message = [
      "Hello Samrat Sharma Furniture,",
      "I want to order this item:",
      `${qty} x ${detailProduct.name} (${detailProduct.sku})`,
      `Price: ${formatCurrency(detailProduct.finalPrice)}${detailProduct.unit}`,
      `Total: ${formatCurrency(total)}`,
      "Name:",
      "Address:"
    ].join("\n");

    openWhatsApp(message);
  };

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="logo" href="#home">Samrat Sharma Furniture</a>
          <nav>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#categories">Categories</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="header-actions">
            <button className="cart-btn" type="button" aria-label="Open cart" onClick={() => setIsCartOpen(true)}>
              Cart <span>{cartTotalQty}</span>
            </button>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow">Trusted Local Business</p>
              <h1>Furniture, Hardware &amp; Plywood Under One Roof</h1>
              <p>Samrat Sharma Furniture supplies durable furniture, reliable hardware, and quality plywood for homes, interiors, and commercial spaces.</p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#products">View Products</a>
                <a className="btn btn-secondary" href="#contact">Request a Quote</a>
              </div>
            </div>
            <div className="hero-card">
              <h2>Business Highlights</h2>
              <ul>
                <li>Custom and ready-made furniture options</li>
                <li>Essential hardware and fittings available</li>
                <li>Plywood sheets in multiple grades and sizes</li>
                <li>Bulk order support for contractors and builders</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="categories">
          <div className="container">
            <h2 className="section-title">What We Sell</h2>
            <div className="category-grid">
              <article className="category-card"><h3>Furniture</h3><p>Sofas, beds, tables, wardrobes, office furniture, and storage units.</p></article>
              <article className="category-card"><h3>Hardware</h3><p>Hinges, handles, locks, channels, screws, and installation accessories.</p></article>
              <article className="category-card"><h3>Plywood</h3><p>Commercial, marine, and laminated plywood in different thicknesses.</p></article>
            </div>
          </div>
        </section>

        <section className="section alt" id="products">
          <div className="container">
            <div className="section-head">
              <h2 className="section-title">Display Catalog</h2>
              <div className="filters">
                <label htmlFor="searchInput" className="sr-only">Search products</label>
                <input id="searchInput" type="text" placeholder="Search product name..." value={search} onChange={(e) => { setSearch(e.target.value); setVisibleCount(PAGE_SIZE); }} />
                <label htmlFor="categoryFilter" className="sr-only">Filter category</label>
                <select id="categoryFilter" value={category} onChange={(e) => { setCategory(e.target.value); setVisibleCount(PAGE_SIZE); }}>
                  <option value="all">All Categories</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Hardware">Hardware</option>
                  <option value="Plywood">Plywood</option>
                </select>
                <label htmlFor="sortFilter" className="sr-only">Sort products</label>
                <select id="sortFilter" value={sort} onChange={(e) => { setSort(e.target.value); setVisibleCount(PAGE_SIZE); }}>
                  <option value="relevance">Sort: Relevance</option>
                  <option value="priceLow">Price: Low to High</option>
                  <option value="priceHigh">Price: High to Low</option>
                  <option value="discountHigh">Best Discount</option>
                </select>
              </div>
            </div>

            <p className="results-text">Showing {visibleProducts.length} of {filteredProducts.length} products</p>

            <div className="product-grid" aria-live="polite">
              {visibleProducts.length === 0 ? <p>No products found. Try a different keyword or category.</p> : null}
              {visibleProducts.map((item) => {
                const wishActive = wishlist.has(item.sku);
                const fallback = categoryFallbackImage[item.category] || categoryFallbackImage.Furniture;
                return (
                  <article className="product-card" key={item.sku}>
                    <div className="product-image-wrap" onClick={() => setDetail({ sku: item.sku, imageIndex: 0, qty: 1 })}>
                      <img
                        className="product-image"
                        src={item.images[0]}
                        alt={item.name}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = fallback;
                        }}
                      />
                      <span className="discount-tag">{item.discount}% OFF</span>
                      <button
                        className={`wish-btn ${wishActive ? "active" : ""}`}
                        type="button"
                        aria-label={wishActive ? "Remove from favorites" : "Add to favorites"}
                        onClick={(e) => {
                          e.stopPropagation();
                          setWishlist((prev) => {
                            const next = new Set(prev);
                            if (next.has(item.sku)) next.delete(item.sku);
                            else next.add(item.sku);
                            return next;
                          });
                        }}
                      >
                        {wishActive ? "♥" : "♡"}
                      </button>
                    </div>
                    <span className="pill">{item.category}</span>
                    <h3>{item.name}</h3>
                    <p className="sku">{item.sku}</p>
                    <p className="price-row">
                      <span className="price">{formatCurrency(item.finalPrice)}{item.unit}</span>
                      <span className="mrp">{formatCurrency(item.mrp)}{item.unit}</span>
                    </p>
                    <p className={`stock ${item.inStock ? "in" : "out"}`}>{item.inStock ? "In Stock" : "Out of Stock"}</p>
                    <button className="btn btn-primary add-cart-btn" type="button" disabled={!item.inStock} onClick={() => {
                      const added = addToCart(item.sku, 1);
                      if (added) setIsCartOpen(true);
                    }}>
                      {item.inStock ? "Add to Cart" : "Notify Me"}
                    </button>
                    <p className="tap-hint" onClick={() => setDetail({ sku: item.sku, imageIndex: 0, qty: 1 })}>Click card to view images and order.</p>
                  </article>
                );
              })}
            </div>

            <div className="load-more-wrap">
              {visibleProducts.length < filteredProducts.length ? (
                <button className="btn btn-secondary" type="button" onClick={() => setVisibleCount((x) => x + PAGE_SIZE)}>
                  Load More
                </button>
              ) : null}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container about-wrap">
            <h2 className="section-title">About Samrat Sharma Furniture</h2>
            <p>
              We are a customer-first furniture and building material business focused on practical quality and fair pricing.
              Whether you are furnishing a home, renovating a space, or working on a site project, we help you source the
              right products quickly and reliably.
            </p>
          </div>
        </section>

        <section className="section alt" id="contact">
          <div className="container">
            <div className="contact-head">
              <h2 className="section-title">Contact &amp; Inquiry</h2>
              <p className="contact-subtitle">Tell us what you need and we will send pricing and availability on WhatsApp.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-card">
                <span className="contact-badge">Business Contact</span>
                <h3>Samrat Sharma Furniture</h3>
                <p className="contact-note">Local supplier for furniture, hardware, and plywood in Ranchi.</p>

                <div className="contact-lines">
                  <p className="contact-line"><span>Owner</span>Dharmendra Sharma</p>
                  <p className="contact-line"><span>Phone</span><a href="tel:+919835748312">+91 98357 48312</a></p>
                  <p className="contact-line"><span>WhatsApp</span><a href="https://wa.me/918292077357?text=Hello%20Samrat%20Sharma%20Furniture%2C%20I%20want%20details." target="_blank" rel="noopener noreferrer">+91 82920 77357</a></p>
                  <p className="contact-line"><span>Email</span><a href="mailto:17sharmadh@gmail.com">17sharmadh@gmail.com</a></p>
                  <p className="contact-line"><span>Address</span>Lalpur, opposite Hotel Arya, Ranchi, Jharkhand</p>
                </div>

                <div className="contact-quick-actions">
                  <a className="btn btn-secondary" href="tel:+919835748312">Call Now</a>
                  <a className="btn btn-primary" href="https://wa.me/918292077357?text=Hello%20Samrat%20Sharma%20Furniture%2C%20I%20want%20details." target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                </div>
              </div>

              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const waMessage = [
                    "Hello Samrat Sharma Furniture,",
                    "",
                    "New Inquiry:",
                    `Name: ${String(formData.get("name") || "")}`,
                    `Phone: ${String(formData.get("phone") || "")}`,
                    `Interested In: ${String(formData.get("interest") || "")}`,
                    `Message: ${String(formData.get("message") || "")}`
                  ].join("\n");
                  openWhatsApp(waMessage);
                }}
              >
                <div className="contact-form-head">
                  <h3>Send Inquiry</h3>
                  <p>Share your requirement and we will reply quickly with details.</p>
                </div>

                <div className="contact-field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required />
                </div>

                <div className="contact-field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" required />
                </div>

                <div className="contact-field">
                  <label htmlFor="interest">Interested In</label>
                  <select id="interest" name="interest" required>
                    <option value="">Select one</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Hardware">Hardware</option>
                    <option value="Plywood">Plywood</option>
                    <option value="Bulk Order">Bulk Order</option>
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required />
                </div>

                <button className="btn btn-primary" type="submit">Send Inquiry on WhatsApp</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>&copy; {new Date().getFullYear()} Samrat Sharma Furniture. All rights reserved.</p>
        </div>
      </footer>

      <aside className={`cart-drawer ${isCartOpen ? "open" : ""}`} aria-hidden={!isCartOpen}>
        <div className="cart-head">
          <h3>Your Cart</h3>
          <button type="button" className="icon-btn" aria-label="Close cart" onClick={() => setIsCartOpen(false)}>X</button>
        </div>
        <div className="cart-items">
          {cartEntries.length === 0 ? (
            <p className="cart-empty">Your cart is empty.</p>
          ) : (
            cartEntries.map(({ item, qty }) => (
              <div className="cart-item" key={item.sku}>
                <div>
                  <p className="cart-name">{item.name}</p>
                  <p className="cart-line">{formatCurrency(item.finalPrice)}{item.unit} x {qty}</p>
                </div>
                <div className="qty-controls">
                  <button className="icon-btn" type="button" onClick={() => updateCartQty(item.sku, -1)}>-</button>
                  <span>{qty}</span>
                  <button className="icon-btn" type="button" onClick={() => updateCartQty(item.sku, 1)}>+</button>
                  <button className="icon-btn danger" type="button" onClick={() => removeCartItem(item.sku)}>x</button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <p><strong>Total:</strong> {formatCurrency(cartTotal)}</p>
          <div className="cart-actions">
            <button className="btn btn-secondary" type="button" onClick={() => setCart({})}>Clear Cart</button>
            <button className="btn btn-primary" type="button" onClick={orderCartOnWhatsApp}>Order on WhatsApp</button>
          </div>
        </div>
      </aside>
      <div className="drawer-backdrop" hidden={!isCartOpen} onClick={() => setIsCartOpen(false)} />

      {detailProduct ? (
        <>
          <div className="detail-backdrop" onClick={() => setDetail({ sku: "", imageIndex: 0, qty: 1 })} />
          <section className="product-detail-modal" aria-hidden={false}>
            <div className="product-detail-shell">
              <button className="icon-btn detail-back-btn" type="button" aria-label="Go back" onClick={() => setDetail({ sku: "", imageIndex: 0, qty: 1 })}>Back</button>
              <button className="icon-btn detail-close-btn" type="button" aria-label="Close details" onClick={() => setDetail({ sku: "", imageIndex: 0, qty: 1 })}>X</button>
              <div className="detail-layout">
                <div className="detail-thumbs">
                  {detailProduct.images.map((img, idx) => {
                    const fallback = categoryFallbackImage[detailProduct.category] || categoryFallbackImage.Furniture;
                    return (
                      <button className={`thumb-btn ${detail.imageIndex === idx ? "active" : ""}`} type="button" key={`${detailProduct.sku}-${idx}`} onClick={() => setDetail((prev) => ({ ...prev, imageIndex: idx }))}>
                        <img src={img} alt={`${detailProduct.name} thumbnail ${idx + 1}`} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallback; }} />
                      </button>
                    );
                  })}
                </div>
                <div className="detail-main-image-wrap">
                  <img
                    className="detail-main-image"
                    src={detailProduct.images[detail.imageIndex]}
                    alt={`${detailProduct.name} image ${detail.imageIndex + 1}`}
                    onError={(e) => {
                      const fallback = categoryFallbackImage[detailProduct.category] || categoryFallbackImage.Furniture;
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = fallback;
                    }}
                  />
                </div>
                <div className="detail-info">
                  <p className="pill">{detailProduct.category}</p>
                  <h3>{detailProduct.name}</h3>
                  <p className="sku">{detailProduct.sku}</p>
                  <p className="desc">{detailProduct.desc}</p>
                  <div className="price-row">
                    <span className="price">{formatCurrency(detailProduct.finalPrice)}{detailProduct.unit}</span>
                    <span className="mrp">{formatCurrency(detailProduct.mrp)}{detailProduct.unit}</span>
                    <span className="discount-inline">{detailProduct.discount}% OFF</span>
                  </div>
                  <p className={`stock ${detailProduct.inStock ? "in" : "out"}`}>{detailProduct.inStock ? "In Stock" : "Out of Stock"}</p>
                  <div className="detail-order-box">
                    <label htmlFor="detailQty"><strong>Quantity</strong></label>
                    <select id="detailQty" value={detail.qty} onChange={(e) => setDetail((prev) => ({ ...prev, qty: Number(e.target.value) }))}>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                    </select>
                    <div className="detail-action-grid">
                      <button className="btn btn-primary" type="button" disabled={!detailProduct.inStock} onClick={() => {
                        const added = addToCart(detailProduct.sku, detail.qty);
                        if (added) {
                          setDetail({ sku: "", imageIndex: 0, qty: 1 });
                          setIsCartOpen(true);
                        }
                      }}>
                        Add to Cart
                      </button>
                      <button className="btn btn-buy" type="button" disabled={!detailProduct.inStock} onClick={orderSingleOnWhatsApp}>
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}
