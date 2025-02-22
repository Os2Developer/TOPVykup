class ApplicationFormPopUp extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../css/style.css">
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
    }
  
    open() {
      this.popup.style.display = 'flex';
      requestAnimationFrame(() => this.popup.classList.add('visible'));
    }
  
    close() {
      this.popup.classList.remove('visible');
      this.popup.addEventListener('transitionend', () => {
        if (!this.popup.classList.contains('visible')) {
          this.popup.style.display = 'none';
        //   this.form.resetForm();  Optional: can show form again on close
        }
      }, { once: true });
    }
  }
  
  customElements.define('application-form-popup', ApplicationFormPopUp);