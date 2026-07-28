const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("button-submit");
const singUpCard = document.getElementById("card-signup");
const successCard = document.getElementById("card-success");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");

submitBtn.addEventListener("submit", () => {
  const inputValue = emailInput.value;

  if (inputValue.includes("@gmail.com")) {
    singUpCard.classList.toggle("hidden");
    successCard.classList.toggle("hidden");
    successMessage.textContent = inputValue;
  } else {
    console.log("error");
    errorMessage.classList.toggle("hidden");
    emailInput.classList.toggle("error");
  }
});
