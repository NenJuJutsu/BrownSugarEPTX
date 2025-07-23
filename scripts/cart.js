export const cart = [];

export function addToCart(item) {
  const existing = cart.find(i => i.name === item.name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }
}

export function incrementItem(index) {
  cart[index].qty++;
}

export function decrementItem(index) {
  if (cart[index].qty > 1) {
    cart[index].qty--;
  } else {
    cart.splice(index, 1);
  }
}

export function removeFromCart(index) {
  cart.splice(index, 1);
}

export function emptyCart() {
  cart.length = 0;
}