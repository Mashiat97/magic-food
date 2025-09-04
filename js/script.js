document.addEventListener('DOMContentLoaded', () => {
  // Utility: Load HTML components into specific divs
  const loadComponent = (id, url) => {
    fetch(url)
      .then(res => res.text())
      .then(html => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
      });
  };

  // Load Components
  loadComponent('header', 'components/header.html');
  loadComponent('footer', 'components/footer.html');
  loadComponent('banner', 'components/banner.html');
  loadComponent('deal-cards', 'components/deal-card.html');
  loadComponent('cart', 'components/cart.html');
  loadComponent('itemModalContainer', 'components/item-modal.html');

  // -----------------------------
  // Categories (Dynamic Tabs)
  // -----------------------------
  const categories = [
    { name: "Popular", count: 6, active: true },
    { name: "Appetizers", count: 2 },
    { name: "Burger", count: 1 },
    { name: "Pizza", count: 1 },
    { name: "Calazone", count: 2 },
    { name: "Premium Sides", count: 1 },
    { name: "Wraps", count: 2 },
    { name: "Salad", count: 3 },
    { name: "Ice Creams", count: 2 },
    { name: "Drinks", count: 1 }
  ];

  const categoryContainer = document.getElementById("menu-category");
  if (categoryContainer) {
    categories.forEach(cat => {
      const button = document.createElement("button");
      button.className = `category-tab flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full ${
        cat.active
          ? "bg-foodpanda-pink text-white border-b-2 border-foodpanda-pink"
          : "text-gray-700 hover:bg-gray-100"
      }`;
      button.setAttribute("data-category", cat.name.toLowerCase());
      button.innerText = `${cat.name} (${cat.count})`;
      categoryContainer.appendChild(button);
    });
  }

  // Active tab switching
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("category-tab")) {
      document.querySelectorAll(".category-tab").forEach(tab => {
        tab.classList.remove(
          "bg-foodpanda-pink",
          "text-white",
          "border-b-2",
          "border-foodpanda-pink"
        );
        tab.classList.add("text-gray-700", "hover:bg-gray-100");
      });
      e.target.classList.remove("text-gray-700", "hover:bg-gray-100");
      e.target.classList.add(
        "bg-foodpanda-pink",
        "text-white",
        "border-b-2",
        "border-foodpanda-pink"
      );
    }
  });

  // -----------------------------
  // Menu Items
  // -----------------------------
  fetch("components/menu-item.html")
    .then(res => res.text())
    .then(data => {
      const menuContainer = document.getElementById("menu-container");
      if (menuContainer) menuContainer.innerHTML = data;
    });

  // -----------------------------
  // Mobile Cart Toggle
  // -----------------------------
  document.addEventListener("click", (e) => {
    const mobileCartModal = document.getElementById("mobileCartModal");
    const backdrop = document.getElementById("mobileCartBackdrop");

    if (e.target.id === "mobileCartToggle" && mobileCartModal) {
      mobileCartModal.classList.remove("hidden");
    }

    if (
      e.target.id === "closeMobileCart" ||
      e.target === backdrop
    ) {
      mobileCartModal.classList.add("hidden");
    }
  });

  // -----------------------------
  // Item Modal (open/close example)
  // -----------------------------
  document.addEventListener("click", (e) => {
    const itemModal = document.getElementById("itemModal");

    if (e.target.classList.contains("openItemModal") && itemModal) {
      itemModal.classList.remove("hidden");
      // You can also populate modal content here
    }

    if (e.target.id === "closeModal" && itemModal) {
      itemModal.classList.add("hidden");
    }
  });
// Floating cart button scroll
const floatingCartBtn = document.getElementById("floatingCartButton");
if (floatingCartBtn) {
  floatingCartBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const cart = document.getElementById("cartSection");
    if (cart) {
      cart.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}


});
