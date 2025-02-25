import { manageBodyScroll } from '../utils/body-scroll.js';

class ApplicationFormPopUp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="../css/styles.css">
      <div class="popup">
        <img
          src="../img/pop-up-close-icon.svg"
          alt="Close icon"
          class="pop-up-close-icon"
        >
        <div class="popup-content">
          <button class="close-btn"><img src="../img/close-application-form-button.svg" alt="Close"></button>
          <application-form></application-form>
        </div>
      </div>
    `;

    this.popup = this.shadowRoot.querySelector('.popup');
    this.closeBtn = this.shadowRoot.querySelector('.close-btn');
    this.mobileCloseBtn = this.shadowRoot.querySelector('.pop-up-close-icon');
    this.form = this.shadowRoot.querySelector('application-form');
    
    this.closeBtn.addEventListener('click', () => this.close());
    this.mobileCloseBtn.addEventListener('click', () => this.close());

    // Close popup when clicking outside .popup-content but within .popup
    this.popup.addEventListener('click', (e) => {
      if (e.target === this.popup && !this.popup.querySelector('.popup-content').contains(e.target)) {
        this.close();
      }
    });
  }

  open() {
    this.popup.style.display = 'flex';
    requestAnimationFrame(() => {
      this.popup.classList.add('visible');
      manageBodyScroll(this.popup, 'disable');
    });
  }

  close() {
    this.popup.classList.remove('visible');
    this.popup.addEventListener('transitionend', () => {
      if (!this.popup.classList.contains('visible')) {
        this.popup.style.display = 'none';
        // this.form.resetForm(); // Optional: Reset form if needed
        manageBodyScroll(this.popup, 'enable');
      }
    }, { once: true });
  }
}

customElements.define('application-form-popup', ApplicationFormPopUp);
