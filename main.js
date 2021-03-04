function ejercicioUno () {
    var numeroUno = prompt("Dame un primer número");
    var numeroDos = prompt("Dame un segundo nùmero");

    var resSuma     = parseFloat(numeroDos)+parseFloat(numeroUno);

    if (numeroDos > numeroUno) {
        var resResta = numeroDos - numeroUno;
    } else {
        var resResta = numeroUno - numeroDos;
    }

    alert("La suma de sus numeros es: "+resSuma+" y la resta: "+resResta);
}

function ejercicioDos () {
    var numeroUno = prompt("Dame un primer número");

    var potenciaDos     = Math.pow(numeroUno, 2);
    var potenciaTres    = Math.pow(numeroUno, 3);

    alert("La potencia cuadrada es: "+potenciaDos+" y su potencia cubica: "+potenciaTres);
}

function ejercicioCuatro () {
    var pepito  = document.getElementById("Pepito").value;
    var jose    = document.getElementById("Jose").value;
    var Carlos  = document.getElementById("Carlos").value;

    document.getElementById("Resultado").value = parseFloat(pepito)+parseFloat(jose)+parseFloat(Carlos);
}
