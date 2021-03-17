/* 10. Leer un número entero y determinar a cuánto es igual la suma de todos los enteros
comprendidos entre 1 y el número leído.

*/

let numeros = 0;
let inicial = 0;

numeros = parseInt(Math.random() * (15 - 1) + 1);

console.log("Aleatorio; "+numeros);
for (let i = 1; i <= numeros; i++) {
    inicial = inicial + i;
    console.log(inicial);
}

inicial = inicial + numeros;

console.log("Resultado: "+inicial)
