import { renderCart } from "../components/cart/cart";

const CART_KEY = 'cart';

// Сохранить корзину ???
// export function saveCart(cart) {
//   localStorage.setItem(CART_KEY, JSON.stringify(cart));
// }

// Обновить корзину в DOM
function updateCartInDOM() {
  const oldCart = document.querySelector('.cart-container');
  const newCart = renderCart();

  if (oldCart && newCart) {
      oldCart.replaceWith(newCart);
  }
}


// Получить корзину
export function loadCart() {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

// Добавить товар в корзину
export function addToCart(product) {
    console.log("add to cart: ", product);
    const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            image: product.image,
            name: product.name || product.title,
            price: product.price,
            quantity: 1
        });
    }

    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    console.log('localStorage cart:', localStorage.getItem(CART_KEY));

    updateCartInDOM();
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