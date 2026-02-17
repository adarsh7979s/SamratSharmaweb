// Shared behavior for all pages: mobile menu, active nav, dynamic year, and contact status message.
(function () {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
  }

  const currentPage = location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll("[data-nav]");
  links.forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  const yearNode = document.getElementById("year");
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

  const statusNode = document.getElementById("formStatus");
  if (statusNode) {
    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");
    if (status === "success") {
      statusNode.className = "notice ok";
      statusNode.textContent = "Thank you. Your inquiry was sent successfully.";
      statusNode.hidden = false;
    } else if (status === "error") {
      statusNode.className = "notice err";
      statusNode.textContent = "We could not send your inquiry right now. Please call or WhatsApp us.";
      statusNode.hidden = false;
    }
  }
})();
