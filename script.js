const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("button-submit");
const singUpCard = document.getElementById("card-signup");
const successCard = document.getElementById("card-success");
const errorMessage = document.getElementById("error-message");

submitBtn.addEventListener("click", () => {
  const inputValue = emailInput.value;

  console.log(inputValue);

  if (inputValue.includes("@gmail.com")) {
    console.log("great");
    singUpCard.classList.toggle("hidden");
    successCard.classList.toggle("hidden");
    // adds class success

  } else {
    console.log("error");
    errorMessage.classList.toggle("hidden");
    emailInput.classList.toggle("error")


    //adds class error
  }
});
