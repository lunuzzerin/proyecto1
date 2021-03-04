function ejercicioUno () {
    var numeroUno = prompt("Dame un primer número");
    var numeroDos = prompt("Dame un segundo nùmero");

    var resSuma     = parseFloat(numeroDos)+parseFloat(numeroUno);

    if (numeroDos > numeroUno) {
        var resResta = numeroUno - numeroDos;
    } else {
        var resResta = numeroDos - numeroUno;
    }

    alert("La suma de sus numeros es: "+resSuma+" y la resta: "+resResta);
}

function ejercicioDos () {
    var numeroUno = prompt("Dame un primer número");

    var potenciaDos     = Math.pow(numeroUno, 2);
    var potenciaTres    = Math.pow(numeroUno, 3);

    alert("La potencia cuadrada es: "+potenciaDos+" y su potencia cubica: "+potenciaTres);
}

function ejercicioTres () {
    var numeroNinhos = prompt("Indique el numero de niños");
    var numeroNinhas = prompt("Indique el numero de niñas");

    var totalEstudiantes = parseFloat(numeroNinhas)+parseFloat(numeroNinhos);

    var porNinhas = (numeroNinhas*100)/totalEstudiantes;
    var porNinhos = (numeroNinhos*100)/totalEstudiantes;


    alert("El porcentaje de niñas es de: "+porNinhas+"% y el de niños es de: "+porNinhos+"% para un total de: "+totalEstudiantes+" estudiantes.");
}

function ejercicioCuatro () {
    var pepito  = document.getElementById("Pepito").value;
    var jose    = document.getElementById("Jose").value;
    var Carlos  = document.getElementById("Carlos").value;

    document.getElementById("Resultado").value = parseFloat(pepito)+parseFloat(jose)+parseFloat(Carlos);
}
