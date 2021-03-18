/*  1. pedir tres números; si el primero es negativo, debe imprimir el producto de los tres y si no lo es, imprimirá la suma.*/

let numero1 = parseInt(prompt("Ingrese el primer número"));
let numero2 = parseInt(prompt("Ingrese el segundo número"));
let numero3 = parseInt(prompt("Ingrese el tercer número"));

if (numero1 <0) {
    let valor_final = numero1*numero2*numero3;
    console.log("El producto es " + numero1 + " * " + numero2 + " * " + numero3 + " = " +  valor_final);
}else{

valor_final = numero1+numero2+numero3;
console.log("La suma es " + numero1 + " + " + numero2 + " + " + numero3 + " = " +  valor_final);
}