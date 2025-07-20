import { renderMenu, renderSpecials } from './menu.js';
import { setupDropdowns } from './dropdown.js';
import { loadCart } from './cart.js';
import { setupAddToCart, setupCartButton } from './events.js';

async function loadPartial(id, file, append = true) {
  const container = document.getElementById(id);
  try {
    const res = await fetch(file);
    const html = await res.text();
    container.innerHTML = append ? container.innerHTML + html : html;
  } catch (error) {
    console.error(`Error loading ${file}:`, error);
    container.innerHTML = `<p style="color:red;">Failed to load ${file}</p>`;
  }
}

window.onload = async function () {
  await loadPartial('header', 'partials/header.html');
  await loadPartial('cart-section', 'partials/cart.html', false);
  await loadPartial('specials-section', 'partials/specials.html', false);
  await loadPartial('menu-section', 'partials/menu.html', false);

  loadCart();
  renderMenu();
  renderSpecials();
  setupDropdowns();
  setupAddToCart();
  setupCartButton();
};
