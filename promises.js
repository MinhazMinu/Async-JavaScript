/*
reduce callback hell  ES6 introduce promises

promises= Object thats keeps track about weather a certain event has happened already or not .
also determined  what will happens after the event has happened
*/

const getId = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([100, 200, 300, 400]);
  }, 2000);
});

// function receive id and return promises

const getRecipe = recID => {
  return new Promise((resolve, reject) => {
    setTimeout(
      ID => {
        const recipe = { title: "tomato pasta", publisher: "minhaz" };
        resolve(`${ID}: ${recipe.title}`);
      },
      2000,
      recID
    );
  });
};

const getRelated = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout(
      pub => {
        const recipe2 = { title: "milky pasta", publisher: "minhaz" };
        resolve(`${pub}: ${recipe2.title}`);
      },
      2000,
      publisher
    );
  });
};

getId
  .then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[2]);
  })
  .then(recipe => {
    console.log(recipe);
    return getRelated("minhaz");
  })
  .then(recipe => {
    console.log(recipe);
  })
  .catch(error => {
    console.log(error);
  });
