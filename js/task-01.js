


const category = document.querySelector('#categories')

// console.log(category);

const quantityCategory = category.children; 
console.log(`Number of categories:${quantityCategory.length}`);


const animalsList = quantityCategory[0].lastElementChild;
// console.log(animalsList.children);

const productsList = quantityCategory[1].lastElementChild;
// console.log(productsList.children.length);
 
const technologiesList = quantityCategory[2].lastElementChild;
// console.log(technologiesList.children.length);

// console.log(quantityCategory[1]);

const titleAnimals = document.querySelectorAll('h2')

console.log(`Category:${titleAnimals[0].textContent}`);
console.log(`Elements:${animalsList.children.length}`);


console.log(`Category:${titleAnimals[1].textContent}`);
console.log(`Elements:${productsList.children.length}`);

console.log(`Category:${titleAnimals[2].textContent}`);
console.log(`Elements:${technologiesList.children.length}`);