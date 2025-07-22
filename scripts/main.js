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
    
        const oldCart = document.querySelector('.cart-container');
        const newCart = renderCart();
    
        if (oldCart) {
            oldCart.replaceWith(newCart);
        } else {
            document.body.appendChild(newCart);
        }
    
        newCart.classList.add('active');
        document.body.style.overflow = 'hidden';
    
        // Привязать обработчик закрытия к новой корзине
        const closeButton = newCart.querySelector('.cart-header__close-btn');
        closeButton.addEventListener('click', () => {
            overlay.classList.remove('active');
            newCart.classList.remove('active');
            document.body.style.overflow = '';
        });
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


// Обработка открытия / закрытия меню фильтров
let showFiltersButton = document.querySelector('.filtration-menu-button');
let filtersMenu = document.querySelector('.sidebar-filters');
    // Открытие
    showFiltersButton.addEventListener('click', () => {
        filtersMenu.classList.remove('sidebar-filters-hidden');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    // Закрытие по клику вне окна
    document.addEventListener('click', (event) => {
        if (
            !filtersMenu.contains(event.target) &&
            !showFiltersButton.contains(event.target) &&
            !filtersMenu.classList.contains('sidebar-filters-hidden')
        ) {
            filtersMenu.classList.add('sidebar-filters-hidden');
            if (overlay.classList.contains('active')) {
                overlay.classList.remove('active');
            }
            document.body.style.overflow = '';
        }
    });    
// Обработка открытия / закрытия меню фильтров