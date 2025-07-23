import { getProducts, setProducts } from "../../utils/storage";
import { renderProductsGrid } from "../products-grid/products-grid";

export function renderSortMenu() {
    const template = document.createElement('template');

    template.innerHTML = `
        <div class="dropdown">
            <div class="select">
                <span class="selected">Сначала дорогие</span>
                <div class="caret"></div>
            </div>
            <ul class="menu">
                <li data-sort="cheap">Сначала недорогие</li>
                <li data-sort="popular">Сначала популярные</li>
                <li data-sort="new">Сначала новые</li>
                <li class="active" data-sort="expensive">Сначала дорогие</li>
            </ul>
        </div>
    `.trim();

    const dropdown = template.content.firstChild;

    // "Оживляем" сразу внутри компонента:
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');
    const overlay = document.querySelector('.overlay');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
        if (menu.classList.contains('menu-open')) {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            const value = option.innerText;
            const sortType = option.dataset.sort;

            // Логика для нужных сортировок
            if (sortType === 'cheap' || sortType === 'expensive') {
                const products = getProducts();
                const sorted = [...products].sort((a, b) => {
                    if (sortType === 'cheap') return a.price - b.price;
                    if (sortType === 'expensive') return b.price - a.price;
                });
                setProducts(sorted);
                //перерендеринг карточек
                const oldGrid = document.querySelector('.products-grid');
                const newGrid = renderProductsGrid(sorted);
                oldGrid.replaceWith(newGrid);
            }
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
            
            options.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });

    return dropdown;
}
