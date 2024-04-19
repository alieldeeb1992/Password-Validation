//catch my elements
const eyeEl = document.querySelector(".fa-eye");
const myPass = document.querySelector(".pass");
const validationListContainer = document.querySelector(".list");
const myValidationElements = document.querySelectorAll(".fa-xmark");
const specialP = document.querySelector(".special");
//show validation list when focusing on input
myPass.addEventListener("focus", () => {
  validationListContainer.style.transition = ".5s";
  validationListContainer.style.opacity = "1";
  validationListContainer.style.transform = "translateY(0px)";

  specialP.style.transition = ".5s";
  specialP.style.opacity = "1";
});
myPass.addEventListener("blur", () => {
  validationListContainer.style.transition = ".5s";
  validationListContainer.style.opacity = "0";
  validationListContainer.style.transform = "translateY(20px)";

  specialP.style.opacity = "0";
});
//eye function
eyeEl.addEventListener("click", () => {
  eyeEl.classList.toggle("fa-eye");
  eyeEl.classList.toggle("fa-eye-slash");
  if (eyeEl.classList.contains("fa-eye")) {
    myPass.type = "password";
  } else {
    myPass.type = "text";
  }
});
let validation = [
  {
    valid: /.{8,}/,
  },
  {
    valid: /[A-Z]/,
  },
  {
    valid: /[a-z]/,
  },
  {
    valid: /[0-9]/,
  },
  {
    valid: /[^0-9a-zA-Z]/,
  },
];
//validation function
myPass.addEventListener("keyup", () => {
  validation.forEach((element, index) => {
    let trueOrFalse = element.valid.test(myPass.value);
    if (trueOrFalse) {
      myValidationElements[index].classList.remove("fa-xmark");
      myValidationElements[index].classList.add("fa-check");
    } else if (!trueOrFalse) {
      myValidationElements[index].classList.add("fa-xmark");
      myValidationElements[index].classList.remove("fa-check");
    }
  });
});
