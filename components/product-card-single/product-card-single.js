import { addToCart } from '../../utils/storage.js';
import { renderCart } from '../cart/cart.js';

export function renderProductCardSingle(product) {
    const template = document.createElement('template');
  
    template.innerHTML = `
        <div class="product-card">
            <div class="product-card__image">
                <img src="${product.image}" alt="${product.title}">
            </div>

            <div class="product-card__info">
            <div class="product-card__title">
                ${product.title.length > 40 ? product.title.slice(0, 40) + '...' : product.title}
            </div>

                <div class="product-card__purchase">
                    <div class="product-card__price">
                        ${product.price} <span class="product-card__currency">₽</span>
                    </div>

                    <button class="product-card__button">
                        <span class="product-card__button-icon">+</span>
                    </button>
                </div>

            </div>
        </div>
    `.trim();
    const productCard = template.content.firstChild;

    const button = productCard.querySelector('.product-card__button');
    button.addEventListener('click', () => {
        addToCart(product);
        renderCart();
    });

    return template.content.firstChild;
  }