/*   Solicite a carlos la cantidad de dinero que tiene en su bolsillo, si tiene menos de 1800, no puede subirse al bus, si tiene más de 1800 si puede subirse al bus  */
let dinero_carlos = parseInt(prompt("Ingrese la cantidad de dinero que tenga en su bolsillo"));

if (dinero_carlos<1800 ) {
    console.log("Usted es pobre, no se suba al bus a pasar penas maricas, feliz dia");
} else {
    console.log("Puedes ingresar al bus sin miedo a que te jusguen");

}
