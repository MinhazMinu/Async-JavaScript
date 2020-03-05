/*

callback aysc = Old way

*/
// callback Hell
function getRecipe() {
  setTimeout(() => {
    const recipeID = [100, 300, 400, 500];
    console.log(recipeID);
    setTimeout(
      id => {
        const recipe = { title: "tomato pasta", publisher: "minhaz" };
        console.log(`${id}: ${recipe.title}`);
        setTimeout(
          publisher => {
            const recipe2 = { title: "milky pasta", publisher: "minhaz" };
            console.log(`${id}: ${recipe2.title}`);
          },
          1000,
          recipe.publisher
        );
      },
      2000,
      recipeID[2]
    );
  }, 2000);
}
getRecipe();
