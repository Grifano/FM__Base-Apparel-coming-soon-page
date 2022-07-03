const form = document.getElementById("signUpForm");
const email = document.getElementById("email");
const errorMsg = document.getElementById("errorMsg");
const regex = /^[a-zA-Z]+@[a-zA-Z.-]+.[a-z]{2,4}$/;

form.addEventListener("submit", (e) => {
  const isValid = regex.test(email.value);

  isValid ? e.submit() : e.preventDefault(), (errorMsg.className = "show");
});
