import { getProducts } from "../../utils/storage";

export function renderSidebarFilters() {
    const template = document.createElement('template');
  
    let products = getProducts();
    let categories = new Set();
    products.forEach(e => {
        categories.add(e.category)
    });

    // Генерация HTML-фильтров на основе категорий
    let categoryFiltersHTML = '';
    categories.forEach(category => {
        categoryFiltersHTML += `
            <div class="sidebar-filters__toggle-wrapper">
                <label class="sidebar-filters__toggle">
                    <input type="checkbox">
                    <span class="sidebar-filters__switcher"></span>
                </label>
                <p class="sidebar-filters__label">${category}</p>
            </div>
        `;
    });

    template.innerHTML = `
        <div class="sidebar-filters sidebar-filters-hidden">
            ${categoryFiltersHTML}
        </div>
    `.trim();
  
    return template.content.firstChild;
  }