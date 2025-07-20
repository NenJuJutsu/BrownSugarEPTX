import { cart, incrementItem, decrementItem, removeFromCart, emptyCart } from '../cart.js';

export function updateCartUI() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartTotalHeader = document.getElementById('cart-total-header');
  cartItems.innerHTML = '';

  let total = 0;
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    const li = document.createElement('li');
    li.innerHTML = `
    <div class="cart-info">
      <div class="cart-name">${item.name}</div>
      <div class="cart-meta">x${item.qty} - $${itemTotal.toFixed(2)}</div>
    </div>
    <div class="cart-actions">
      <button onclick="window.increment(${index})">+</button>
      <button onclick="window.decrement(${index})">-</button>
      <button onclick="window.remove(${index})">🗑️</button>
    </div>
  `;
    cartItems.appendChild(li);
  });

  if (cart.length > 0) {
    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Empty Cart';
    clearBtn.onclick = () => emptyCart();
    cartItems.appendChild(clearBtn);
  }

  if (cartTotal) cartTotal.textContent = total.toFixed(2);
  if (cartTotalHeader) cartTotalHeader.textContent = total.toFixed(2);
}

// Attach functions to window for onclick access
window.increment = incrementItem;
window.decrement = decrementItem;
window.remove = removeFromCart;