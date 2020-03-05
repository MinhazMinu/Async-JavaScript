/*

sync  = code execute line by line ..wait until execution processed finished.
Then move to next process.

*/

// sync

const second = () => {
  console.log("2nd");
};

const first = () => {
  console.log(" first");
  second();
  console.log("end");
};

first();
/*
result:
first
second
end
*/

// async code

const second6 = () => {
  setTimeout(() => {
    console.log("2nd");
  }, 2000);
};

const first6 = () => {
  console.log(" first");
  second6();
  console.log("end");
};

first6();

/*
result:
first 
end
second
*/
