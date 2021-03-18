/* Felipe va al supermercado a comprar su mercado mensual, el supermercado ofrece un 20% de descuento si la compra es mayor a 100.000 pesos, pídale al usuario el valor de compra, y si es mayor a 100.000 , dele el 20% de descuento y muestre el valor final a pagar
*/

let valor_total = parseInt(prompt("Ingrese el valor total del mercado"));

if ( valor_total>=100000  ) {
    let descuento = valor_total * 0.20;
    console.log("El descuento es de: " + descuento);
    let valor_final = valor_total-descuento;
    console.log("El valor a pagar con el descuento de 20% aplicado es de: " + valor_final);
} else {
 console.log("Usted no aplica al descuento y su valor a pagar es: " + valor_total);
}