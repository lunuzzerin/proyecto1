/* 2. En la tienda de don juan, usted va y compra frutas, Solicite al usuario el valor total de compra, debe ofrecer un 15 % de descuento si el valor de compra del mercado es mayor o igual a 20.000. al final debe indicar el valor total de la compra.
*/ 

let valor_total = parseInt(prompt("Ingrese el valor total de la compra"));

if ( valor_total>=20000  ) {
    let descuento = valor_total * 0.15;
    console.log("El descuento es de: " + descuento);
    let valor_final = valor_total-descuento;
    console.log("El valor a pagar con el descuento de 15% aplicado es de: " + valor_final);
} else {
 console.log("Usted no aplica al descuento y su valor a pagar es: " + valor_total);
}