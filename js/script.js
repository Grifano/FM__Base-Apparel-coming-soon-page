const form = document.getElementById("signUpForm");
const email = document.getElementById("email");
const errorMsg = document.getElementById("errorMsg");
//? const isValid = window.getComputedStyle(email, ":invalid");

form.addEventListener("submit", (e) => {
  if (email.value !== "") {
    e.submit();
  } else {
    e.preventDefault();
    errorMsg.className = "show";
  }
});
