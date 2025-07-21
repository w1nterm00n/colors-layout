export function initSlider(sliderElement) {
    const slides = [
        {
          backgroundImage: 'url(/assets/images/slider-background.png)',
          title: 'Краски',
          subtitle: 'Идеально подходят для стен и других поверхностей.<br>Найди свой идеальный цвет!',
        },
        {
          backgroundImage: 'url(/assets/images/slider-background2.jpg)',
          title: 'Эмали',
          subtitle: 'Стойкость и блеск для любых поверхностей.',
        },
        {
          backgroundImage: 'url(/assets/images/slider-background3.jpg)',
          title: 'Грунтовки',
          subtitle: 'Идеальная основа для долговечного покрытия.',
        }
    ];
      
  
    const slideContainer = sliderElement.querySelector('.slider__slide');
    const titleElement = sliderElement.querySelector('.slider__title');
    const subtitleElement = sliderElement.querySelector('.slider__subtitle');
    const dots = sliderElement.querySelectorAll('.slider__dot');
    const leftArrow = sliderElement.querySelector('.slider__arrow--left');
    const rightArrow = sliderElement.querySelector('.slider__arrow--right');
  
    let currentIndex = 0;
    let autoSlideInterval;

    function updateSlide(index) {
        const slide = slides[index];
        slideContainer.style.backgroundImage = slide.backgroundImage;
        titleElement.textContent = slide.title;
        subtitleElement.innerHTML = slide.subtitle;

        dots.forEach((dot, i) => {
        dot.classList.toggle('slider__dot--active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide(currentIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    leftArrow.addEventListener('click', () => {
        stopAutoSlide();
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide(currentIndex);
        startAutoSlide();
    });

    rightArrow.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
        stopAutoSlide();
        currentIndex = index;
        updateSlide(currentIndex);
        startAutoSlide();
        });
    });

    updateSlide(currentIndex);
    startAutoSlide();
  }
  