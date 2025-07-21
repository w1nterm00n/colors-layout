import { renderCartCheckout } from "./cart-checkout/cart-checkout";
import { renderCartHeader } from "./cart-header/cart-header";
import { renderCartItem } from "./cart-item/cart-item";

export function renderCart() {
    const container = document.createElement('div');
    container.classList.add('cart-container');
    

    const cartHeader = renderCartHeader()
    const cartCheckout = renderCartCheckout()

    container.appendChild(cartHeader);

    //рендерим товары из local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(product => {
        const cartItem = renderCartItem(product);
        container.appendChild(cartItem);
    });
    //рендерим товары из local storage

    container.appendChild(cartCheckout);

    return container;
  }