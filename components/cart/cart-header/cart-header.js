import { clearCart } from "../../../utils/storage";

export function renderCartHeader(amountOfItems) {
    const template = document.createElement('template');    
    function getProductWord(amount) {
        if (amount % 10 === 1 && amount % 100 !== 11) {
          return 'товар';
        } else if ([2, 3, 4].includes(amount % 10) && ![12, 13, 14].includes(amount % 100)) {
          return 'товара';
        } else {
          return 'товаров';
        }
    }
    let word = getProductWord(amountOfItems);
    
    template.innerHTML = `
    <div class="cart-header">
        <div class="cart-header__top">
            <h2 class="cart-header__title">Корзина</h2>
            <button class="cart-header__close-btn" aria-label="Закрыть">×</button>
        </div>
        <div class="cart-header__bottom">
            <span class="cart-header__count">${amountOfItems} ${word}</span>
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