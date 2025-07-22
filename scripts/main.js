import { renderHeader } from '../components/header/header.js';
import { renderSlider } from '../components/slider/slider.js';
import { renderFooter } from '../components/footer/footer.js';
import '/styles/main.scss';
import { renderProductCatalog } from '../components/product-catalog/product-catalog.js';
import { renderCart } from '../components/cart/cart.js';
import { initSlider } from '../components/slider/sliderLogic.js';


const header = renderHeader();
const cart = renderCart();
document.querySelector('.header-container').appendChild(header);

//слайдер
const slider = renderSlider();
document.body.appendChild(slider);
initSlider(slider);
//слайдер

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


// Обработка открытия / закрытия бургерного меню
let closeBurgerButton = document.querySelector('.burger-menu__close-btn');
const burgerMenu = document.querySelector('.burger-menu');
const burgerButton = header.querySelector('.burger-menu__button');
burgerButton.addEventListener('click', () => {
    burgerMenu.classList.add('burger-menu-active');
});

if (closeBurgerButton) {
    closeBurgerButton.addEventListener('click', () => {
        console.log("123");
        burgerMenu.classList.remove('burger-menu-active');
    });
}
// Обработка открытия / закрытия бургерного меню
