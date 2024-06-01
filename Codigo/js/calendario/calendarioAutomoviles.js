import { getConsejo } from './api.js';


const mesYanyo = document.getElementById('mostrarMesYAnyo');
const calendario = document.getElementById('calendario');

let fecha = new Date();
let anyoActual = fecha.getFullYear();
let mesActual = fecha.getMonth();

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
 "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var cargarCalendario = () =>{
    let ultimoDiaMes = new Date(anyoActual, mesActual + 1, 0).getDate();
    let dias = "";
    for (let i = 0; i < ultimoDiaMes; i++) {
        dias += `<li>${i+1}</li>`;
    }

    mesYanyo.innerText = `${meses[mesActual]} ${anyoActual}`;
    calendario.innerHTML = dias;
}

document.addEventListener('DOMContentLoaded', () => {
    getConsejo();
    cargarCalendario();
});