//3. Leer un número entero y mostrar todos los divisores exactos del número comprendidos entre 1 y el número leído.//
let valor = parseInt(prompt("Digite un numero Entero para mostrar los divisores exactos:"));

    let divisores;

    for (divisoress=2;divisores < valor/2; divisores++) {
        if (valor % divisores === 0) {
            console.log(divisores," lo divide ");
        }
    }