// ============ Bulakluv — Shared JS ============

// Inject header + footer markup so each page stays clean
const HEADER_HTML = `
<header class="site-header">
  <div class="site-header__bar">
    <nav class="site-header__nav left">
      <button type="button" class="nav-link" data-search-toggle aria-controls="site-search">Search</button>
      <a href="account.html" class="nav-link">Account</a>
      <a href="faqs.html" class="nav-link">FAQs</a>
    </nav>
    <div class="site-header__logo-wrap">
      <a href="index.html" class="logo-mark">bulakluv</a>
    </div>
    <nav class="site-header__nav right">
      <a href="index.html#shop" class="nav-link">Shop</a>
      <a href="index.html#services" class="nav-link">Services</a>
      <a href="index.html#about" class="nav-link">About</a>
      <a href="index.html#visit" class="nav-link">Visit</a>
      <a href="basket.html" class="nav-link basket-btn">
        <span>My</span><span>Basket</span><span class="count">0</span>
      </a>
    </nav>
    <button type="button" class="nav-link mobile-toggle" data-search-toggle>Search</button>
  </div>
  <div id="site-search" class="search-panel" aria-hidden="true">
    <div class="search-panel__inner">
      <p class="eyebrow">Lead The Way To</p>
      <form class="search-form" onsubmit="event.preventDefault();">
        <input type="search" placeholder="Search" />
        <button type="submit" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="7"></circle>
            <path d="m20 20-3.5-3.5"></path>
          </svg>
        </button>
      </form>
    </div>
  </div>
</header>`;

const FOOTER_HTML = `
<footer id="visit" class="site-footer">
  <div class="footer-grid">
    <div>
      <span class="eyebrow">Shop</span>
      <ul>
        <li><a href="#">All</a></li><li><a href="#">Arrangements</a></li>
        <li><a href="#">Hand-Tied Wraps</a></li><li><a href="#">Plants</a></li>
        <li><a href="#">Gifts</a></li><li><a href="#">Bespoke</a></li><li><a href="#">Merch</a></li>
      </ul>
    </div>
    <div>
      <span class="eyebrow">About</span>
      <ul>
        <li><a href="#">Where We Deliver</a></li><li><a href="#">Our Services</a></li>
        <li><a href="#">Weddings &amp; Events</a></li><li><a href="#">Our Story</a></li>
        <li><a href="faqs.html">FAQs</a></li><li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="visit">
      <span class="eyebrow">Visit</span>
      <p>Shop</p>
      <p>3918 Sunset Blvd<br>Baguio City, 2600</p>
      <p>Mon–Sat: 10am–6pm<br>Sun: 10am–4pm</p>
      <p>323-953-2910</p>
    </div>
    <div>
      <span class="eyebrow">Follow</span>
      <ul><li><a href="#">Instagram</a></li><li><a href="#">Facebook</a></li></ul>
    </div>
    <div>
      <span class="eyebrow">Newsletter</span>
      <form class="newsletter-form" onsubmit="event.preventDefault();">
        <input type="email" placeholder="Email Address" />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-bottom__brand"><span class="logo-mark">bulakluv</span></div>
    <div class="footer-bottom__center">
      <p class="eyebrow">"Every saint has a past and every sinner has a future" — Oscar Wilde</p>
      <div class="quote-row">
        <a href="#" class="nav-link">Policies</a>
        <span class="nav-link">© Bulakluv 2026 — All Rights Reserved</span>
      </div>
    </div>
    <div class="footer-bottom__credit"><span class="eyebrow">Site<br>Credit</span></div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const headerSlot = document.getElementById('header-slot');
  const footerSlot = document.getElementById('footer-slot');
  if (headerSlot) headerSlot.innerHTML = HEADER_HTML;
  if (footerSlot) footerSlot.innerHTML = FOOTER_HTML;

  // Search toggle
  const panel = document.getElementById('site-search');
  document.querySelectorAll('[data-search-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const open = panel.classList.toggle('open');
      panel.setAttribute('aria-hidden', String(!open));
      if (open) panel.querySelector('input')?.focus();
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel?.classList.contains('open')) {
      panel.classList.remove('open');
      panel.setAttribute('aria-hidden', 'true');
    }
  });
});
