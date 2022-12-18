const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitFormElement);

function onSubmitFormElement(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Всі поля повинні бути заповнені!Слава УкраЇні!");
  }
  const userEmailPassword = {
    email: email.value,
    password: password.value,
  };
  event.currentTarget.reset();
  console.log(userEmailPassword);
}
