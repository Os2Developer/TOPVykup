class GlobalButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  // Define which attributes to observe
  static get observedAttributes() {
    return ['bgcolor']; // Watch for bgcolor changes
  }

  // Called when an observed attribute changes
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'bgcolor' && oldValue !== newValue) {
      const wrapper = this.shadowRoot.querySelector('.global-btn');
      if (wrapper) wrapper.style.setProperty('--bg-color', newValue);
    }
  }

  connectedCallback() {
    const text = this.getAttribute('text') || 'Button';
    const bgColor = this.getAttribute('bgcolor') || '#7AB8FF';
    const textColor = this.getAttribute('textcolor') || '#000';
    const imgSrc = this.getAttribute('imgsrc') || '../img/button-arrow.svg';
    const href = this.getAttribute('href') || '#';
    const width = this.getAttribute('width');
    const customId = this.getAttribute('id');
    const disableAnimation = this.getAttribute('disable-animation') === 'true';
    const alignSelf = this.getAttribute('align-self');
    const openPopUp = this.getAttribute('openPopUp') === 'true'; // Default false

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="../css/style.css">
      <a class="global-btn" href="${href}" style="color: ${textColor}; --bg-color: ${bgColor}; ${width ? `width: ${width};` : ''} ${customId ? `id="${customId}"` : ''}">
        <span>${text}</span>
        <img src="${imgSrc}" alt="button-arrow">
      </a>
    `;

    const wrapper = this.shadowRoot.querySelector('.global-btn');
    if (alignSelf) this.style.alignSelf = alignSelf;

    if (!disableAnimation) {
      wrapper.addEventListener('mouseenter', () => {
        const btnWidth = wrapper.clientWidth;
        const textWidth = wrapper.querySelector('span').clientWidth;
        const imgWidth = wrapper.querySelector('img').clientWidth;
        const { paddingLeft, paddingRight } = window.getComputedStyle(wrapper);
        const marginLeft = parseFloat(window.getComputedStyle(wrapper.querySelector('img')).marginLeft);
        const leftOffset = parseFloat(paddingLeft) + marginLeft;
        const targetX = btnWidth - textWidth - imgWidth - leftOffset - parseFloat(paddingRight);
        wrapper.querySelector('img').style.transform = `translateX(${targetX}px)`;
      });

      wrapper.addEventListener('mouseleave', () => {
        wrapper.querySelector('img').style.transform = 'translateX(0)';
      });
    }

    if (openPopUp) {
      wrapper.addEventListener('click', () => {
        let popup = document.querySelector('application-form-popup');
        if (!popup) {
          popup = document.createElement('application-form-popup');
          document.body.appendChild(popup);
        }
        popup.open();
      });
    }
  }
}

customElements.define('global-button', GlobalButton);