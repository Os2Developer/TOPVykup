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
    medium: "392px",
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
      dots: true,
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
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next'),
      centerMode: false, 
      dots: false,
    }).on('init afterChange', function(event, slick, currentSlide) {
      // currentSlide might be undefined on initialization, default to 0
      currentSlide = (typeof currentSlide !== 'undefined') ? currentSlide : 0;
      const totalSlides = slick.$slides.length;
      
      // Update the forward arrow:
      if (currentSlide === totalSlides - 1) {
        $('.slick-next img').attr('src', '../img/repurchased-cars-slider-forward-icon-disabled.svg');
        $('.slick-next').addClass('disabled');
      } else {
        $('.slick-next img').attr('src', '../img/repurchased-cars-slider-forward-icon.svg');
        $('.slick-next').removeClass('disabled');
      }
      
      // Update the back arrow:
      if (currentSlide === 0) {
        $('.slick-prev img').attr('src', '../img/repurchased-cars-slider-back-icon-disabled.svg');
        $('.slick-prev').addClass('disabled');
      } else {
        $('.slick-prev img').attr('src', '../img/repurchased-cars-slider-back-icon.svg');
        $('.slick-prev').removeClass('disabled');
      }
    });
  }

  updatePagination(0);

  $('.repurchased-cars-slider').on('afterChange', function(event, slick, currentSlide){
    updatePagination(currentSlide);
  });

  // Click on a pagination number to go to that slide
  $('.repurchased-cars-page').on('click', function(){
    const index = $(this).data('index');
    $('.repurchased-cars-slider').slick('slickGoTo', index);
  });

  const questionContainers = document.querySelectorAll('.common-questions-list-item .common-questions-question-container');

  questionContainers.forEach((container) => {
    container.addEventListener('click', function() {
      // Get the parent list item
      const listItem = this.parentElement;
      const answerContainer = listItem.querySelector('.common-questions-answer-container');
      const iconImg = this.querySelector('img');

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
        answerContainer.style.maxHeight = answerContainer.scrollHeight + 'px';
      }
    });
  });

  // Application form
  
  const photoInput = document.getElementById('photo');
  const fileNameElement = document.querySelector('.selected-photo-name');

  photoInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      fileNameElement.textContent = file.name;
    } else {
      fileNameElement.textContent = '';
    }
  });

  // PHONE INPUT MASKING AND VALIDATION

  const phoneInput = document.getElementById("phone");
  const phoneLabel = document.getElementById("phone-label");
  const sendButton = document.getElementById("send-application-button");

  function isPhoneValid() {
    const phoneDigits = phoneInput.value.replace(/[^0-9]/g, "").slice(3);
    return phoneDigits.length === 9; // Removed !includes("_") since it's redundant
  }

  function updatePhoneLabel() {
    if (isPhoneValid()) {
      phoneLabel.innerHTML = "<span style='color: red;'>*</span>Телефон";
      phoneLabel.classList.remove("error");
    } else if (phoneInput.value !== "" && phoneInput.value !== "Введіть телефон" && phoneInput.value !== "+380 (__) ___-__-__") {
      phoneLabel.innerHTML = "<span style='color: red;'>*</span>Телефон";
      phoneLabel.classList.remove("error");
    }
  }

  // We'll store the entered digits (up to 9 digits).
  let digits = "";

  // Returns the formatted phone number by replacing underscores with entered digits.
  function formatPhone() {
    // Pad the digits string with underscores up to 9 characters
    const padded = digits.padEnd(9, "_");
    // Build the formatted string:
    // First two digits go into the parentheses, then three, then two, then two.
    return `+380 (${padded.slice(0, 2)}) ${padded.slice(2, 5)}-${padded.slice(5, 7)}-${padded.slice(7, 9)}`;
  }

  // Update the input value and set the caret position to the first underscore.
  function updateInput() {
    phoneInput.value = formatPhone();
    // Find the position of the first underscore
    let pos = phoneInput.value.indexOf("_");
    if (pos === -1) pos = phoneInput.value.length; // no underscore found, all digits entered
    phoneInput.setSelectionRange(pos, pos);
    sendButton.setAttribute("bgcolor", "rgba(34, 34, 39, 1)");
  }

  // On focus, update the input (and place the caret appropriately)
  phoneInput.addEventListener("focus", () => {
    updateInput();
    updatePhoneLabel();
  });

  // Prevent default behavior for navigation keys
  phoneInput.addEventListener("keydown", (e) => {
    // Allow digits (0-9)
    if (/^\d$/.test(e.key)) {
      e.preventDefault();
      if (digits.length < 9) {
        digits += e.key;
        updateInput();
      }
    } else if (e.key === "Backspace") {
      e.preventDefault();
      // Remove the last digit (if any)
      digits = digits.slice(0, -1);
      updateInput();
    } else if (["Tab", "Shift", "Control", "Alt"].includes(e.key)) {
      // Allow navigation/control keys
    } else {
      // Prevent any other key (e.g., arrow keys, letters, etc.)
      e.preventDefault();
    }
  });

  // Button click validation
  sendButton.addEventListener("click", (e) => {
    if (!isPhoneValid()) {
      sendButton.setAttribute("bgcolor", "rgba(190, 190, 190, 1)");
      phoneLabel.innerHTML = "* Заповніть обов’язкове поле";
      phoneLabel.classList.add("error");
    } else {
      sendButton.setAttribute("bgcolor", "rgba(34, 34, 39, 1)");
      phoneLabel.innerHTML = "<span style='color: red;'>*</span>Телефон";
      phoneLabel.classList.remove("error");
    }
  });

  // Review stars

  let starsContainer;

  if (window.innerWidth <= 768) {
    starsContainer = document.querySelector(".reviews-select-stars-mobile");
  } else {
    starsContainer = document.querySelector(".reviews-select-stars");
  }

  const stars = starsContainer.querySelectorAll(".star");
  let isRated = false;
  let currentRating = -1; // Tracks the last clicked star index
  
  stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => {
      if (!isRated) { // Apply hover if no rating
        for (let i = 0; i <= index; i++) {
          stars[i].src = "../img/reviews-star.svg";
        }
      }
    });
  
    star.addEventListener("mouseout", () => {
      if (!isRated) { // Reset if no rating
        stars.forEach((s) => {
          s.src = "../img/reviews-star-empty.svg";
        });
      }
    });
  
    star.addEventListener("click", () => {
      isRated = true;
      currentRating = index;
  
      // Set clicked star and all previous ones to blue
      for (let i = 0; i <= index; i++) {
        stars[i].src = "../img/reviews-star.svg";
      }
      for (let i = index + 1; i < stars.length; i++) {
        stars[i].src = "../img/reviews-star-empty.svg";
      }
    });
  });

});

// Update based on window resize
window.addEventListener('resize', () => {
  updateButtonWidths(buttonConfigs);
});
