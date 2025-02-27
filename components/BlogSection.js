function generateBlogSection(blogData) {
  const sectionName = blogData.sectionName || 'Latest Blog Articles';
  const articles = Array.isArray(blogData.articles) ? blogData.articles : [];

  const infoBlock = articles.map(article => `
    <div class="blog-articles-info-block-item">
      <img src="${article.carImage}" alt="car-image">
      <div class="blog-articles-item-info-block">
        <p class="blog-articles-item-date">${article.date}</p>
        <p class="blog-articles-item-question">${article.question}</p>
        <p class="blog-articles-item-answer">${article.answer}</p>
        <div class="blog-articles-read-block">
          <p>ЧИТАТИ СТАТТЮ</p>
          <img src="../img/button-arrow-white.svg" alt="arrow-image">
        </div>
      </div>
    </div>
  `).join('');

  const sliderBlocks = articles.map(article => `
    <div class="blog-articles-cars-slider-block">
      <div class="blog-articles-info-block-item">
        <img src="${article.carImage}" alt="car-image">
        <div class="blog-articles-item-info-block">
          <p class="blog-articles-item-date">${article.date}</p>
          <p class="blog-articles-item-question">${article.question}</p>
          <p class="blog-articles-item-answer">${article.answer}</p>
          <div class="blog-articles-read-block">
            <p>ЧИТАТИ СТАТТЮ</p>
            <img src="../img/button-arrow-white.svg" alt="arrow-image">
          </div>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <div class="blog-articles">
      <div class="blog-articles-content">
        <div class="h3">${sectionName}</div>
        <div class="blog-articles-info-block">
          ${infoBlock}
        </div>
        <div class="blog-articles-slider-wrapper">
          <div class="blog-articles-cars-slider">
            ${sliderBlocks}
          </div>
        </div>
        <global-button
          id="blog-articles-button"
          text="БЛОГ"
          bgcolor="#7AB8FF"
          imgsrc="../img/button-arrow.svg"
          alignSelf="center"
          href="blog.html"
        >
        </global-button>
      </div>
    </div>
  `;
}

const initSliders = () => {
  if (window.innerWidth < 1024) {
    $('.blog-articles-cars-slider').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '22px',
      dots: true,
      responsive: [
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
};

export function renderBlog(blogData, containerId) {
  const html = generateBlogSection(blogData);
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = html;
    initSliders();
    // window.addEventListener('resize', initSliders);
  }
  else console.error(`Container with ID "${containerId}" not found.`);
}