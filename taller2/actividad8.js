/* pídale al usuario 2 números, si el primero de los dos números es negativo, sume los números y muestre el resultado, y si por el contrario es positivo, réstelos y muestre el resultado */

let numero1 = parseInt(prompt("Ingrese un numero"));

let numero2 = parseInt(prompt("Ingrese otro numero"));

if (numero1<0) {
    let valor_total = numero1+numero2;
    console.log("El valor de la suma es: " + valor_total);
}else{
let valor_total = numero1-numero2;
console.log("El valor de la resta es: " + valor_total);

}