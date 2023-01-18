const btnContactModal = document.querySelector(".contact_button");
const main = document.getElementById("main");
const submitbtn = document.querySelector(".btn-submit");
const btnCloseModal = document.querySelector(".close-modal");
const modalBg = document.getElementById("contact_modal");
const modal = document.querySelector(".modal");
const formData = document.querySelectorAll(".formData");
const firstName = document.getElementById("prenom");
const lastName = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");
const modalConfirm = document.querySelector(".modal-confirm");
const btnCloseValidateModal = document.querySelector(".close-modal-validate");

btnContactModal.addEventListener("click", displayModal);
//OUVERTURE ET FERMETURE DE LA MODAL

function displayModal() {
  modalBg.style.display = "flex";
  main.setAttribute("aria-hidden", "true");
  modalBg.setAttribute("aria-hidden", "false");
  submitbtn.addEventListener("click", validate);
  firstName.addEventListener("input", firstNameValid);
  lastName.addEventListener("input", lastNameValid);
  email.addEventListener("input", emailValid);
  message.addEventListener("input", messageValid);
  document.getElementById("contact_modal");
  focusModal();
}

function closeModal() {
  resetForm();
  modalBg.style.display = "none";
  main.setAttribute("aria-hidden", "false");
  modalBg.setAttribute("aria-hidden", "true");
  submitbtn.removeEventListener("click", validate);
  firstName.removeEventListener("input", firstNameValid);
  lastName.removeEventListener("input", lastNameValid);
  email.removeEventListener("input", emailValid);
  message.removeEventListener("input", messageValid);
  modal.style.display = "block";
  modalConfirm.style.display = "none";
}

//FERMETURE DE LA MODALE AVEC LE CLAVIER
btnCloseModal.addEventListener("click", closeModal);
btnCloseModal.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    closeModal();
  }
});

//REINITIALISATION DU FORMULAIRE
function resetForm() {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  message.value = "";
  formData.forEach((formData) => (formData.dataset.errorVisible = false));
}

//VALIDATION DU FORMULAIRE
function firstNameValid() {
  if (firstName.checkValidity() !== true) {
    firstName.parentElement.dataset.errorVisible = true;
    return false;
  } else {
    firstName.parentElement.dataset.errorVisible = false;
    return true;
  }
}

function lastNameValid() {
  if (lastName.checkValidity() !== true) {
    lastName.parentElement.dataset.errorVisible = true;
    return false;
  } else {
    lastName.parentElement.dataset.errorVisible = false;
    return true;
  }
}

function emailValid() {
  if (email.checkValidity() !== true) {
    email.parentElement.dataset.errorVisible = true;
    return false;
  } else {
    email.parentElement.dataset.errorVisible = false;
    return true;
  }
}

function messageValid() {
  if (message.checkValidity() !== true) {
    message.parentElement.dataset.errorVisible = true;
    return false;
  } else {
    message.parentElement.dataset.errorVisible = false;
    return true;
  }
}

function validate(e) {
  e.preventDefault();

  if (validForm() == true) {
    validateModal();
    return true;
  } else {
    elementsNotValidated();
    return false;
  }
}

function validForm() {
  if (
    firstNameValid() == true &&
    lastNameValid() == true &&
    emailValid() == true &&
    messageValid() == true
  ) {
    console.log(firstName.value, lastName.value, email.value, message.value);
    return true;
  }
  return false;
}

function validateModal() {
  modal.style.display = "none";
  modalConfirm.style.display = "flex";
  btnCloseValidateModal.addEventListener("click", closeModal);
  btnCloseValidateModal.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      closeModal();
    }
  });
}

function elementsNotValidated() {
  firstNameValid();
  lastNameValid();
  emailValid();
  messageValid();
}

function focusModal() {
  // add all the elements inside modal which you want to make focusable
  const focusableElements = document.querySelector(".modal").querySelectorAll('[tabindex]');
  console.log(focusableElements)

  const firstFocusableElement = (focusableElements)[0]; // get first element to be focused inside modal

  const focusableContent = (focusableElements);
  console.log(focusableContent)
  const lastFocusableElement = focusableContent[focusableContent.length -1]; // get last element to be focused inside modal
  console.log(lastFocusableElement)

  document.addEventListener("keydown", function (e) { 
    let isTabPressed = e.key === "Tab" || e.keyCode === 9;
    console.log(document.activeElement)
    console.log(lastFocusableElement)
    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      console.log("shift")
      // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else {
      console.log("tab")
      // if tab key is pressed
      if (document.activeElement === lastFocusableElement) {
        console.log("toto")
        // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  });

  firstFocusableElement.focus();
}
