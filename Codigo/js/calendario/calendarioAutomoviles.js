import { getConsejo } from './api.js';

var mesYanyo = document.getElementById('mostrarMesYAnyo');
var calendario = document.getElementById('calendario');
var mesAnterior = document.getElementById('anteriorMes');
var mesSiguiente = document.getElementById('proximoMes');

let fecha = new Date();
let anyoActual = fecha.getFullYear();
var mesActual = fecha.getMonth();

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const cargarCalendario = () => {
    let primerDiaMes = new Date(anyoActual, mesActual, 1).getDay(); // Primer día de la semana del mes actual
    let ultimoDiaMes = new Date(anyoActual, mesActual + 1, 0).getDate(); 
    let ultimoDiaMesAnterior = new Date(anyoActual, mesActual, 0).getDate(); 
    let dias = "";

    // Ajuste para que el domingo sea 7 en lugar de 0
    if (primerDiaMes === 0) {
        primerDiaMes = 7;
    }

    // Días del mes anterior
    for (let i = primerDiaMes - 1; i > 0; i--) {
        dias += `<li class="diaNoPerteneceAlMes">${ultimoDiaMesAnterior - i + 1}</li>`;
    }

    // Días del mes actual
    for (let i = 1; i <= ultimoDiaMes; i++) { 
        if (i === fecha.getDate() && mesActual === new Date().getMonth() && anyoActual === new Date().getFullYear()) {
            dias += `<li class="diaActual">${i}</li>`;
        } else {
            dias += `<li class="diaPerteneceAlMes">${i}</li>`;
        }
    }

    // Días del mes siguiente
    let totalDias = primerDiaMes - 1 + ultimoDiaMes;
    let resto = totalDias % 7;
    let diasSiguientes = 7 - resto;
    if (diasSiguientes < 7) {
        for (let i = 1; i <= diasSiguientes; i++) {
            dias += `<li class="diaNoPerteneceAlMes">${i}</li>`;
        }
    }

    mesYanyo.innerText = `${meses[mesActual]} ${anyoActual}`;
    calendario.innerHTML = dias;
}

getConsejo();
cargarCalendario();

mesAnterior.addEventListener("click", (e) => {
    e.preventDefault();
    mesActual -= 1;
    if (mesActual < 0) {
        mesActual = 11;
        anyoActual -= 1;
    }
    cargarCalendario();
});

mesSiguiente.addEventListener("click", (e) => {
    e.preventDefault();
    mesActual += 1;
    if (mesActual > 11) {
        mesActual = 0;
        anyoActual += 1;
    }
    cargarCalendario();
});
