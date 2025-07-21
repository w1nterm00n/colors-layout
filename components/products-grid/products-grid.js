import { renderProductCardSingle } from "../product-card-single/product-card-single";

export function renderProductsGrid(products) {
    const container = document.createElement('div');
    container.classList.add('products-grid');

    products.forEach(product => {
        const card = renderProductCardSingle(product);
        container.appendChild(card);
    });

    return container;
  }