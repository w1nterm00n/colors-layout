import { renderHeader } from '../components/header/header.js';
import { renderSlider } from '../components/slider/slider.js';
import { renderFooter } from '../components/footer/footer.js';
import { renderSidebarFilters } from '../components/sidebar-filters/sidebar-filters.js';
import '/styles/main.scss';
import { renderProductCardSingle } from '../components/product-card-single/product-card-single.js';


document.querySelector('.header-container').appendChild(renderHeader());
document.body.appendChild(renderSidebarFilters());
document.querySelector('.slider-container').appendChild(renderSlider());
document.body.appendChild(renderProductCardSingle())
document.body.appendChild(renderFooter());
