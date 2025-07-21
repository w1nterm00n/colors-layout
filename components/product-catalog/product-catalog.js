import { renderProductsGrid } from "../products-grid/products-grid";
import { renderSidebarFilters } from "../sidebar-filters/sidebar-filters";
import { renderSortMenu } from "../sort-menu/sort-menu";


async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  console.log(products);
  return products;
}


export async function renderProductCatalog() {
    const container = document.createElement('div');
    container.classList.add('catalog-container');

    const rightContainer = document.createElement('div');
    rightContainer.classList.add('catalog-container--right');

    const leftContainer = document.createElement('div');
    leftContainer.classList.add('catalog-container--left');

    const products = await fetchProducts();
    const grid = renderProductsGrid(products);
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
    productsCount.textContent = '20 товаров';

    rightContainerHeader.appendChild(productsCount);
  
    return container;
  }