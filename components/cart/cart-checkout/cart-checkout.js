export function renderCartCheckout(totalPrice) {
    const template = document.createElement('template');
  
    template.innerHTML = `
        <div class="cart-checkout">
        <div class="cart-checkout__summary">
            <span class="cart-checkout__label">Итого</span>
            <span class="cart-checkout__price">${totalPrice}<span class="cart-checkout__currency">₽</span></span>
        </div>
        <button class="cart-checkout__button">
            Оформить заказ
        </button>
        </div>
    `.trim();
  
    return template.content.firstChild;
  }