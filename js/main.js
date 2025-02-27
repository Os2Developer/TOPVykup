import { manageBodyScroll } from '../utils/body-scroll.js';

// Load and Paste HTML component and return a Promise
async function loadComponent(targetId, componentPath) {
  try {
    const response = await fetch(componentPath);
    const html = await response.text();
    document.getElementById(targetId).innerHTML = html;
  } catch (error) {
    console.error('Error loading component:', error);
  }
}

// Button Configurations
const buttonConfigs = [
  // HOME
  { id: "car-buyback-connect-button", widths: { xl: "294px", lg: "294px", md: "294px", sm: "220px", xs: "216px" } },
  { id: "urgent-buyout-connect-button", widths: { xl: "259px", lg: "259px", md: "259px", sm: "195px", xs: "190px" } },
  { id: "cities-button", widths: { xl: "294px", lg: "294px", md: "294px", sm: "220px", xs: "216px" } },
  { id: "blog-articles-button", widths: { xl: "203px", lg: "203px", md: "203px", sm: "160px", xs: "150px" } },
  { id: "review-send-button", widths: { xl: "300px", lg: "294px", md: "294px", sm: "230px", xs: "223px" } },
  { id: "send-application-button", widths: { xl: "392px", lg: "392px", md: "392px", sm: "294px", xs: "297px" } },
  // LVIV
  { id: "service-point-button", widths: { xl: "291px", lg: "291px", md: "291px", sm: "230px", xs: "216px" } },
  { id: "sell-today-button", widths: { xl: "394px", lg: "394px", md: "394px", sm: "294px", xs: "297px" } },
  // BLOG
  { id: "sell-today-button", widths: { xl: "394px", lg: "394px", md: "394px", sm: "290px", xs: "290px" } },
];

// Responsive Button Widths
const updateButtonWidths = (configs) => {
  configs.forEach(({ id, widths }) => {
    const btn = document.getElementById(id);
    if (!btn) return;

    const width = window.innerWidth >= 1440 ? widths.lg :
                  window.innerWidth >= 1280 ? widths.md :
                  window.innerWidth >= 1024 ? widths.sm : widths.xs;

    const wrapper = btn.shadowRoot?.querySelector('.global-btn');

    if (wrapper) wrapper.style.setProperty('width', width, 'important');
  });
};


document.addEventListener('DOMContentLoaded', async () => {
  await Promise.all([
    loadComponent('header', '../components/header.html'),
    loadComponent('footer', '../components/footer.html')
  ]);

  // FOOTER
  const toTopButton = document.querySelector('.footer-to-top-button');
  if (toTopButton) {
    toTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // HEADER
  const citiesArrowText = document.querySelector('.cities-arrow-text');
  const arrowIcon = citiesArrowText?.querySelector('img');
  const menuPopUp = document.getElementById('menu-pop-up');
  
  if (citiesArrowText && arrowIcon) {
    citiesArrowText.addEventListener('click', function(e) {
      e.preventDefault();
      const isHidden = menuPopUp.classList.toggle('hidden');
      arrowIcon.classList.toggle('rotated', !isHidden);
      manageBodyScroll(menuPopUp, isHidden ? 'enable' : 'disable');
    });
  
    menuPopUp.addEventListener('click', function(e) {
      if (e.target === menuPopUp) {
        menuPopUp.classList.add('hidden');
        arrowIcon.classList.remove('rotated');
        manageBodyScroll(menuPopUp, 'enable');
      }
    });
  }

  // language block
  $('.lang-row').on('click', function() {
    const $extra = $('.lang-extra');
    const $arrow = $(this).find('.arrow-down');
    if ($extra.is(':visible')) {
      $extra.fadeOut(300);
      $arrow.css('transform', 'rotate(0deg)');
    } else {
      $extra.fadeIn(300);
      $arrow.css('transform', 'rotate(180deg)');
    }
  });

  $('.lang-extra').on('click', function() {
    const $ukr = $('#lang-ukr');
    const $rus = $('#lang-rus');
    
    // Store current text values
    const ukrText = $ukr.text();
    const rusText = $rus.text();
    
    $ukr.text(rusText);
    $rus.text(ukrText);
    
    $(this).fadeOut(300);
    $('#arrow-down').css('transform', 'rotate(0deg)');
  });

  // BUTTONS
  updateButtonWidths(buttonConfigs);

  // all header and pop up mobile related code
  if (window.innerWidth <= 1023) {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileOverlay = document.querySelector('.mobile-menu-pop-up');
    const backArrow = document.querySelector('.pop-up-back-arrow');
    const closeIcon = document.querySelector('.pop-up-close-icon');
    const mobileLogoImage = document.getElementById('logo');

    // header logo change
    mobileLogoImage.src = "../img/editor-logo.svg";

    hamburgerBtn.addEventListener('click', () => {
      manageBodyScroll(mobileOverlay, 'disable');
    });

    backArrow.addEventListener('click', () => {
      if ($('.mobile-cities-list').is(':visible')) {
        $('.mobile-cities-list').fadeOut(300, function() {
          $('.mobile-menu-content').fadeIn(300);
        });
      } else {
        manageBodyScroll(mobileOverlay, 'enable');
      }
    });

    closeIcon.addEventListener('click', () => {
      manageBodyScroll(mobileOverlay, 'enable');
    });
  
    const citiesMenuItem = document.querySelector('.mobile-menu-content .menu-item[data-target="cities"]');
    if (citiesMenuItem) {
      citiesMenuItem.addEventListener('click', () => {
        $('.mobile-menu-content').fadeOut(300, function() {
          $('.mobile-cities-list').fadeIn(300);
        });
      });
    }
  }
});

window.addEventListener('resize', () => updateButtonWidths(buttonConfigs));
