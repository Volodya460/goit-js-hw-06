const fontSizeControl = document.querySelector("#font-size-control");
console.log(fontSizeControl.max);
const text = document.querySelector("#text");
console.log(text)


fontSizeControl.addEventListener("input",onInputFontSizeControl);




function onInputFontSizeControl(event) {
  text.style.fontSize = fontSizeControl.value +"px";

  // console.log(event.currentTarget);
}


