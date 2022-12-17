 const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEL = document.querySelector('#ingredients');


ingredientsEL.append(...ingredients.map(item => {
  let itemList = document.createElement("li");
  itemList.textContent = item;
  // console.log(item);
  return itemList;

}));





// const potatoesEL = document.createElement('li');
// potatoesEL.textContent = "'Potatoes'";
// potatoesEL.classList = "item";
// // console.log(potatoesEL);

// const mushroomsEl = document.createElement("li");
// mushroomsEl.textContent = "'Mushrooms'";
// mushroomsEl.classList = "item";


// const garlicEl = document.createElement("li");
// garlicEl.textContent = "'Garlic'";
// garlicEl.classList = "item";


// const tomatosEL = document.createElement("li");
// tomatosEL.textContent = "'Tomatos'";
// tomatosEL.classList = "item";


// const herbsEL = document.createElement("li");
// herbsEL.textContent = "'Herbs'";
// herbsEL.classList = "item";


// const condimentsEL = document.createElement("li");
// condimentsEL.textContent = "'Condiments'";
// condimentsEL.classList = "item";
// // console.log(condimentsEL);

// ingredientsEL.append(
//   potatoesEL,
//   mushroomsEl,
//   garlicEl,
//   tomatosEL,
//   herbsEL,
//   condimentsEL
// );





