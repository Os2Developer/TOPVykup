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

  document.querySelector('.arrow-block-text').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('popup').classList.toggle('hidden');
  });

  document.getElementById('popup').addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.add('hidden');
    }
  });

  const citySpans = document.querySelectorAll('.popup-content span');
  citySpans.forEach(span => {
    span.addEventListener('click', () => {
      span.style.color = "rgba(122, 184, 255, 1)";
      
      setTimeout(() => {
        span.style.color = "rgba(227, 234, 241, 1)";
      }, 300);
    });
  });

  if (window.innerWidth <= 768) {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const backArrow = document.querySelector('.pop-up-back-arrow');
    const closeIcon = document.querySelector('.pop-up-close-icon');
    const mobileLogoImage = document.getElementById('logo');

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

    const citySpans = document.querySelectorAll('.mobile-cities-list span');
    citySpans.forEach(span => {
      span.addEventListener('click', () => {
        span.style.color = "rgba(122, 184, 255, 1)";
        
        setTimeout(() => {
          span.style.color = "rgba(227, 234, 241, 1)";
        }, 300);
      });
    });
  }
});
