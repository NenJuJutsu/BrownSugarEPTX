import { updateCartUI } from './ui/cartUI.js';

export let cart = [];

export function loadCart() {
  const stored = localStorage.getItem('cart');
  if (stored) cart = JSON.parse(stored);
}

export function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(item) {
  const existing = cart.find(i => i.name === item.name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCartUI();
  saveCart();
}

export function incrementItem(index) {
  cart[index].qty++;
  updateCartUI();
  saveCart();
}

export function decrementItem(index) {
  if (cart[index].qty > 1) {
    cart[index].qty--;
  } else {
    removeFromCart(index);
    return;
  }
  updateCartUI();
  saveCart();
}

export function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
  saveCart();
}

export function emptyCart() {
  cart = [];
  updateCartUI();
  saveCart();
}