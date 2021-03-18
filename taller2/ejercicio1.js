/* Leer 10 enteros, almacenarlos en un vector y determinar en qué posición del vector está el mayor número primo leído.


Entrada: 10 enteros


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

