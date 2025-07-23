import { cart } from './cart.js';
import { updateCartUI } from './ui/cartUI.js';

export function saveCartToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function loadCartFromStorage() {
  const saved = localStorage.getItem('cart');
  if (saved) {
    cart.length = 0;
    JSON.parse(saved).forEach(item => cart.push(item));
  }
  updateCartUI();
}
