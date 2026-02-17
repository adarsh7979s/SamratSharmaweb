// Shared JS for all static pages: mobile nav, active menu, footer year, and contact-form helpers.
(function () {
  // Mobile menu toggle.
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
  }

  // Highlight current page in nav.
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Update footer year.
  const yearNode = document.getElementById("year");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  // Contact form helper for WhatsApp submission.
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const interest = document.getElementById("interest").value.trim();
      const message = document.getElementById("message").value.trim();
      const whatsappNumber = "918292077357";

      const waText = [
        "Hello Samrat Sharma Furniture,",
        "",
        "New Inquiry:",
        "Name: " + name,
        "Phone: " + phone,
        "Interested In: " + interest,
        "Message: " + message
      ].join("\n");

      const waUrl = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(waText);
      window.location.href = waUrl;
    });
  }

  if (formStatus) {
    formStatus.hidden = false;
    formStatus.textContent = "After clicking send, you will be redirected to WhatsApp with your inquiry message.";
  }
})();
