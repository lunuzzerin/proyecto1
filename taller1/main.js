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

function ejercicioCinco (accion = '0') {
    var pepito1         = document.getElementById("pepito5").value;
    var anhoNacimiento  = 2021 - pepito1;

    if (accion == 0) {
        document.getElementById("resultado5").value = anhoNacimiento;
    } else if (accion == 1) {
        alert("El año de nacimiento es: "+anhoNacimiento);
    }

}

function ejercicioSeis (accion = 0) {
    var altura  = document.getElementById("altura6").value;
    var base    = document.getElementById("base6").value;

    var resultado = base * altura;

    if (accion == 0) {
        document.getElementById("resultado6").value = resultado;
    } else if (accion == 1) {
        alert("El Area del rectangulo es de: "+resultado);
    }

}

function ejercicioSiete (accion = '0') {
    var dinero  = document.getElementById("dinero7").value;
    var entrada = document.getElementById("entrada7").value;

    var resultado = dinero - entrada;

    if (accion == 0) {
        document.getElementById("resultado7").value = resultado;
    } else if (accion == 1) {
        alert("El dinero restante para entrar a cine es: $ "+resultado);
    }
}

function ejercicioOcho (accion = '0') {
    var dinero  = document.getElementById("dinero8").value;
    var entrada = document.getElementById("entrada8").value;

    var resultado = dinero / entrada;

    if (accion == 0) {
        document.getElementById("resultado8").value = parseInt(resultado);
    } else if (accion == 1) {
        alert("Puedes invitar a "+parseInt(resultado)+" persona(s) al estadio.");
    }
}