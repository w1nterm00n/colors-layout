import { renderProductsGrid } from "../products-grid/products-grid";
import { renderSidebarFilters } from "../sidebar-filters/sidebar-filters";
import { renderSortMenu } from "../sort-menu/sort-menu";


export function renderProductCatalog() {
    const container = document.createElement('div');
    container.classList.add('catalog-container');

    const rightContainer = document.createElement('div');
    rightContainer.classList.add('catalog-container--right');

    const leftContainer = document.createElement('div');
    leftContainer.classList.add('catalog-container--left');

    const grid = renderProductsGrid();
    const sidebarFilters = renderSidebarFilters();

    leftContainer.appendChild(sidebarFilters);
    rightContainer.appendChild(grid);
    container.appendChild(rightContainer);
    container.appendChild(leftContainer);

    const rightContainerHeader = document.createElement('div');
    rightContainerHeader.classList.add('catalog-container--right-header');
    rightContainer.appendChild(rightContainerHeader);

    const sortMenu = renderSortMenu();
    rightContainerHeader.appendChild(sortMenu);


    const productsCount = document.createElement('div');
    productsCount.classList.add('products-count');
    productsCount.textContent = '412 товаров';

    rightContainerHeader.appendChild(productsCount);
    
    // container.appendChild(productsCount);

    // const grid = renderProductsGrid();
    // const sidebarFilters = renderSidebarFilters();
    // const sortMenu = renderSortMenu();

    // container.appendChild(sortMenu);
    // container.appendChild(sidebarFilters);
    // container.appendChild(grid);

    return container;
  }