import { renderProductCardSingle } from "../product-card-single/product-card-single";

export function renderProductsGrid() {
    const container = document.createElement('div');
    container.classList.add('products-grid');

    const totalCards = 15;

    for (let i = 0; i < totalCards; i++) {
        const card = renderProductCardSingle();
        container.appendChild(card);
    }

    return container;
  }