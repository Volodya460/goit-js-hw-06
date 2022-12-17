const inputNameEL = document.querySelector("#name-input");
// console.log(inputNameEL);
const outputNameEl = document.querySelector('#name-output');
// console.log(outputNameEl);


inputNameEL.addEventListener("input", (event) => {
  outputNameEl.textContent = event.currentTarget.value;
});



