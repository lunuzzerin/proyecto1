//2. Leer un número entero y mostrar todos los pares comprendidos entre 1 y el número leído.//

let valor = parseInt(prompt("Ingrese un número para mostrar los pares del mismo:"));

let i = 2;

while (i <= valor) {
        console.log("<br>" + i);
        i+=2
}