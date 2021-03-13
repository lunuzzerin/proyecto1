function ejercicioUno () {
    var numeroUno   = prompt("Dame un primer número");
    var numeroDos   = prompt("Dame un segundo nùmero");
    var numeroTres  = prompt("Dame un tercer numero");

    if (numeroUno < 0) {
        var resProducto = numeroUno * numeroDos * numeroTres;
        alert("El Producto de los número es: "+resProducto);

    } else {
        var resSuma = parseFloat(numeroUno) + parseFloat(numeroDos) + parseFloat(numeroTres);
        alert("La suma de sus numeros es: "+resSuma);
    }

}

function ejercicioDos () {
    //Leer 10 enteros, almacenarlos en un vector y determinar en qué posición del vector está el mayor número par leído.

    var numeros = [];

    for(let i=0; i<10; i++){
        numeros[i] = parseInt(Math.random() * (100 - 0) + 0);
    }

    console.log(numeros);

    var numeroMayor = 0;
    var posicionMayor = 0

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > numeroMayor && numeros[i]%2 == 0) {
            numeroMayor = numeros[i];
            posicionMayor = i + 1;
        }
    }

    console.log("Su número mayor es: "+numeroMayor+" y su posición es: "+posicionMayor)
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