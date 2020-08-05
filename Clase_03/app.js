// Declarar una variable en el scope global
// Todo aquello en el scope global, está disponible en todos lados del archivo
const name = "Nerd";

////////////////////////////////////////// La vieja forma de declarar funciones!
// Declarar una función
// El scope de la función NO ES GLOBAL y solo está dentro de la función.
function toUpper0(text) {
  const upperCased0 = text.toUpperCase();
  console.log(upperCased0);
}

// Asi se invoca una función
toUpper0(name);

////////////////////////////////////////// La nueva forma de declarar funciones!
// Primera Forma
const toUpper1 = function (text) {
  const upperCased1 = text.toUpperCase();
  console.log(upperCased1);
};

toUpper1(name);

// Segunda forma
const toUpper2 = (text) => {
  const upperCased2 = text.toUpperCase();
  console.log(upperCased2);
};

toUpper2(name);
