/* 11. Leer un número entero de dos dígitos y mostrar en pantalla todos los enteros comprendidos entre un dígito y otro.

*/

let numero = '0';
let digito1 = 0;
let digito2 = 0;
let inicial = 0;

numero = parseInt(Math.random() * (99 - 10) + 10);
digito1 = numero.toString().substring(0,1);
digito2 = numero.toString().substring(1,2);
console.log("Aleatorio; "+numero);

console.log("Digito: "+digito1+" Digito 2: "+digito2);

for (let i = 1; i <= digito1; i++) {
    console.log("Enteros Dígito 1: "+i);
}

for (let i = 1; i <= digito2; i++) {
    console.log("Enteros Dígito 2: "+i);
}