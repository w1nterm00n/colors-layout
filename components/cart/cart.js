import { renderCartCheckout } from "./cart-checkout/cart-checkout";
import { renderCartHeader } from "./cart-header/cart-header";
import { renderCartItem } from "./cart-item/cart-item";

export function renderCart() {
    const container = document.createElement('div');
    container.classList.add('cart-container');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    //в cart header передаю кол-во товаров
    let amountOfItems = 0;
    if (cart.length > 0) {
        cart.forEach(e => {
            amountOfItems += e.quantity * 1;
        });
    }
    const cartHeader = renderCartHeader(amountOfItems);
    container.appendChild(cartHeader);


    //рендерим товары из local storage
    if (cart) {
        cart.forEach(product => {
            const cartItem = renderCartItem(product);
            container.appendChild(cartItem);
        });   
    }


    //в cart checkout передаю цену
    let totalPrice = 0;
    if (cart.length > 0) {
        cart.forEach(e => {
            totalPrice += e.quantity * e.price;
        });
    }
    const cartCheckout = renderCartCheckout(totalPrice);
    container.appendChild(cartCheckout);


    return container;
  }