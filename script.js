const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("button-submit");
const singUpCard = document.getElementById("card-signup");
const successCard = document.getElementById("card-success");

submitBtn.addEventListener("click", () => {
  const inputValue = emailInput.value;

  console.log(inputValue);

  if (inputValue.includes("@gmail.com")) {
    console.log("great");
    // adds class success
  } else {
    console.log("error");
    singUpCard.classList.toggle("hidden");
    successCard.classList.toggle("hidden");
    //adds class error
  }
});
