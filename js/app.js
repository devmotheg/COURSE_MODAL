/*!
  @author Mohamed Muntasir
  @link https://github.com/devmotheg
  */

/* Form validation */

const FORM_ELE = document.querySelector("form"),
  EMAIL_INPUT = document.querySelector(".email");
EMAIL_ERROR_MSG = document.querySelector(".error-msg");

FORM_ELE.addEventListener("submit", e => {
  if (!isEmail(EMAIL_INPUT.value)) {
    e.preventDefault();
    EMAIL_INPUT.classList.add("display-error");
    EMAIL_ERROR_MSG.classList.add("display-error");
    EMAIL_ERROR_MSG.innerHTML = "Please enter a valid email.";
  }
});

FORM_ELE.addEventListener("input", () => {
  if (isEmail(EMAIL_INPUT.value)) {
    EMAIL_INPUT.classList.remove("display-error");
    EMAIL_ERROR_MSG.classList.remove("display-error");
    EMAIL_ERROR_MSG.innerHTML = "";
  }
});

function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

/* Modal */

const TRIGGER = document.querySelector(".trigger"),
  MODAL = document.querySelector(".modal"),
  CROSS = document.querySelector(".cross");

TRIGGER.addEventListener("click", () => {
  MODAL.classList.add("open");
});

CROSS.addEventListener("click", () => closeModal());

window.addEventListener("click", e => {
  if (e.target === MODAL) closeModal();
});

function closeModal() {
  MODAL.classList.remove("open");
}
