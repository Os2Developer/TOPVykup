// Slider Initialization
const initSliders = () => {
  if (window.innerWidth > 1023) return;

  $('.blog-articles-cars-slider').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: document.querySelector('.slick-prev'),
    nextArrow: document.querySelector('.slick-next'),
    centerMode: true,
    centerPadding: '22px',
    dots: true,
  });
};

// DOM Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  initSliders();
});
