/* 12. Leer un número entero de 3 dígitos y determinar si tiene el dígito 1.

*/

let numero = '0';
let digito = 0;
let pos = 1;

numero = parseInt(Math.random() * (1000 - 99) + 99);
// digito1 = numero.toString().substring(0,1);

console.log("Aleatorio; "+numero);

for (let i = 0; i <= 2; i++) {
    digito = numero.toString().substring(i, pos++)
    console.log("Digito "+i+": "+digito);
    if (digito ==  1) {
        console.log("El dígito del indice: "+i+" es igual a uno");
    }
}