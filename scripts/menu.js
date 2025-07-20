import { menuItems, weeklySpecials } from './data.js';
import { addToCart } from './cart.js';

export function renderMenu() {
  const menuContainer = document.getElementById('menu-container');
  menuContainer.innerHTML = '';
  menuItems.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>$${item.price.toFixed(2)}</p>
      <button data-index="${index}" class="add-btn">Add to Cart</button>
    `;
    menuContainer.appendChild(div);
  });
}

export function renderSpecials() {
  const specialsContainer = document.getElementById('specials-container');
  specialsContainer.innerHTML = '';
  weeklySpecials.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'special-item';
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Special Price: $${item.price.toFixed(2)}</p>
    `;
    specialsContainer.appendChild(div);
  });
}