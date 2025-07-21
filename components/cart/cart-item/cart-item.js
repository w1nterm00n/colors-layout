export function renderCartItem(product) {
    const template = document.createElement('template');
  
    template.innerHTML = `
    <div class="cart-item">
        <div class="cart-item__image">
            <img src=${product.image} alt="Краска Wallquest, Brownstone MS90102">
        </div>
        <div class="cart-item__details">
            <p class="cart-item__title">${product.name}</p>
            <p class="cart-item__price">${product.price} ₽</p>
        </div>
        <div class="cart-item__controls">
            <button class="cart-item__button cart-item__button--minus">−</button>
            <span class="cart-item__quantity">${product.quantity}</span>
            <button class="cart-item__button cart-item__button--plus">+</button>
        </div>
        <button class="cart-item__remove"></button>
    </div>
    `.trim();
  
    return template.content.firstChild;
  }