import { menuItems } from './data.js';
import { addToCart } from './cart.js';

export function setupCartButton() {
  const cartButton = document.getElementById('cart-button');
  const panel = document.getElementById('cart-panel');

  if (cartButton && panel) {
    cartButton.addEventListener('click', () => {
      panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
  }
}

export function setupAddToCart() {
  document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-btn')) {
      const index = parseInt(e.target.getAttribute('data-index'));
      const item = menuItems[index];
      addToCart(item);
    }
  });
}
