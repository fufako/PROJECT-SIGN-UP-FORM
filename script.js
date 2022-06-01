const inputs = document.querySelectorAll("input")
for (input of inputs) {
  input.addEventListener("focusout", checkIfValid)
}
const body = document.body
function checkIfValid(e) {
  if (
    (e.target.value === "" || e.target.value == null) &&
    e.target.id !== "confirm_password"
  ) {
    e.target.nextElementSibling.textContent =
      e.target.previousElementSibling.textContent + " can not be empty"
  }

  if (e.target.id === "mail") {
    if (e.target.value.match(/^\S+@\S+\.\S+$/)) {
      e.target.nextElementSibling.textContent =
        e.target.previousElementSibling.textContent + " looks good 😁"
    } else {
      e.target.nextElementSibling.textContent =
        e.target.previousElementSibling.textContent + " format is invalid"
    }
  } else if (e.target.id === "phone_number") {
    if (e.target.value.replaceAll(" ", "").match(/\d{9}/)) {
      e.target.nextElementSibling.textContent =
        e.target.previousElementSibling.textContent + " looks good 😁"
    } else {
      e.target.nextElementSibling.textContent =
        e.target.previousElementSibling.textContent +
        " format is invalid example: 123 456 789"
    }
  }
}
