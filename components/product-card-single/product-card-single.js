export function renderProductCardSingle() {
    const template = document.createElement('template');
  
    template.innerHTML = `
        <div class="product-card">
            <div class="product-card__image">
                <img src="/assets/images/grid-item-photo.png" alt="Краска Wallquest, Brownstone MS90102">
            </div>

            <div class="product-card__info">
                <div class="product-card__title">
                    Краска Wallquest, Brownstone MS90102
                </div>

                <div class="product-card__purchase">
                    <div class="product-card__price">
                        6000 <span class="product-card__currency">₽</span>
                    </div>

                    <button class="product-card__button">
                        <span class="product-card__button-icon">+</span>
                    </button>
                </div>

            </div>
        </div>
    `.trim();
  
    return template.content.firstChild;
  }