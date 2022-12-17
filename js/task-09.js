function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());


const buttonChangColor = document.querySelector(".change-color");
console.log(buttonChangColor);
const nameColor = document.querySelector(".color");
console.log(nameColor);
 

buttonChangColor.addEventListener("click", onClickButtonChang);



function onClickButtonChang(event) {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;

console.log(color)
nameColor.textContent = color;


}


