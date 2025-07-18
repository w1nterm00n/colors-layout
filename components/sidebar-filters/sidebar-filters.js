export function renderSidebarFilters() {
    const template = document.createElement('template');
  
    template.innerHTML = `
        <div class="sidebar-filters">
            <div class="sidebar-filters__toggle-wrapper">
                <label class="sidebar-filters__toggle">
                    <input type="checkbox">
                    <span class="sidebar-filters__switcher"></span>
                </label>
                <p class="sidebar-filters__label">Новинки</p>
            </div>

            <div class="sidebar-filters__toggle-wrapper">
                <label class="sidebar-filters__toggle">
                    <input type="checkbox">
                    <span class="sidebar-filters__switcher"></span>
                </label>
                <p class="sidebar-filters__label">Есть в наличии</p>
            </div>
            
            <div class="sidebar-filters__toggle-wrapper">
                <label class="sidebar-filters__toggle">
                    <input type="checkbox">
                    <span class="sidebar-filters__switcher"></span>
                </label>
                <p class="sidebar-filters__label">Контрактные</p>
            </div>

            <div class="sidebar-filters__toggle-wrapper">
                <label class="sidebar-filters__toggle">
                    <input type="checkbox">
                    <span class="sidebar-filters__switcher"></span>
                </label>
                <p class="sidebar-filters__label">Эксклюзивные</p>
            </div>


            <div class="sidebar-filters__toggle-wrapper">
                <label class="sidebar-filters__toggle">
                    <input type="checkbox">
                    <span class="sidebar-filters__switcher"></span>
                </label>
                <p class="sidebar-filters__label">Распродажа</p>
            </div>
        </div>
    `.trim();
  
    return template.content.firstChild;
  }