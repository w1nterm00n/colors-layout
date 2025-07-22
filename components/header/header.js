export function renderHeader() {
    const template = document.createElement('template');
  
    template.innerHTML = `
      <header class="header">
        <div class="header__container">
  
          <div class="burger burger-menu__button">
                <span></span>
          </div>

          <div class="burger-menu">
            <div class="burger-menu__wrapper">
              <button class="burger-menu__close-btn" aria-label="Закрыть">×</button>

              <nav class="burger-menu__nav">
                <a href="#" class="burger-menu__link">Продукты</a>
                <a href="#" class="burger-menu__link">Цвета</a>
                <a href="#" class="burger-menu__link">Вдохновение</a>
                <a href="#" class="burger-menu__link">Советы</a>
                <a href="#" class="burger-menu__link">Найти магазин</a>
              </nav>

              <div class="burger-menu__contacts">
                <div class="burger-menu__phone">+7 (495) 221-77-69</div>
                <div class="burger-menu__callback">Заказать звонок</div>
              </div>

              <div class="burger-menu__icons">
                <button class="burger-menu__icon burger-menu__icon--search"></button>
                <button class="burger-menu__icon burger-menu__icon--user"></button>
                <button class="burger-menu__icon burger-menu__icon--favorite"></button>
              </div>

            </div>
          </div>


          <div class="header__logo">COLORS<span class="header__dot">•</span></div>
  
          <nav class="header__nav">
            <a href="#" class="header__link">Продукты</a>
            <a href="#" class="header__link">Цвета</a>
            <a href="#" class="header__link">Вдохновение</a>
            <a href="#" class="header__link">Советы</a>
            <a href="#" class="header__link">Найти магазин</a>
          </nav>
  
          <div class="header__contacts">
            <div class="header__phone">+7 (495) 221-77-69</div>
            <div class="header__callback">Заказать звонок</div>
          </div>
  
          <div class="header__icons">
            <button class="header__icon header__icon--search"></button>
            <button class="header__icon header__icon--user"></button>
            <button class="header__icon header__icon--favorite"></button>
            <button class="header__icon header__icon--card">
              <span class="header__cart-count">4</span>
            </button>
          </div>
  
        </div>
      </header>
    `.trim();
  
    return template.content.firstChild;
  }
  