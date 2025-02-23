class ApplicationForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.originalContent = '';
    this.digits = ""; // Store phone digits
  }
  
  connectedCallback() {
    this.renderForm();
    this.originalContent = this.shadowRoot.querySelector('.sell-car-form').innerHTML;
    this.setupEventListeners();
  }
  
  renderForm() {
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="../css/style.css">
    <div class="sell-car-form" part="sell-car-form">
        <h2 class="sell-car-title">ПРОДАЙТЕ АВТОМОБІЛЬ ВЖЕ СЬОГОДНІ</h2>
        <form class="sell-car-fields">
        <div class="form-group">
            <label for="name">Ім’я</label>
            <input type="text" id="name" placeholder="Введіть Ім’я" />
        </div>
        <div class="form-group">
            <label for="phone" id="phone-label">
            <span style="color: red;">*</span>
            Телефон
            </label>
            <input type="tel" id="phone" placeholder="Введіть телефон" />
        </div>
        <div class="attach-photo-block">
            <label for="photo" class="attach-photo-label">Прикріпити фотографію</label>
            <input type="file" id="photo" accept="image/*" style="display: none;" />
            <p class="selected-photo-name"></p>
        </div>
        <div style="align-self: center;">
            <global-button
              id="send-application-button"
              text="НАДІСЛАТИ ЗАЯВКУ"
              bgcolor="rgba(34, 34, 39, 1)"
              textcolor="#ffffff"
              imgsrc="../img/send-request-icon.svg"
            ></global-button>
        </div>
        </form>
    </div>
    `;
  }
  
  setupEventListeners() {
    const phoneInput = this.shadowRoot.getElementById("phone");
    const phoneLabel = this.shadowRoot.getElementById("phone-label");
    const sendButton = this.shadowRoot.getElementById("send-application-button");
    const photoInput = this.shadowRoot.getElementById("photo");
    const fileNameElement = this.shadowRoot.querySelector(".selected-photo-name");

    const isPhoneValid = () => phoneInput.value.replace(/[^0-9]/g, "").slice(3).length === 9;

    const updatePhoneLabel = () => {
    const isDefaultOrValid = isPhoneValid() || this.digits === "";
    phoneLabel.innerHTML = isDefaultOrValid
        ? `<span style='color: red;'>*</span>
        Телефон`
        : "* Заповніть обов’язкове поле";
    phoneLabel.classList.toggle("error", !isPhoneValid() && this.digits !== "");
    };

    const formatPhone = () => {
    const padded = this.digits.padEnd(9, "_");
    return `+380 (${padded.slice(0, 2)}) ${padded.slice(2, 5)}-${padded.slice(5, 7)}-${padded.slice(7, 9)}`;
    };

    const updateInput = () => {
    phoneInput.value = formatPhone();
    const pos = phoneInput.value.indexOf("_") === -1 ? phoneInput.value.length : phoneInput.value.indexOf("_");
    phoneInput.setSelectionRange(pos, pos);
    sendButton.setAttribute("bgcolor", "rgba(34, 34, 39, 1)");
    };

    phoneInput.addEventListener("focus", () => {
    updateInput();
    updatePhoneLabel();
    });

    phoneInput.addEventListener("keydown", (e) => {
    if (/^\d$/.test(e.key)) {
        e.preventDefault();
        if (this.digits.length < 9) this.digits += e.key;
        updateInput();
    } else if (e.key === "Backspace") {
        e.preventDefault();
        this.digits = this.digits.slice(0, -1);
        updateInput();
    } else if (!["Tab", "Shift", "Control", "Alt"].includes(e.key)) {
        e.preventDefault();
    }
    });

    sendButton.addEventListener("click", () => {
    if (isPhoneValid()) {
        this.showThankYou();
    } else {
        sendButton.setAttribute("bgcolor", "rgba(190, 190, 190, 1)");
        phoneLabel.innerHTML = "* Заповніть обов’язкове поле";
        phoneLabel.classList.add("error");
        // if (this.digits === "") {
        //   phoneInput.style.color = "rgba(240, 79, 73, 1)";
        //   phoneInput.style.setProperty('color', 'rgba(240, 79, 73, 1)', 'important');
        //   phoneInput.style.setProperty('-webkit-text-fill-color', 'rgba(240, 79, 73, 1)', 'important');
        //   phoneInput.style.setProperty('border-color', 'rgba(240, 79, 73, 1)', 'important');
        //   phoneInput.classList.add("error-placeholder");
        // }
    }
    });

    photoInput.addEventListener("change", (e) => {
    fileNameElement.textContent = e.target.files[0]?.name || '';
    });
  }
  
  showThankYou() {
    const formDiv = this.shadowRoot.querySelector('.sell-car-form');
    formDiv.classList.add('thank-you');
    formDiv.innerHTML = `
    <div class="thank-you-message">
        <h1>ДЯКУЄМО!</h1>
        <span class="success">Ваша заявка успішно відправлена</span>
        <span class="follow-up">Протягом години з Вами зв’яжеться наш менеджер</span>
        <span class="signature">З повагою, TOPVykup</span>
    </div>
    `;
  }
      
  resetForm() {
    this.digits = "";
    this.renderForm();
    const phoneInput = this.shadowRoot.getElementById("phone");
    phoneInput.style.color = "";
    phoneInput.style.removeProperty('-webkit-text-fill-color');
    phoneInput.style.removeProperty('border-color');
    phoneInput.classList.remove("error-placeholder");
    this.setupEventListeners();
  }
}
  
  customElements.define('application-form', ApplicationForm);