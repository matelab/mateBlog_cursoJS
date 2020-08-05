// Declare variable name in the global scope
// Everything from global Scope is avaible in everywhere
const name = "Nerd";

////////////////////////////////////////// The old way to use functions!
// Declare function
// function scope is into the function but is not global
function toUpper0(text) {
  const upperCased0 = text.toUpperCase();
  console.log(upperCased0);
}

// Function invocation
toUpper0(name);

////////////////////////////////////////// The new way to use functions!
// 1st Way
const toUpper1 = function (text) {
  const upperCased1 = text.toUpperCase();
  console.log(upperCased1);
};

toUpper1(name);

// 2nd Way
const toUpper2 = (text) => {
  const upperCased2 = text.toUpperCase();
  console.log(upperCased2);
};

toUpper2(name);
