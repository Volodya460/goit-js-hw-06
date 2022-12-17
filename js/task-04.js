const counterValue = document.querySelector("#value");
const buttonPlusEl = document.querySelector('[data-action="increment"]');
const buttonMinusEl = document.querySelector('[data-action="decrement"]');
console.log(counterValue.textContent);
console.log(buttonPlusEl);
console.log(buttonMinusEl);

buttonPlusEl.addEventListener("click", onClickButtonPlusEl);


function onClickButtonPlusEl(event) {
  counterValue.textContent ++;
};

buttonMinusEl.addEventListener("click", onClickButtonMinusEl);



function onClickButtonMinusEl(event) {
  counterValue.textContent--;
  
}