const inputNameEL = document.querySelector("#name-input");
// console.log(inputNameEL);
const outputNameEl = document.querySelector('#name-output');
// console.log(outputNameEl);


inputNameEL.addEventListener("input", (event) => {
  const value = event.target.value.trim();
  
  outputNameEl.textContent = value ? value : "Anonymous";
});






