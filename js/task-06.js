const inputEl = document.querySelector("#validation-input");




// inputEl.addEventListener("blur", (event) => {
//    console.log(event.currentTarget);
//   if (event.currentTarget.value.length === 6) {
//     return inputEl.classList = "valid";
//   }
  
//      return inputEl.classList = "invalid"; 
 
// });





inputEl.addEventListener("blur", (event) => {
  const inputArr = event.currentTarget;
  const inputLengthMustBe = Number(inputArr.getAttribute("data-length"));
  inputEl.classList.remove("invalid", "valid");
  if (inputArr.value.length === inputLengthMustBe) {

    return inputEl.classList.add("valid");
  }

  return (inputEl.classList.add("invalid"));
});





