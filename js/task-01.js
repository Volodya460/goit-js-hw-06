const category = document.querySelectorAll(".item");
console.log(`Number of categories:${category.length}`);

category.forEach((item) => {
  const categoryTitle = item.querySelector("h2");
  const categoryList = item.querySelectorAll("li");

  console.log(`Category:${categoryTitle.textContent}`);
  console.log(`Elements:${categoryList.length}`);
});
// `````````````````````````````````111111111112343534----------------------------------
