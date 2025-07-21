const CART_KEY = 'cart';

// Сохранить корзину ???
// export function saveCart(cart) {
//   localStorage.setItem(CART_KEY, JSON.stringify(cart));
// }

// Получить корзину
export function loadCart() {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

// Добавить товар в корзину
export function addToCart(product) {
  const cart = loadCart();
  cart.push(product);
  saveCart(cart);
}

// Удалить товар из корзины по id
export function removeFromCart(productId) {
  let cart = loadCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
}

// Очистить корзину
export function clearCart() {
  localStorage.removeItem(CART_KEY);
}