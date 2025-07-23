import { renderCart } from "../components/cart/cart";
import { renderProductsGrid } from "../components/products-grid/products-grid";

const CART_KEY = 'cart';


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

//обновить отображаемое кол-во товаров в корзине
export function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCountElement = document.querySelector('.header__cart-count');

  if (cartCountElement) {
      cartCountElement.textContent = cart.length;
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
    updateCartCount();
}

// Удалить товар из корзины по id
export function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
  cart = cart.filter(item => item.id !== productId);
  
  localStorage.setItem(CART_KEY, JSON.stringify(cart));

  rerenderCart();
  updateCartCount();
}

// Очистить корзину
export function clearCart() {
  let cart = [];
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  rerenderCart();
  updateCartCount();
}

// Сделать +1 элемент в корзину
export function plusOneToCart(productId) {
  const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
  const existingProduct = cart.find(item => item.id === productId);
  existingProduct.quantity += 1;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  rerenderCart();
  updateCartCount();
}

// Сделать -1 элемент в корзину
export function minusOneToCart(productId) {
  const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
  const existingProduct = cart.find(item => item.id === productId);
  existingProduct.quantity -= 1;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  rerenderCart();
  updateCartCount();
}

// storage.js

// Получение продуктов из API
let productsCache = [];

export async function fetchProducts() {
  if (productsCache.length > 0) return productsCache;

  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  productsCache = products;
  return products;
}

export function getProducts() {
  return [...productsCache]; // Возвращаем копию
}

export function setProducts(newProducts) {
  productsCache = newProducts;
}

// фильтрация товаров по категориям
export function filterAndRenderByCategories(selectedCategories) {
  const allProducts = getProducts();

  const filtered = selectedCategories.length
      ? allProducts.filter(product => selectedCategories.includes(product.category))
      : allProducts;

  const oldGrid = document.querySelector('.products-grid');
  const newGrid = renderProductsGrid(filtered);
  oldGrid.replaceWith(newGrid);
}