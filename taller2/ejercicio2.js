/* 1. pedir tres números; si el primero es negativo, debe imprimir el producto de los tres y si no lo es, imprimirá la suma.

*/

let numeros = [];
let cantidadMayor = 0;
let posicion = 0;

for(let i = 0; i<10; i++){
    numeros[i] = parseInt(Math.random() * (15 - 1) + 1);
}

console.log(numeros);

for (let i = 0; i < 10; i++) {
    let numerito = numeros[i];
    let cant_divisores = 0;


    for (let j = 1; j <= numerito; j++) {
        if (numerito % j == 0) {
            cant_divisores = cant_divisores + 1;
        }
    }

    if (cant_divisores == 2){
        console.log(numerito+" es primo");
        if (cantidadMayor < numerito) {
            cantidadMayor = numerito;
            posicion = i + 1;
        }
    }

}

console.log("El número primo mayor es: "+cantidadMayor+" y su posición es: "+posicion);

