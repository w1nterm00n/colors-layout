import { clearCart } from "../../../utils/storage";

export function renderCartHeader() {
    const template = document.createElement('template');
  
    template.innerHTML = `
    <div class="cart-header">
        <div class="cart-header__top">
            <h2 class="cart-header__title">Корзина</h2>
            <button class="cart-header__close-btn" aria-label="Закрыть">×</button>
        </div>
        <div class="cart-header__bottom">
            <span class="cart-header__count">4 товара</span>
            <button class="cart-header__clear-btn">очистить список</button>
        </div>
    </div>
    `.trim();
  
    const cartHeading = template.content.firstChild;

    const button = cartHeading.querySelector('.cart-header__clear-btn');
    button.addEventListener('click', () => {
        clearCart();
    });

    return template.content.firstChild;
  }