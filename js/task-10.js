function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputValue = document.querySelector("#controls>input");
console.log(inputValue);
const buttonCreate = document.querySelector("button[data-create]");
console.log(buttonCreate);
const buttonDestroy = document.querySelector("button[data-destroy]");
console.log(buttonDestroy);
 
const boxCreat = document.querySelector("#boxes");
console.log(boxCreat);



buttonCreate.addEventListener('click', () => {
  
  let creatNewBox = createBoxes(inputValue.value)
    boxCreat.append(...creatNewBox)
});

function createBoxes(amount) {
  const elementsToCreat = [];
  for (let i = 0; i < amount; i++){
    
    const div = document.createElement('div')
    div.style.height = `${30 + 10*i }px`;
    div.style.width = `${30 + 10*i }px`;
    div.style.backgroundColor = getRandomHexColor();

    elementsToCreat.push(div);
  }
  return elementsToCreat;

}


buttonDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxCreat.innerHTML=""
}