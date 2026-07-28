const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("button-submit");
const singUpCard = document.getElementById("card-signup");
const successCard = document.getElementById("card-success");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");
const form = document.getElementById("form");
const dismissBtn = document.getElementById("dismiss-button");

const handleSubmit = (event) => {
  event.preventDefault();
  const inputValue = emailInput.value;

  if (inputValue.includes("@gmail.com")) {
    singUpCard.classList.add("hidden");
    successCard.classList.remove("hidden");
    emailInput.classList.remove("error");
    successMessage.textContent = inputValue;
    errorMessage.classList.add("hidden");
  } else {
    errorMessage.classList.remove("hidden");
    emailInput.classList.add("error");
  }
};

const handleReturn = () => {
  singUpCard.classList.remove("hidden");
  successCard.classList.add("hidden");
  emailInput.value = "";
};

form.addEventListener("submit", handleSubmit);
dismissBtn.addEventListener("click", handleReturn);
