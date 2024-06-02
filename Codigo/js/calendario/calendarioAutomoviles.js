import { getConsejo } from './api.js';

var mesYanyo = document.getElementById('mostrarMesYAnyo');
var calendario = document.getElementById('calendario');
var mesAnterior = document.getElementById('anteriorMes');
var mesSiguiente = document.getElementById('proximoMes');
var contenedorCalendario = document.getElementById('contenedorCalendario');


let fecha = new Date();
let anyoActual = fecha.getFullYear();
var mesActual = fecha.getMonth();

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Inicialización de eventos
let eventos = [];

//Se utiliza localStorage del navegador para poder guardar los eventos que se creen en el calendario
//devuelve un JSON que hay que manejar
if (localStorage.getItem('eventos')) {
    eventos = JSON.parse(localStorage.getItem('eventos'));
}

const cargarCalendario = () => {
    let primerDiaMes = new Date(anyoActual, mesActual, 1).getDay();
    let ultimoDiaMes = new Date(anyoActual, mesActual + 1, 0).getDate();
    let ultimoDiaMesAnterior = new Date(anyoActual, mesActual, 0).getDate();
    let dias = "";

    //bucle para llenar el calendario con los días del mes anterior para que se llene la primera fila del calendario. 
    for (let i = primerDiaMes - 1; i > 0; i--) {
        dias += `<li class="diaNoPerteneceAlMes">${ultimoDiaMesAnterior - i + 1}</li>`;
    }

    //bucle para llenar el calendario con los dias del mes actual
    for (let i = 1; i <= ultimoDiaMes; i++) {
        let eventoDelDia = eventos.find(event => event.fechaClicada === `${i}/${mesActual + 1}/${anyoActual}`);
        if (i === fecha.getDate() && mesActual === new Date().getMonth() && anyoActual === new Date().getFullYear()) {
            dias += `<li id="dia${i}" class="diaActual">${i}${eventoDelDia ? `<br><span class="eventoTexto">${eventoDelDia.title}</span>` : ''}</li>`;
        } else {
            dias += `<li id="dia${i}" class="diaPerteneceAlMes">${i}${eventoDelDia ? `<br><span class="eventoTexto">${eventoDelDia.title}</span>` : ''}</li>`;
        }
    }

    //bucle para llenar los dias del mes siguiente en la ultima fila
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


    for (let i = 1; i <= ultimoDiaMes; i++) {
        document.getElementById(`dia${i}`).addEventListener("click", () => {
            abrirContenedorEventos(`${i}/${mesActual + 1}/${anyoActual}`);
        });
    }
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

document.getElementById("guardarEvento").addEventListener("click", (e) => {
    e.preventDefault();
    guardarEvento();
});

let click = null;

const crearEvento = document.getElementById('crearEvento');
const eliminarEvento = document.getElementById('VerYBorrarEvento');
const getTituloEvento = document.getElementById('setTituloEvento');

//cuando se selecciona una fecha el border radius del bottom se pone a 0 para fusionarse con el div del evento
function setBorderRadius() {
    contenedorCalendario.style.borderBottomLeftRadius = '0';
    contenedorCalendario.style.borderBottomRightRadius = '0';
}

//cuando se termina de editar vuelve a su estilo por defecto
function resetBorderRadius() {
    contenedorCalendario.style.borderBottomLeftRadius = '';
    contenedorCalendario.style.borderBottomRightRadius = '';
}

//cuando se termina de hacer el evento se cierra
function noMostrarEventos() {
    crearEvento.style.display = 'none';
    eliminarEvento.style.display = 'none';
    resetBorderRadius(); 
}

function abrirContenedorEventos(fechaClicada) {
    click = fechaClicada;
    const eventosDeEseDia = eventos.find(event => event.fechaClicada === click);

    if (eventosDeEseDia) {
        document.getElementById('mostrarEvento').innerText = eventosDeEseDia.title;
        eliminarEvento.style.display = 'flex';
    } else {
        crearEvento.style.display = 'flex';
    }
    setBorderRadius(); 
}

function cerrarContenedorEventos() {
    getTituloEvento.classList.remove('error');
    crearEvento.style.display = 'none';
    eliminarEvento.style.display = 'none';
    getTituloEvento.value = '';
    click = null;
    cargarCalendario();
    resetBorderRadius();
}

function guardarEvento() {
    //chequea si se ha introducido texto en el input del evento
    if (getTituloEvento.value) {
        //cuando se da a guardar sin introducir un evento se pone el borde rojo. Cuando se guarda se quita.
        getTituloEvento.classList.remove('error');
        eventos.push({
            fechaClicada: click,
            title: getTituloEvento.value,
        });
        //se parsea el array de eventos a json para que se meta en localsotrage
        localStorage.setItem('eventos', JSON.stringify(eventos));
        cerrarContenedorEventos();
    } else {
        getTituloEvento.classList.add('error');
    }
}

function borrarEvento() {
    //se recogen todas los eventos en que no sean la fecha clicada y se actualiza en localstorage.
    eventos = eventos.filter(event => event.fechaClicada !== click);
    localStorage.setItem('eventos', JSON.stringify(eventos));
    cerrarContenedorEventos();
}

document.getElementById('borrarEvento').addEventListener('click',(e) =>{
    e.preventDefault();
    borrarEvento();
});
document.getElementById('cerrar').addEventListener('click',(e) =>{
    e.preventDefault();
    cerrarContenedorEventos();
});
document.getElementById('cancelar').addEventListener('click', (e)=>{
    e.preventDefault();
    cerrarContenedorEventos();
});
