// EJERCICIO 1: SISTEMA DE ECUACIONES LINEALES

document.getElementById("formSistema").addEventListener("submit", function(event) {

    event.preventDefault();

    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);
    const d = Number(document.getElementById("d").value);
    const e = Number(document.getElementById("e").value);
    const f = Number(document.getElementById("f").value);

    const determinante = a * e - b * d;

    let mensaje = "";

    if (determinante !== 0) {

        const x = (c * e - b * f) / determinante;
        const y = (a * f - c * d) / determinante;

        mensaje =
            "Solución del sistema:<br>" +
            "x = " + x.toFixed(4) + "<br>" +
            "y = " + y.toFixed(4);

    } else {

        mensaje =
            "El sistema no tiene una solución única. " +
            "Puede no tener solución o tener infinitas soluciones.";

    }

    document.getElementById("resultadoSistema").innerHTML = mensaje;

});


// EJERCICIO 2: CALCULADORA DE DESCUENTOS

document.getElementById("formDescuento").addEventListener("submit", function(event) {

    event.preventDefault();

    const precio = Number(document.getElementById("precio").value);
    const porcentaje = Number(document.getElementById("porcentaje").value);

    const resultado = document.getElementById("resultadoDescuento");

    if (precio < 0 || porcentaje < 0 || porcentaje > 100) {

        resultado.textContent = "Introduce valores válidos.";

    } else {

        const descuento = precio * porcentaje / 100;
        const precioFinal = precio - descuento;

        resultado.textContent =
            "Precio original: Bs " + precio.toFixed(2) +
            " | Descuento: Bs " + descuento.toFixed(2) +
            " | Precio final: Bs " + precioFinal.toFixed(2);

    }

});


// EJERCICIO 3: IDENTIFICADOR DE NÚMEROS PRIMOS

document.getElementById("formPrimo").addEventListener("submit", function(event) {

    event.preventDefault();

    const numero = Number(document.getElementById("numeroPrimo").value);
    const resultado = document.getElementById("resultadoPrimo");

    if (!Number.isInteger(numero) || numero < 1) {

        resultado.textContent = "Introduce un número entero positivo.";

    } else if (numero === 1) {

        resultado.textContent = "El número 1 no es primo ni compuesto.";

    } else {

        let esPrimo = true;

        for (let i = 2; i <= Math.sqrt(numero); i++) {

            if (numero % i === 0) {
                esPrimo = false;
                break;
            }

        }

        if (esPrimo) {

            resultado.textContent = numero + " es un número primo.";

        } else {

            resultado.textContent = numero + " es un número compuesto.";

        }

    }

});


// EJERCICIO 4: SUCESIÓN DE FIBONACCI

document.getElementById("formFibonacci").addEventListener("submit", function(event) {

    event.preventDefault();

    const cantidad = Number(document.getElementById("cantidadTerminos").value);
    const resultado = document.getElementById("resultadoFibonacci");

    if (!Number.isInteger(cantidad) || cantidad < 1 || cantidad > 50) {

        resultado.textContent = "Introduce un número entero entre 1 y 50.";

    } else {

        let anterior = 0;
        let actual = 1;
        let sucesion = [];

        for (let i = 0; i < cantidad; i++) {

            sucesion.push(anterior);

            const siguiente = anterior + actual;

            anterior = actual;
            actual = siguiente;

        }

        resultado.textContent =
            "Primeros " + cantidad + " términos: " + sucesion.join(", ");

    }

});