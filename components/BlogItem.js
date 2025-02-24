// BlogItem.js
class BlogItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const image = this.getAttribute('image') || '';
    const date = this.getAttribute('date') || '';
    const title = this.getAttribute('title') || '';
    const info = this.getAttribute('info') || '';

    this.innerHTML = `
      <div class="blog-item">
        <img class="blog-item-image" src="${image}" alt="${title}">
        <div class="blog-item-info">
          <p class="blog-item-date">${date}</p>
          <p class="blog-item-question">${title}</p>
          <p class="blog-item-answer">${info}</p>
          <div class="blog-item-read-block">
            <p>ЧИТАТИ СТАТТЮ</p>
            <img id="read-article-arrow" src="../img/button-arrow-white.svg" alt="blog-articles-button-arrow-image">
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('blog-item', BlogItem);