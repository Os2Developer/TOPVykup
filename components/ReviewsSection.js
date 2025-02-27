/**
 * @param {Array} reviewsData - Array of review objects with date, name, and review.
*/
function generateReviewsSection(reviewsData) {
  const reviewsItemsHtml = reviewsData.map(review => `
    <div class="reviews-info-item">
      <p class="reviews-info-date">${review.date}</p>
      <div class="reviews-info-review-block">
        <div class="review-info-star-block">
          <p>${review.name}</p>
          <div>
            <img src="../img/reviews-star.svg" alt="reviews-star-image">
            <img src="../img/reviews-star.svg" alt="reviews-star-image">
            <img src="../img/reviews-star.svg" alt="reviews-star-image">
            <img src="../img/reviews-star.svg" alt="reviews-star-image">
            <img src="../img/reviews-star.svg" alt="reviews-star-image">
          </div>
        </div>
        <p>${review.review}</p>
      </div>
    </div>
  `).join('');

  return `
    <div class="reviews">
      <div class="reviews-content">
        <div class="h3">ВІДГУКИ</div>
        <div class="reviews-info-container">
          ${reviewsItemsHtml}
        </div>
        <div class="reviews-leave-review">
          <div class="h3">ЗАЛИШИТИ ВІДГУК</div>
          <div class="reviews-select-stars-mobile">
            <img src="../img/reviews-star-empty.svg" alt="reviews-star-image" class="star">
            <img src="../img/reviews-star-empty.svg" alt="reviews-star-image" class="star">
            <img src="../img/reviews-star-empty.svg" alt="reviews-star-image" class="star">
            <img src="../img/reviews-star-empty.svg" alt="reviews-star-image" class="star">
            <img src="../img/reviews-star-empty.svg" alt="reviews-star-image" class="star">
          </div>
          <div class="reviews-leave-review-content">
            <div class="reviews-leave-review-inputs-block">
              <form class="feedback-form">
                <div class="feedback-form-row">
                  <div class="feedback-form-group">
                    <label for="name">
                      <span style="color: red;">*</span> Ім’я
                    </label>
                    <input type="text" id="name" placeholder="Введіть Ім’я" />
                  </div>
                  <div class="feedback-form-group">
                    <label for="email">
                      <span style="color: red;">*</span> Email
                    </label>
                    <input type="email" id="email" placeholder="Введіть Email" />
                  </div>
                </div>
                <div class="feedback-form-group">
                  <label for="review">
                    <span style="color: red;">*</span> Написати відгук
                  </label>
                  <textarea id="review" placeholder="Написати відгук"></textarea>
                </div>
              </form>
              <global-button
                id="review-send-button"
                text="ВІДПРАВИТИ"
                bgcolor="#7AB8FF"
                imgsrc="../img/button-arrow.svg"
              >
              </global-button>
            </div>
            <div class="reviews-select-stars">
              <img src="../img/reviews-star-empty.svg" alt="reviews-star-image" class="star">
              <img src="../img/reviews-star-empty.svg" alt="reviews-star-image" class="star">
              <img src="../img/reviews-star-empty.svg" alt="reviews-star-image" class="star">
              <img src="../img/reviews-star-empty.svg" alt="reviews-star-image" class="star">
              <img src="../img/reviews-star-empty.svg" alt="reviews-star-image" class="star">
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function initStarRating() {
  const starsContainer = window.innerWidth <= 768 
    ? document.querySelector(".reviews-select-stars-mobile") 
    : document.querySelector(".reviews-select-stars");
  const stars = starsContainer?.querySelectorAll(".star") || [];
  let isRated = false;

  stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => {
      if (!isRated) {
        for (let i = 0; i <= index; i++) {
          stars[i].src = "../img/reviews-star.svg";
        }
      }
    });

    star.addEventListener("mouseout", () => {
      if (!isRated) {
        stars.forEach(s => s.src = "../img/reviews-star-empty.svg");
      }
    });

    star.addEventListener("click", () => {
      isRated = true;
      stars.forEach((s, i) => {
        s.src = i <= index ? "../img/reviews-star.svg" : "../img/reviews-star-empty.svg";
      });
    });
  });
}

export function renderReviews(reviewsData, containerId) {
  const html = generateReviewsSection(reviewsData);
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = html;
    initStarRating();
  } else {
    console.error(`Container with ID "${containerId}" not found.`);
  }
}