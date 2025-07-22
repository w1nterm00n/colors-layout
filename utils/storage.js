import { renderCart } from "../components/cart/cart";

const CART_KEY = 'cart';

// Сохранить корзину ???
// export function saveCart(cart) {
//   localStorage.setItem(CART_KEY, JSON.stringify(cart));
// }


export function rerenderCart() {
  const oldCart = document.querySelector('.cart-container');
  const newCart = renderCart();

  if (oldCart && newCart) {
    const isActive = oldCart.classList.contains('active');
    const overlay = document.querySelector('.overlay');
    oldCart.replaceWith(newCart);

    if (isActive) {
      newCart.classList.add('active');
    }
    const closeButton = newCart.querySelector('.cart-header__close-btn');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        overlay.classList.remove('active');
        newCart.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
  }
}



// Получить корзину
export function loadCart() {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

// Добавить товар в корзину
export function addToCart(product) {
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

    rerenderCart();

}


// Удалить товар из корзины по id
export function removeFromCart(productId) {
  console.log("remove from cart: ", productId);
  let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
  cart = cart.filter(item => item.id !== productId);
  
  localStorage.setItem(CART_KEY, JSON.stringify(cart));

  rerenderCart();

}

// Очистить корзину
export function clearCart() {
  localStorage.removeItem(CART_KEY);
}