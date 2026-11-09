const products = [
  { title: 'Ruby Crest Bridal Lehenga', category: 'Bridal', originalPrice: 285000, salePrice: 213750, image: 'assets/images/web/Ruby Crest Bridal Lehenga.jpg' },
  { title: 'Royal Emerald Zardozi Gharara', category: 'Bridal', originalPrice: 240000, salePrice: 180000, image: 'assets/images/web/Royal Emerald Zardozi Gharara.jpg' },
  { title: 'Ivory Nikkah Poshak', category: 'Bridal', originalPrice: 195000, salePrice: 146250, image: 'assets/images/web/Ivory Nikkah Poshak.jpg' },
  { title: 'Crimson Heritage Peshwas', category: 'Festive', originalPrice: 210000, salePrice: 157500, image: 'assets/images/web/Crimson Heritage Peshwas.jpg' },
  { title: 'Golden Amber Velvet Shalwar Kameez', category: 'Festive', originalPrice: 145000, salePrice: 108750, image: 'assets/images/web/Golden Amber Velvet Shalwar Kameez.jpg' },
  { title: 'Blush Pink Walima Maxi', category: 'Bridal', originalPrice: 225000, salePrice: 168750, image: 'assets/images/web/Blush Pink Walima Maxi.jpg' },
  { title: 'Midnight Blue Organza Formals', category: 'Formal', originalPrice: 95000, salePrice: 71250, image: 'assets/images/web/Midnight Blue Organza Formals.jpg' },
  { title: 'Antique Peach Embellished Sharara', category: 'Festive', originalPrice: 130000, salePrice: 97500, image: 'assets/images/web/Antique Peach Embellished Sharara.jpg' },
  { title: 'Royal Jamawar Kurta Set', category: 'Formal', originalPrice: 85000, salePrice: 63750, image: 'assets/images/web/Royal Jamawar Kurta Set.jpg' },
  { title: 'Mint Green Chikankari Suit', category: 'Festive', originalPrice: 65000, salePrice: 48750, image: 'assets/images/web/Mint Green Chikankari Suit.jpg' },
  { title: 'Maroon Regal Bridal Sari', category: 'Bridal', originalPrice: 260000, salePrice: 195000, image: 'assets/images/web/Maroon Regal Bridal Sari.jpg' },
  { title: 'Teal Blue Gota Kinari Poshak', category: 'Formal', originalPrice: 115000, salePrice: 86250, image: 'assets/images/web/Teal Blue Gota Kinari Poshak.jpg' },
  { title: 'Coral Peach Net Pishwas', category: 'Festive', originalPrice: 140000, salePrice: 105000, image: 'assets/images/web/Coral Peach Net Pishwas.jpg' },
  { title: 'Champagne Gold Heavy Dupatta Suit', category: 'Formal', originalPrice: 160000, salePrice: 120000, image: 'assets/images/web/Champagne Gold Heavy Dupatta Suit.jpg' },
  { title: 'Rust Orange Traditional Farshi Lehenga', category: 'Bridal', originalPrice: 290000, salePrice: 217500, image: 'assets/images/web/Rust Orange Traditional Farshi Lehenga.jpg' },
  { title: 'Lilac Pastels Luxury Organza', category: 'Formal', originalPrice: 90000, salePrice: 67500, image: 'assets/images/web/Lilac Pastels Luxury Organza.jpg' },
  { title: 'Burnt Sienna Handwoven Kurti', category: 'Festive', originalPrice: 55000, salePrice: 41250, image: 'assets/images/web/Burnt Sienna Handwoven Kurti.jpg' },
  { title: 'Plum Velvet Winter Shawl Suit', category: 'Festive', originalPrice: 105000, salePrice: 78750, image: 'assets/images/web/Plum Velvet Winter Shawl Suit.jpg' },
  { title: 'Sunlit Yellow Mayoon Ensemble', category: 'Bridal', originalPrice: 120000, salePrice: 90000, image: 'assets/images/web/Sunlit Yellow Mayoon Ensemble.jpg' },
  { title: 'Pearl White Reception Gown', category: 'Bridal', originalPrice: 230000, salePrice: 172500, image: 'assets/images/web/Pearl White Reception Gown.jpg' }
];

const formatCurrency = (value) => `PKR ${value.toLocaleString('en-PK')}`;

const renderProducts = (filter = 'all') => {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const page = document.body.dataset.page;
  const limit = Number(grid.dataset.limit) || products.length;
  let visibleProducts = products;

  if (page === 'bridal') visibleProducts = visibleProducts.filter((product) => product.category === 'Bridal');
  if (filter !== 'all') visibleProducts = visibleProducts.filter((product) => product.category === filter);
  visibleProducts = visibleProducts.slice(0, limit);

  grid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card">
      <a class="product-image" href="${product.image}" data-lightbox="collection" title="${product.title}" aria-label="View ${product.title}">
        <img src="${product.image}" alt="${product.title} — Pakistani traditional wear" loading="lazy">
        <span class="discount-tag">25% inauguration offer</span>
      </a>
      <div class="product-info">
        <p class="product-category">${product.category} · Hand-finished</p>
        <h3 class="product-title">${product.title}</h3>
        <div class="product-prices"><span class="product-old">${formatCurrency(product.originalPrice)}</span><span class="product-sale">${formatCurrency(product.salePrice)}</span></div>
        <button class="add-button" type="button" aria-label="Add ${product.title} to your bag">Add to bag</button>
      </div>
    </article>
  `).join('');

  const count = document.getElementById('catalogCount');
  if (count) count.textContent = `Showing ${visibleProducts.length} ${visibleProducts.length === 1 ? 'design' : 'designs'}`;

  grid.querySelectorAll('.add-button').forEach((button) => {
    button.addEventListener('click', () => {
      button.textContent = 'Added to your bag';
      button.classList.add('added');
      button.setAttribute('aria-pressed', 'true');
    });
  });
};

const initializeNavigation = () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    toggle.textContent = isOpen ? '×' : '☰';
  });
};

const initializeMotion = () => {
  if (window.Swiper && document.querySelector('.hero-swiper')) {
    new window.Swiper('.hero-swiper', {
      effect: 'fade',
      loop: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  }

  if (window.AOS) {
    window.AOS.init({
      duration: 750,
      once: true,
      offset: 35,
      easing: 'ease-out-cubic'
    });
  }

  if (window.lightbox) {
    window.lightbox.option({
      resizeDuration: 200,
      wrapAround: true,
      albumLabel: 'Image %1 of %2'
    });
  }
};

const initializeFilters = () => {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      renderProducts(button.dataset.filter);
    });
  });

  const requestedCategory = new URLSearchParams(window.location.search).get('category');
  if (requestedCategory && ['Bridal', 'Formal', 'Festive'].includes(requestedCategory)) {
    const matchingButton = document.querySelector(`.filter-btn[data-filter="${requestedCategory}"]`);
    if (matchingButton) {
      document.querySelectorAll('.filter-btn').forEach((item) => item.classList.remove('active'));
      matchingButton.classList.add('active');
      renderProducts(requestedCategory);
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initializeNavigation();
  initializeFilters();
  initializeMotion();

  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
});
