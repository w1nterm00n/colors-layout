import { renderHeader } from '../components/header/header.js';
import { renderSlider } from '../components/slider/slider.js';
import { renderFooter } from '../components/footer/footer.js';
import '/styles/main.scss';
import { renderProductCatalog } from '../components/product-catalog/product-catalog.js';
import { renderCart } from '../components/cart/cart.js';


const header = renderHeader();
const cart = renderCart();
document.querySelector('.header-container').appendChild(header);
document.querySelector('.slider-container').appendChild(renderSlider());
const catalog = await renderProductCatalog();
document.body.appendChild(catalog);
document.body.appendChild(cart)
document.body.appendChild(renderFooter());
const overlay = document.querySelector('.overlay');

// Обработка открытия / закрытия корзины
const cartButton = header.querySelector('.header__icon--card');
cartButton.addEventListener('click', () => {
    overlay.classList.add('active');
    cart.classList.toggle('active');
    document.body.style.overflow = 'hidden';
});

const closeButton = cart.querySelector('.cart-header__close-btn');
closeButton.addEventListener('click', () => {
    overlay.classList.remove('active');
    cart.classList.remove('active');
    document.body.style.overflow = '';
});
// Обработка открытия / закрытия корзины




