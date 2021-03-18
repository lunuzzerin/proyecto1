/* dados 2 números, decir cual es el número mayor */

let numero1 = parseInt(prompt("Ingrese un número"));
let numero2 = parseInt(prompt("Ingrese otro número"));

if (numero1<numero2) {
    console.log("El mayor es el numero: " + numero2);   
}
else {

    console.log("El mayor es el numero: " + numero1);
}