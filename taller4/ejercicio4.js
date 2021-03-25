/* 4. Cargar un vector de 10 posiciones con los 10 primeros elementos de la serie de Fibonacci y mostrarlo en pantalla.
*/

//1. creamos el vector vacío.
let arrayNumbers = [];
let numero = 0;
let posicion = 0;

//2. llenamos el vector
for(let i=0; i<10; i++){
    arrayNumbers[i] = parseInt(Math.random() * (100 - 0) + 0);
}

console.log(arrayNumbers);

Array.prototype.sortNumbers = function(){
    return this.sort(
        function(a,b){
            return a - b
        }
    );
}

console.log(arrayNumbers.sortNumbers())

for (let i = 0; i < arrayNumbers.length; i++) {
    arrayNumbers[i] = arrayNumbers[i] + arrayNumbers[i + 1];
}

for (let i = 2; i < arrayNumbers.length; i++) {
    arrayNumbers[i] = arrayNumbers[i - 2] + arrayNumbers[i - 1];
}

console.log(arrayNumbers);