// Button configuration
const buttonConfigs = [
  {
    id: "car-buyback-connect-button",
    large: "294px",
    medium: "294px",
    small: "230px",
    extraSmall: "216px",
  },
  {
    id: "urgent-buyout-connect-button",
    large: "259px",
    medium: "259px",
    small: "205px",
    extraSmall: "190px",
  },
  {
    id: "cities-button",
    large: "294px",
    medium: "294px",
    small: "230px",
    extraSmall: "216px",
  },
  {
    id: "blog-articles-button",
    large: "203px",
    medium: "203px",
    small: "160px",
    extraSmall: "150px",
  },
  {
    id: "review-send-button",
    large: "300px",
    medium: "294px",
    small: "230px",
    extraSmall: "223px",
  },
  {
    id: "send-application-button",
    large: "392px",
    medium: "294px",
    small: "294px",
    extraSmall: "297px",
  },
];

function updateButtonWidths(configs) {
  configs.forEach(({ id, large, medium, small, extraSmall }) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    
    let newWidth = large;
    if (window.innerWidth >= 1440) {
      newWidth = large;
    } else if (window.innerWidth >= 1280) {
      newWidth = medium;
    } else if (window.innerWidth >= 1024) {
      newWidth = small;
    } else {
      newWidth = extraSmall;
    }

    // Get internal wrapper element from shadow DOM
    const wrapper = btn.shadowRoot?.querySelector('.global-btn');
    if (wrapper) {
      // Override media query
      wrapper.style.setProperty('width', newWidth, 'important');
    }
  });
}

function updatePagination(currentSlide) {
  $('.repurchased-cars-page').each(function(){
    const index = $(this).data('index');
    if (index === currentSlide) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Update based on configuration
  updateButtonWidths(buttonConfigs);

  if (window.innerWidth <= 768) {
    $('.repurchased-cars-slider-mobile').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next'),
      centerMode: true,
      centerPadding: '22px',
      dots: window.innerWidth <= 768,
    });

    $('.blog-articles-cars-slider').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next'),
      centerMode: true,
      centerPadding: '22px',
      dots: true,
    });
  } else {
    $('.repurchased-cars-slider').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next'),
      centerMode: false, 
      dots: false,
    });
  
  }


  updatePagination(0);

  $('.repurchased-cars-slider').on('afterChange', function(event, slick, currentSlide){
    updatePagination(currentSlide);
  });

  // Optional: click on a pagination number to go to that slide
  $('.repurchased-cars-page').on('click', function(){
    const index = $(this).data('index');
    $('.repurchased-cars-slider').slick('slickGoTo', index);
  });

  const questionContainers = document.querySelectorAll('.common-questions-list-item .common-questions-question-container');

  questionContainers.forEach(container => {
    container.addEventListener('click', function() {
      // Get the parent list item
      const listItem = this.parentElement;
      // Find the corresponding answer container within this list item
      const answerContainer = listItem.querySelector('.common-questions-answer-container');
      // Find the icon image within the question container
      const iconImg = this.querySelector('img');

      // Determine whether we are expanding or collapsing
      if (answerContainer.style.maxHeight && answerContainer.style.maxHeight !== '0px') {
        // Collapse
        $(iconImg).fadeOut(200, function() {
          iconImg.src = "../img/common-questions-list-icon-blue.svg";
          $(iconImg).fadeIn(200);
        });
        answerContainer.style.maxHeight = '0';
      } else {
        // Expand
        $(iconImg).fadeOut(200, function() {
          iconImg.src = "../img/common-questions-list-icon-white.svg";
          $(iconImg).fadeIn(200);
        });
        // Expand
        answerContainer.style.maxHeight = answerContainer.scrollHeight + 'px';
      }
    });
  });
  
  const photoInput = document.getElementById('photo');
  const fileNameElement = document.querySelector('.selected-photo-name');

  // When the user selects a file
  photoInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      fileNameElement.textContent = file.name;
    } else {
      fileNameElement.textContent = '';
    }
  });

});

// Update based on window resize
window.addEventListener('resize', () => {
  updateButtonWidths(buttonConfigs);
});
