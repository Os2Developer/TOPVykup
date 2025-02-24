// Pagination for Slider
const updatePagination = (currentSlide) => {
  document.querySelectorAll('.repurchased-cars-page').forEach((page) => {
    const index = Number(page.dataset.index);
    page.classList.toggle('active', index === currentSlide);
  });
};

// Slider Initialization
const initSliders = () => {
  const isMobile = window.innerWidth <= 768;
  const baseConfig = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: document.querySelector('.slick-prev'),
    nextArrow: document.querySelector('.slick-next'),
  };

  if (isMobile) {
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
};

// FAQ
const initFAQ = () => {
  document.querySelectorAll('.common-questions-list-item .common-questions-question-container').forEach(container => {
    container.addEventListener('click', () => {
      const listItem = container.parentElement;
      const answer = listItem.querySelector('.common-questions-answer-container');
      const icon = container.querySelector('img');
      const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

      icon.style.opacity = '0';
      setTimeout(() => {
        icon.src = isOpen ? "../img/common-questions-list-icon-blue.svg" : "../img/common-questions-list-icon-white.svg";
        icon.style.opacity = '1';
      }, 200);

      answer.style.maxHeight = isOpen ? '0' : `${answer.scrollHeight}px`;
    });
  });
};

// Star Rating
const initStarRating = () => {
  const starsContainer = window.innerWidth <= 768 
    ? document.querySelector(".reviews-select-stars-mobile") 
    : document.querySelector(".reviews-select-stars");
  const stars = starsContainer?.querySelectorAll(".star") || [];
  let isRated = false;
  let currentRating = -1;

  stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => {
      if (!isRated) {
        for (let i = 0; i <= index; i++) stars[i].src = "../img/reviews-star.svg";
      }
    });

    star.addEventListener("mouseout", () => {
      if (!isRated) {
        stars.forEach(s => s.src = "../img/reviews-star-empty.svg");
      }
    });

    star.addEventListener("click", () => {
      isRated = true;
      currentRating = index;
      stars.forEach((s, i) => {
        s.src = i <= index ? "../img/reviews-star.svg" : "../img/reviews-star-empty.svg";
      });
    });
  });
};

const updateStep4Text = () => {
  const step4Span = document.querySelector('.step-4 .step-card span');
  if (step4Span) {
    if (window.innerWidth <= 768) {
      step4Span.textContent = 'Оформлення документів';
    } else {
      step4Span.textContent = 'Оформлення документів, швидкий розрахунок';
    }
  }
};


document.addEventListener('DOMContentLoaded', () => {
  initFAQ();
  initStarRating();
  initSliders();
  updatePagination(0);
  updateStep4Text();
});
