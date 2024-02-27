//-------------------pregunta 2-----------------En carpeta img esta el diagrama------------------------
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const btn = document.querySelector("#btn");

const contenedor = document.querySelector("#contenedor");
const p = document.createElement("p");
contenedor.appendChild(p);

btn.addEventListener("click", function () {
    let operacion = document.querySelector("#operaciones").value;

    if (operacion === "sumar") {
        let result = parseInt(num1.value) + parseInt(num2.value);
        p.innerText = `Resultado: ${result}`;
    } else if (operacion === "restar") {
        let result = parseInt(num1.value) - parseInt(num2.value);
        p.innerText = `Resultado: ${result}`;
    } else if (operacion === "multiplicar") {
        let result = parseInt(num1.value) * parseInt(num2.value);
        p.innerText = `Resultado: ${result}`;
    } else if (operacion === "dividir") {
        let result = parseFloat(num1.value) / parseFloat(num2.value);
        p.innerText = `Resultado: ${result}`;
    } else {
        let result = parseFloat(num1.value) % parseFloat(num2.value);
        p.innerText = `Resultado: ${result}`;
    }
});

//-------------------pregunta 3-----------------------------------------

const celcius = document.querySelector("#celcius");
const btnGrados = document.querySelector("#btnGrados");

const cambioTemp = document.querySelector("#cambioTemp");
const parrafo = document.createElement("p");
cambioTemp.appendChild(parrafo);

btnGrados.addEventListener("click", function () {
    let grados = document.querySelector("#grados").value;
    if (grados === "kelvin") {
        let resultado = parseFloat(celcius.value) + 273.15;
        parrafo.innerText = `Transformacion: ${resultado}K`;
    } else {
        let resultado = (parseFloat(celcius.value) * 9) / 5 + 32;
        parrafo.innerText = `Transformacion: ${resultado}°F`;
    }
});

//-------------------pregunta 4-----------------------------------------

const deDias = document.querySelector("#deDias");

const cambioDias = document.querySelector("#cambioDias");
const parr = document.createElement("p");
cambioDias.appendChild(parr);

deDias.addEventListener("click", function () {
    let dias = document.querySelector("#dias").value;
    const years = 365;
    const weeks = 7;
    const days = 1;
    let sumYears = 0;
    let sumWeeks = 0;
    let sumDays = 0;

    do {
        if (dias >= years) {
            sumYears++;
            dias -= years;
        } else if (dias >= weeks) {
            sumWeeks++;
            dias -= weeks;
        } else if (dias >= days) {
            sumDays++;
            dias -= days;
        }
    } while (dias > 0);

    parr.innerText = sumYears + " Año(s)  " + sumWeeks + "  Semana(s)  " + sumDays + " Día(s)";
});

//-------------------pregunta 5-----------------------------------------

const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const numero3 = document.querySelector("#numero3");
const numero4 = document.querySelector("#numero4");
const numero5 = document.querySelector("#numero5");
const btnProm = document.querySelector("#btnProm");

const sumProm = document.querySelector("#sumProm");
const parraf = document.createElement("p");
sumProm.appendChild(parraf);

btnProm.addEventListener("click", function () {
    let promSum = document.querySelector("#promedio").value;
    if (promSum === "suma") {
        let answerSum = +numero1.value + +numero2.value + +numero3.value + +numero4.value + +numero5.value;
        parraf.innerText = `La suma es: ${answerSum}`;
    } else {
        let answerProm =
            (+numero1.value + +numero2.value + +numero3.value + +numero4.value + +numero5.value) / 5;
        parraf.innerText = `El promedio es: ${answerProm}`;
    }
});
