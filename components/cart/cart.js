import { renderCartCheckout } from "./cart-checkout/cart-checkout";
import { renderCartHeader } from "./cart-header/cart-header";
import { renderCartItem } from "./cart-item/cart-item";

export function renderCart() {
    const container = document.createElement('div');
    container.classList.add('cart-container');
    

    const cartHeader = renderCartHeader()
    const cartCheckout = renderCartCheckout()

    container.appendChild(cartHeader);

    for (let i = 0; i < 3; i++) {
        const cartItem = renderCartItem();
        container.appendChild(cartItem);
    }
  
    container.appendChild(cartCheckout);

    return container;
  }