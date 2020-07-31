// La vieja forma de declarar variables en JS

var life = 100; // Esto es un tipo de dato númerico
life = life - 10; // 90
life = life / 10; // 10

var name = "Jpromanonet"; // Este es un tipo de dato en cadena o "STRING"

var checkout = true; // Este es un booleano

var box; // Variable indefinida

var box2 = null; // Variable sin valor

// Console.log muestra valores en la consola de desarrollo.
console.log(life);
console.log(name);
console.log(checkout);

// La nueva forma de declarar variables en JS

// Const por "constante" significa que una variable no puede ser cambiada
// Tampoco puede ser declarada de nuevo
const clife = 100;

// Si queres crear una variable y modificarla luego, usas "let"
let letLife = 100;

letLife = letLife - 50;

console.log(clife);
console.log(letLife);
