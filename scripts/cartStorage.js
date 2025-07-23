import { cart } from './cart.js';
import { updateCartUI } from './ui/cartUI.js';

export function saveCartToStorage() {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (err) {
        console.error("Error saving cart:", err);
    }
}

export function loadCartFromStorage() {
    const saved = localStorage.getItem('cart');
    if (saved) {
        cart.length = 0;
        JSON.parse(saved).forEach(item => cart.push(item));
    }
    updateCartUI();
}
