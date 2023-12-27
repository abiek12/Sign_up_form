const form = document.querySelector("form");
const userName = document.querySelector("input[type=text]");
const email = document.querySelector("input[type=email]");
const password = document.querySelector("input[type=password]");

form.addEventListener("submit", onSubmitFunction);

function onSubmitFunction(event) {
  if (userName.value === "" || email.value === "" || password.value === "") {
    event.preventDefault();
    alert("Please fill up the form completly");
    return false;
  }
}
