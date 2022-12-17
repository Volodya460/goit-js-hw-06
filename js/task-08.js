const form = document.querySelector(".login-form");
console.log(form.mail);

form.addEventListener("submit", onSubmitFormElement);


function onSubmitFormElement(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!Слава УкраЇні!");
  }
  const userEmailPassword = {
    email: email.value,
    password: password.value,
  };
  event.currentTarget.reset()
  console.log (userEmailPassword);
};

