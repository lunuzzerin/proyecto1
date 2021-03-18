/*  3. Calcular el total que una persona debe pagar en un llanta, si el precio por unidad es de $80.000 si se compran menos de 5 llantas y de $70.000 si se compran 5 o más */
let cant_llantas = parseInt(prompt("¿Cuantas llantas desea comprar - recuerde que cada llanta cuesta $80.000"));

let precio_llanta = 80000
let precio_llanta_des = 70000

if (cant_llantas<5) {
    let valor_total= precio_llanta*cant_llantas;
    console.log("El total a pagar es: " + valor_total);
}else {

    let valor_total = precio_llanta_des*cant_llantas;
    console.log ("El total a pagar con descuento es: " + valor_total);
}
