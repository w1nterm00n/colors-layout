import { renderHeader } from '../components/header/header.js';
import { renderSlider } from '../components/slider/slider.js';
import '/styles/main.scss';

document.querySelector('.header-container').appendChild(renderHeader());
document.querySelector('.slider-container').appendChild(renderSlider());
