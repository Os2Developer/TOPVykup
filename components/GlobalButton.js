class HeroButton extends HTMLElement {
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
      if (wrapper) {
        wrapper.style.setProperty('--bg-color', newValue); // Update bg color
      }
    }
  }

  connectedCallback() {
    // Read attributes or set default values
    const text = this.getAttribute('text') || 'Button';
    const bgColor = this.getAttribute('bgcolor') || '#7AB8FF';
    const textColor = this.getAttribute('textcolor') || '#000';
    const imgSrc = this.getAttribute('imgsrc') || '../img/button-arrow.svg';
    const href = this.getAttribute('href') || '#';
    const width = this.getAttribute('width');
    const customId = this.getAttribute('id');
    const disableAnimation = this.getAttribute('disable-animation') === 'true';
    const alignSelf = this.getAttribute('align-self');
  
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    // Path relative to the HTML that loads it
    linkElem.setAttribute('href', '../css/style.css');

    const wrapper = document.createElement('a');
    wrapper.href = href;
    wrapper.classList.add('global-btn');
    wrapper.style.setProperty('--bg-color', bgColor);
    wrapper.style.width = width;
    wrapper.style.color = textColor;

    if (alignSelf) {
      this.style.alignSelf = alignSelf;
    }
  
    if (customId) {
      wrapper.id = customId;
    }

    const spanElem = document.createElement('span');
    spanElem.textContent = text;

    const imgElem = document.createElement('img');
    imgElem.src = imgSrc;
    imgElem.alt = 'button-arrow';

    wrapper.appendChild(spanElem);
    wrapper.appendChild(imgElem);

    // Add external CSS and markup into the shadow DOM
    this.shadowRoot.appendChild(linkElem);
    this.shadowRoot.appendChild(wrapper);

    if (!disableAnimation) {
      wrapper.addEventListener('mouseenter', () => {
        // Measure the width of the button, text, and image
        const btnWidth = wrapper.clientWidth;
        const textWidth = spanElem.clientWidth;
        const imgWidth = imgElem.clientWidth;
        
        // Get the padding from the button and image styles
        const btnStyle = window.getComputedStyle(wrapper);
        const paddingLeft = parseFloat(btnStyle.paddingLeft);
        const paddingRight = parseFloat(btnStyle.paddingRight);
        const imgStyle = window.getComputedStyle(imgElem);
        const marginLeft = parseFloat(imgStyle.marginLeft);

        // The initial offset of the image from the left edge of the button:
        const leftOffset = paddingLeft + marginLeft;

        // Calculate the translation so that the right edge of the image aligns with the right edge of the button:
        const targetX = btnWidth - textWidth - imgWidth - leftOffset - paddingRight;
        imgElem.style.transform = `translateX(${targetX}px)`;
      });

      wrapper.addEventListener('mouseleave', () => {
        imgElem.style.transform = 'translateX(0)';
      });
    }
  }
}

// Register the custom element with the name <global-button>
customElements.define('global-button', HeroButton);
