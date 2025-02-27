function generateRepurchasedCarsSection(purchasedCarsData) {
  const desktopSlides = [];
  const mobileSlides = [];

  // Desktop slides (6 cars per slide)
  for (let i = 0; i < purchasedCarsData.length; i += 6) {
    const slideItems = purchasedCarsData.slice(i, i + 6).map((car, index) => {
      const isEven = index % 2 === 0;
      const backgroundStyle = isEven ? '' : 'style="background-color: rgba(255, 255, 255, 1);"';
      const imageFirst = isEven ? `
        <div style="overflow: hidden; border-radius: 32px;">
          <img class="repurchased-cars-image" src="${car.image}" alt="repurchased-car-image">
        </div>
        <div class="repurchased-cars-info-block">
          <p>${car.title}</p>
          <span>${car.description}</span>
        </div>
      ` : `
        <div class="repurchased-cars-info-block">
          <p>${car.title}</p>
          <span>${car.description}</span>
        </div>
        <div style="overflow: hidden; border-radius: 32px;">
          <img class="repurchased-cars-image" src="${car.image}" alt="repurchased-car-image">
        </div>
      `;
      return `<div class="repurchased-cars-slider-block-item" ${backgroundStyle}>${imageFirst}</div>`;
    }).join('');
    desktopSlides.push(`<div class="repurchased-cars-slider-block">${slideItems}</div>`);
  }

  // Mobile slides (2 cars per slide)
  for (let i = 0; i < purchasedCarsData.length; i += 2) {
    const slideItems = purchasedCarsData.slice(i, i + 2).map((car, index) => {
      const isEven = index % 2 === 0;
      const backgroundStyle = isEven ? '' : 'style="background-color: rgba(255, 255, 255, 1);"';
      const imageFirst = isEven ? `
        <div style="overflow: hidden; border-radius: 16px;">
          <img class="repurchased-cars-image" src="${car.image}" alt="repurchased-car-image">
        </div>
        <div class="repurchased-cars-info-block">
          <p>${car.title}</p>
          <span>${car.description}</span>
        </div>
      ` : `
        <div class="repurchased-cars-info-block">
          <p>${car.title}</p>
          <span>${car.description}</span>
        </div>
        <div style="overflow: hidden; border-radius: 16px;">
          <img class="repurchased-cars-image" src="${car.image}" alt="repurchased-car-image">
        </div>
      `;
      return `<div class="repurchased-cars-slider-block-item" ${backgroundStyle}>${imageFirst}</div>`;
    }).join('');
    mobileSlides.push(`<div class="repurchased-cars-slider-block">${slideItems}</div>`);
  }

  const paginationHtml = desktopSlides.map((_, index) => `
    <div class="repurchased-cars-page" data-index="${index}">
      <p>${index + 1}</p>
    </div>
  `).join('');

  return `
    <div class="repurchased-cars">
      <div class="repurchased-cars-content">
        <div class="h3">ВИКУПЛЕНІ АВТОМОБІЛІ ПІСЛЯ ДТП</div>
        <div class="repurchased-cars-slider-wrapper">
          <div class="repurchased-cars-slider">
            ${desktopSlides.join('')}
          </div>
          <div class="repurchased-cars-slider-nav-block">
            <div class="repurchased-cars-slider-nav-line"></div>
            <div class="repurchased-cars-slider-nav">
              <button type="button" class="slick-prev">
                <img src="../img/slider-back-icon-disabled.svg" alt="Back">
              </button>
              <button type="button" class="slick-next">
                <img src="../img/slider-forward-icon.svg" alt="Forward">
              </button>
            </div>
            <div class="repurchased-cars-pagination">
              ${paginationHtml}
            </div>
          </div>
        </div>
        <div class="repurchased-cars-slider-wrapper-mobile">
          <div class="repurchased-cars-slider-mobile">
            ${mobileSlides.join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function updatePagination(currentSlide) {
  document.querySelectorAll('.repurchased-cars-page').forEach((page) => {
    const index = Number(page.dataset.index);
    page.classList.toggle('active', index === currentSlide);
  });
}

function initSliders() {
  const baseConfig = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: document.querySelector('.slick-prev'),
    nextArrow: document.querySelector('.slick-next'),
  };

  if (window.innerWidth <= 1023) {
    $('.repurchased-cars-slider-mobile').slick({
      ...baseConfig,
      centerMode: true,
      centerPadding: '22px',
      dots: true,
    });
  } else {
    $('.repurchased-cars-slider').slick({
      ...baseConfig,
      infinite: false,
      centerMode: false,
      dots: false,
    }).on('init afterChange', (event, slick, currentSlide = 0) => {
      const totalSlides = slick.$slides.length;
      const nextImg = document.querySelector('.slick-next img');
      const prevImg = document.querySelector('.slick-prev img');
      const nextBtn = document.querySelector('.slick-next');
      const prevBtn = document.querySelector('.slick-prev');

      nextImg.src = currentSlide === totalSlides - 1 
        ? '../img/slider-forward-icon-disabled.svg' 
        : '../img/slider-forward-icon.svg';
      nextBtn.classList.toggle('disabled', currentSlide === totalSlides - 1);

      prevImg.src = currentSlide === 0 
        ? '../img/slider-back-icon-disabled.svg' 
        : '../img/slider-back-icon.svg';
      prevBtn.classList.toggle('disabled', currentSlide === 0);

      updatePagination(currentSlide);
    });

    document.querySelectorAll('.repurchased-cars-page').forEach(page => {
      page.addEventListener('click', () => {
        const index = Number(page.dataset.index);
        $('.repurchased-cars-slider').slick('slickGoTo', index);
      });
    });
  }
}

export function renderPurchasedCars(carsData, containerId) {
  const html = generateRepurchasedCarsSection(carsData);
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = html;
    initSliders();
    updatePagination(0);
  } else {
    console.error(`Container with ID "${containerId}" not found.`);
  }
}