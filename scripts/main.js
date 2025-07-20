import { renderHeader } from '../components/header/header.js';
import { renderSlider } from '../components/slider/slider.js';
import { renderFooter } from '../components/footer/footer.js';
import '/styles/main.scss';
import { renderProductCatalog } from '../components/product-catalog/product-catalog.js';


document.querySelector('.header-container').appendChild(renderHeader());
document.querySelector('.slider-container').appendChild(renderSlider());
document.body.appendChild(renderProductCatalog())
document.body.appendChild(renderFooter());
