(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const n of c)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(c){const n={};return c.integrity&&(n.integrity=c.integrity),c.referrerPolicy&&(n.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?n.credentials="include":c.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(c){if(c.ep)return;c.ep=!0;const n=r(c);fetch(c.href,n)}})();function M(){const e=document.createElement("template"),t=JSON.parse(localStorage.getItem("cart"))||[];return console.log(t.length),e.innerHTML=`
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
              <span class="header__cart-count">${t.length}</span>
            </button>
          </div>
  
        </div>
      </header>
    `.trim(),e.content.firstChild}function H(){const e=document.createElement("template");return e.innerHTML=`
      <section class="slider">
        <div class="slider__container">
            <nav class="slider__breadcrumbs">
                <a href="#" class="slider__breadcrumb-link">Главная</a>
                <span class="slider__breadcrumb-dot"></span>
                <a href="#" class="slider__breadcrumb-link">Продукты</a>
                <span class="slider__breadcrumb-dot"></span>
                <a href="#" class="slider__breadcrumb-link">Краски</a>
            </nav>

            <div class="slider__slide slider__slide--active">
                <div class="slider__content">
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
    `.trim(),e.content.firstChild}function P(){const e=document.createElement("template");return e.innerHTML=`
      <footer class="footer">
       
      </footer>
    `.trim(),e.content.firstChild}function B(e){const t=document.createElement("template");return t.innerHTML=`
        <div class="cart-checkout">
        <div class="cart-checkout__summary">
            <span class="cart-checkout__label">Итого</span>
            <span class="cart-checkout__price">${e}<span class="cart-checkout__currency">₽</span></span>
        </div>
        <button class="cart-checkout__button">
            Оформить заказ
        </button>
        </div>
    `.trim(),t.content.firstChild}function N(e){const t=document.createElement("template");function r(a){return a%10===1&&a%100!==11?"товар":[2,3,4].includes(a%10)&&![12,13,14].includes(a%100)?"товара":"товаров"}let s=r(e);return t.innerHTML=`
    <div class="cart-header">
        <div class="cart-header__top">
            <h2 class="cart-header__title">Корзина</h2>
            <button class="cart-header__close-btn" aria-label="Закрыть">×</button>
        </div>
        <div class="cart-header__bottom">
            <span class="cart-header__count">${e} ${s}</span>
            <button class="cart-header__clear-btn">очистить список</button>
        </div>
    </div>
    `.trim(),t.content.firstChild.querySelector(".cart-header__clear-btn").addEventListener("click",()=>{W()}),t.content.firstChild}function $(e){const t=document.createElement("template");t.innerHTML=`
    <div class="cart-item">
        <div class="cart-item__image">
            <img src=${e.image} alt="Краска Wallquest, Brownstone MS90102">
        </div>
        <div class="cart-item__details">
            <p class="cart-item__title">${e.name}</p>
            <p class="cart-item__price">${e.price} ₽</p>
        </div>
        <div class="cart-item__controls">
            <button class="cart-item__button cart-item__button--minus">−</button>
            <span class="cart-item__quantity">${e.quantity}</span>
            <button class="cart-item__button cart-item__button--plus">+</button>
        </div>
        <button class="cart-item__remove"></button>
    </div>
    `.trim();const r=t.content.firstChild;return r.querySelector(".cart-item__remove").addEventListener("click",()=>{F(e.id)}),r.querySelector(".cart-item__button--plus").addEventListener("click",()=>{G(e.id)}),r.querySelector(".cart-item__button--minus").addEventListener("click",()=>{j(e.id)}),t.content.firstChild}function L(){const e=document.createElement("div");e.classList.add("cart-container");const t=JSON.parse(localStorage.getItem("cart"))||[];let r=0;t.length>0&&t.forEach(o=>{r+=o.quantity*1});const s=N(r);e.appendChild(s),t&&t.forEach(o=>{const i=$(o);e.appendChild(i)});let c=0;t.length>0&&t.forEach(o=>{c+=o.quantity*o.price});const n=c.toString().split(".")[1];n&&n.length>3&&(c=parseFloat(c.toFixed(3)));const a=B(c);return e.appendChild(a),e}function A(e){const t=document.createElement("template");return t.innerHTML=`
        <div class="product-card">
            <div class="product-card__image">
                <img src="${e.image}" alt="${e.title}">
            </div>

            <div class="product-card__info">
            <div class="product-card__title">
                ${e.title.length>40?e.title.slice(0,40)+"...":e.title}
            </div>

                <div class="product-card__purchase">
                    <div class="product-card__price">
                        ${e.price} <span class="product-card__currency">₽</span>
                    </div>

                    <button class="product-card__button">
                        <span class="product-card__button-icon">+</span>
                    </button>
                </div>

            </div>
        </div>
    `.trim(),t.content.firstChild.querySelector(".product-card__button").addEventListener("click",()=>{J(e)}),t.content.firstChild}function C(e){const t=document.createElement("div");return t.classList.add("products-grid"),e.forEach(r=>{const s=A(r);t.appendChild(s)}),t}const d="cart";function g(){const e=document.querySelector(".cart-container"),t=L();if(e&&t){const r=e.classList.contains("active"),s=document.querySelector(".overlay");e.replaceWith(t),r&&t.classList.add("active");const c=t.querySelector(".cart-header__close-btn");c&&c.addEventListener("click",()=>{s.classList.remove("active"),t.classList.remove("active"),document.body.style.overflow=""})}}function y(){const e=JSON.parse(localStorage.getItem("cart"))||[],t=document.querySelector(".header__cart-count");t&&(t.textContent=e.length)}function J(e){const t=JSON.parse(localStorage.getItem(d))||[],r=t.find(s=>s.id===e.id);r?r.quantity+=1:t.push({id:e.id,image:e.image,name:e.name||e.title,price:e.price,quantity:1}),localStorage.setItem(d,JSON.stringify(t)),g(),y()}function F(e){let t=JSON.parse(localStorage.getItem(d))||[];t=t.filter(r=>r.id!==e),localStorage.setItem(d,JSON.stringify(t)),g(),y()}function W(){let e=[];localStorage.setItem(d,JSON.stringify(e)),g(),y()}function G(e){const t=JSON.parse(localStorage.getItem(d))||[],r=t.find(s=>s.id===e);r.quantity+=1,localStorage.setItem(d,JSON.stringify(t)),g(),y()}function j(e){const t=JSON.parse(localStorage.getItem(d))||[],r=t.find(s=>s.id===e);r.quantity-=1,localStorage.setItem(d,JSON.stringify(t)),g(),y()}let f=[];async function R(){if(f.length>0)return f;const t=await(await fetch("https://fakestoreapi.com/products")).json();return f=t,t}function k(){return[...f]}function K(e){f=e}function Y(e){const t=k(),r=e.length?t.filter(n=>e.includes(n.category)):t,s=document.querySelector(".products-grid"),c=C(r);s.replaceWith(c)}function z(){const e=document.createElement("template");let t=k(),r=new Set;t.forEach(n=>{r.add(n.category)});let s="";r.forEach(n=>{s+=`
            <div class="sidebar-filters__toggle-wrapper">
                <label class="sidebar-filters__toggle">
                    <input type="checkbox" data-category="${n}">
                    <span class="sidebar-filters__switcher"></span>
                </label>
                <p class="sidebar-filters__label">${n}</p>
            </div>
        `}),e.innerHTML=`
        <div class="sidebar-filters sidebar-filters-hidden">
            ${s}
        </div>
    `.trim();const c=e.content.firstChild;return c.querySelectorAll('input[type="checkbox"]').forEach(n=>{n.addEventListener("change",()=>{const a=Array.from(c.querySelectorAll('input[type="checkbox"]:checked')).map(o=>o.dataset.category);Y(a)})}),e.content.firstChild}function D(){const e=document.createElement("template");e.innerHTML=`
        <div class="dropdown">
            <div class="select">
                <span class="selected">Сначала дорогие</span>
                <div class="caret"></div>
            </div>
            <ul class="menu">
                <li data-sort="cheap">Сначала недорогие</li>
                <li data-sort="popular">Сначала популярные</li>
                <li data-sort="new">Сначала новые</li>
                <li class="active" data-sort="expensive">Сначала дорогие</li>
            </ul>
        </div>
    `.trim();const t=e.content.firstChild,r=t.querySelector(".select"),s=t.querySelector(".caret"),c=t.querySelector(".menu"),n=t.querySelectorAll(".menu li"),a=t.querySelector(".selected"),o=document.querySelector(".overlay");return r.addEventListener("click",()=>{r.classList.toggle("select-clicked"),s.classList.toggle("caret-rotate"),c.classList.toggle("menu-open"),c.classList.contains("menu-open")?(o.classList.add("active"),document.body.style.overflow="hidden"):(o.classList.remove("active"),document.body.style.overflow="")}),n.forEach(i=>{i.addEventListener("click",()=>{i.innerText;const l=i.dataset.sort;if(l==="cheap"||l==="expensive"){const v=[...k()].sort((m,u)=>{if(l==="cheap")return m.price-u.price;if(l==="expensive")return u.price-m.price});K(v);const p=document.querySelector(".products-grid"),h=C(v);p.replaceWith(h)}a.innerText=i.innerText,r.classList.remove("select-clicked"),s.classList.remove("caret-rotate"),c.classList.remove("menu-open"),o.classList.remove("active"),document.body.style.overflow="",n.forEach(_=>_.classList.remove("active")),i.classList.add("active")})}),t}async function Q(){const e=document.createElement("div");e.classList.add("catalog-container");const t=document.createElement("div");t.classList.add("catalog-container--right");const r=document.createElement("div");r.classList.add("catalog-container--left");const s=await R(),c=C(s),n=z();r.appendChild(n),t.appendChild(c),e.appendChild(t),e.appendChild(r);const a=document.createElement("div");a.classList.add("catalog-container--right-header"),t.appendChild(a);const o=D();a.appendChild(o);const i=document.createElement("div");i.classList.add("products-count"),i.textContent="20 товаров";const l=document.createElement("button");return l.classList.add("filtration-menu-button"),l.textContent="фильтры",a.appendChild(i),a.appendChild(l),e}function U(e){const t=[{backgroundImage:"url(/assets/images/slider-background.png)",title:"Краски",subtitle:"Идеально подходят для стен и других поверхностей.<br>Найди свой идеальный цвет!"},{backgroundImage:"url(/assets/images/slider-background2.jpg)",title:"Эмали",subtitle:"Стойкость и блеск для любых поверхностей."},{backgroundImage:"url(/assets/images/slider-background3.jpg)",title:"Грунтовки",subtitle:"Идеальная основа для долговечного покрытия."}],r=e.querySelector(".slider__slide"),s=e.querySelector(".slider__title"),c=e.querySelector(".slider__subtitle"),n=e.querySelectorAll(".slider__dot"),a=e.querySelector(".slider__arrow--left"),o=e.querySelector(".slider__arrow--right");let i=0,l;function _(m){const u=t[m];r.style.backgroundImage=u.backgroundImage,s.textContent=u.title,c.innerHTML=u.subtitle,n.forEach((T,x)=>{T.classList.toggle("slider__dot--active",x===m)})}function v(){i=(i+1)%t.length,_(i)}function p(){l=setInterval(v,4e3)}function h(){clearInterval(l)}a.addEventListener("click",()=>{h(),i=(i-1+t.length)%t.length,_(i),p()}),o.addEventListener("click",()=>{h(),v(),p()}),n.forEach((m,u)=>{m.addEventListener("click",()=>{h(),i=u,_(i),p()})}),_(i),p()}const E=M(),V=L();document.querySelector(".header-container").appendChild(E);const w=H();document.body.appendChild(w);U(w);const X=await Q();document.body.appendChild(X);document.body.appendChild(V);document.body.appendChild(P());const b=document.querySelector(".overlay"),Z=E.querySelector(".header__icon--card");Z.addEventListener("click",()=>{b.classList.add("active");const e=document.querySelector(".cart-container"),t=L();e?e.replaceWith(t):document.body.appendChild(t),t.classList.add("active"),document.body.style.overflow="hidden",t.querySelector(".cart-header__close-btn").addEventListener("click",()=>{b.classList.remove("active"),t.classList.remove("active"),document.body.style.overflow=""})});let q=document.querySelector(".burger-menu__close-btn");const O=document.querySelector(".burger-menu"),ee=E.querySelector(".burger-menu__button");ee.addEventListener("click",()=>{O.classList.add("burger-menu-active")});q&&q.addEventListener("click",()=>{console.log("123"),O.classList.remove("burger-menu-active")});let I=document.querySelector(".filtration-menu-button"),S=document.querySelector(".sidebar-filters");I.addEventListener("click",()=>{S.classList.remove("sidebar-filters-hidden"),b.classList.add("active"),document.body.style.overflow="hidden"});document.addEventListener("click",e=>{!S.contains(e.target)&&!I.contains(e.target)&&!S.classList.contains("sidebar-filters-hidden")&&(S.classList.add("sidebar-filters-hidden"),b.classList.contains("active")&&b.classList.remove("active"),document.body.style.overflow="")});
