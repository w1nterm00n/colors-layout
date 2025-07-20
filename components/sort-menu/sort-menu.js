export function renderSortMenu() {
    const template = document.createElement('template');

    template.innerHTML = `
        <div class="dropdown">
            <div class="select">
                <span class="selected">Сначала дорогие</span>
                <div class="caret"></div>
            </div>
            <ul class="menu">
                <li>Сначала недорогие</li>
                <li>Сначала популярные</li>
                <li>Сначала новые</li>
                <li class="active">Сначала дорогие</li>
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

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });

    return dropdown;
}
