/*
    5. Almacenar en un vector de 10 posiciones los 10 números primos comprendidos entre 100 y 300. Luego mostrarlos en pantalla.
*/

//1. creamos el vector vacío.
let arrayNumbers = [];
let numero = 0;
let numerito = 100;
let posicion = 0;
let cant_divisores = 0;

//2. llenamos el vector
for(let i = 0; i < 10; i++){

    for (let j = 100; j <= numerito; j++) {
        if (numerito % j == 0) {
            cant_divisores = cant_divisores + 1;
            arrayNumbers.push(cant_divisores);
        }
    }
}

console.log(arrayNumbers);
