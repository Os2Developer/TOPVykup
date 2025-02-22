// Load and Paste HTML component and return a Promise
async function loadComponent(targetId, componentPath) {
  try {
    const response = await fetch(componentPath);
    const html = await response.text();
    document.getElementById(targetId).innerHTML = html;
  } catch (error) {
    return console.error('Error loading component:', error);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadComponent('header', '../components/header.html');
  await loadComponent('footer', '../components/footer.html');

  const toTopButton = document.querySelector('.footer-to-top-button');
  if (toTopButton) {
    toTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const citiesArrowText = document.querySelector('.cities-arrow-text');
  const arrowIcon = citiesArrowText.querySelector('img');
  
  citiesArrowText.addEventListener('click', function(e) {
    e.preventDefault();
    const popup = document.getElementById('popup');
    popup.classList.toggle('hidden');
    arrowIcon.classList.toggle('rotated');
  });
  
  document.getElementById('popup').addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.add('hidden');
      arrowIcon.classList.remove('rotated');
    }
  });

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

  // all header and pop up mobile related code
  if (window.innerWidth <= 768) {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileOverlay = document.querySelector('.mobile-menu-pop-up');
    const backArrow = document.querySelector('.pop-up-back-arrow');
    const closeIcon = document.querySelector('.pop-up-close-icon');
    const mobileLogoImage = document.getElementById('logo');

    // header logo change
    mobileLogoImage.src = "../img/editor-logo.svg";

    hamburgerBtn.addEventListener('click', () => {
      mobileOverlay.classList.add('open');
    });
  
    backArrow.addEventListener('click', () => {
      if ($('.mobile-cities-list').is(':visible')) {
        $('.mobile-cities-list').fadeOut(300, function() {
          $('.mobile-menu-content').fadeIn(300);
        });
      } else {
        mobileOverlay.classList.remove('open');
      }
    });
    closeIcon.addEventListener('click', () => {
      mobileOverlay.classList.remove('open');
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
