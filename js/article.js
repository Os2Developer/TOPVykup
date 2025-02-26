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

  const isMobile = window.innerWidth <= 767;

  const scrollToTarget = (target) => {
    if (target) {
      const headerHeight = isMobile ? 85 : 100;
      const targetRect = target.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const targetTop = targetRect.top + scrollTop - headerHeight;

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
    }
  };

  const navItems = document.querySelectorAll('.content-nav-item span[data-target]');

  navItems.forEach(navItem => {
    navItem.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = navItem.getAttribute('data-target');

      const targetElement = document.getElementById(targetId);
      scrollToTarget(targetElement);
    });
  });

});
