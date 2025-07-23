import { filterAndRenderByCategories, getProducts } from "../../utils/storage";

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
                    <input type="checkbox" data-category="${category}">
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
  
    const sidebar = template.content.firstChild;
    sidebar.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const selectedCategories = Array.from(
                sidebar.querySelectorAll('input[type="checkbox"]:checked')
            ).map(cb => cb.dataset.category);
    
            filterAndRenderByCategories(selectedCategories);
        });
    });
    

    return template.content.firstChild;
  }