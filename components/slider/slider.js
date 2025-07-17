export function renderSlider() {
    const template = document.createElement('template');
  
    template.innerHTML = `
      <section class="slider">
        <div class="slider__container">
    
        <div class="slider__slide slider__slide--active">
            <div class="slider__image" style="background-image: url('/assets/images/slide1.jpg');"></div>
            <div class="slider__content">
            <nav class="slider__breadcrumbs">
                <a href="#" class="slider__breadcrumb-link">Главная</a> –
                <a href="#" class="slider__breadcrumb-link">Продукты</a> –
                <span>Краски</span>
            </nav>
            <h1 class="slider__title">Краски</h1>
            <p class="slider__subtitle">Идеально подходят для стен и других поверхностей.<br> Найди свой идеальный цвет!</p>
            </div>
        </div>
    
        <button class="slider__arrow slider__arrow--left"></button>
        <button class="slider__arrow slider__arrow--right"></button>
    
        <div class="slider__dots">
            <span class="slider__dot slider__dot--active"></span>
            <span class="slider__dot"></span>
            <span class="slider__dot"></span>
        </div>
    
        </div>
    </section>
    `.trim();
  
    return template.content.firstChild;
  }
  