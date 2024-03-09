const MAX_TIMES_SELECTED_BUTTON = 3; 
const MAX_PARTIDAS = 2; 
var partidas = 0;
var clicksOnTheButtonP1 = 0;
var clicksOnTheButtonP2 = 0;
var totalPuntosJugador1 = new Array();
var totalPuntosJugador2 = new Array();

document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('click', (element) => {
        // comprueba que el click se ha hecho en un id específico
        if(partidas < MAX_PARTIDAS){
            if (element.target.id === 'tirarPlayer1' && clicksOnTheButtonP1 < MAX_TIMES_SELECTED_BUTTON) {
                var dadosSeleccionadosEnTirada = document.getElementById('player1').value;
                var tiradaDeDados = generarTiradaDeDados(dadosSeleccionadosEnTirada);
                console.log(tiradaDeDados);
                document.getElementById('puntosPlayer1').value = sumaDadosTirados(tiradaDeDados);
                totalPuntosJugador1.push(document.getElementById('puntosPlayer1').value);
                document.getElementById('totalPuntosPlayer1').value = sumarTotalPuntos(totalPuntosJugador1);
                clicksOnTheButtonP1++;
            } else if(element.target.id === 'tirarPlayer2' && clicksOnTheButtonP2 < MAX_TIMES_SELECTED_BUTTON) {
                var dadosSeleccionadosEnTirada = document.getElementById('player1').value;
                var tiradaDeDados = generarTiradaDeDados(dadosSeleccionadosEnTirada);
                console.log(tiradaDeDados);
                document.getElementById('puntosPlayer2').value = sumaDadosTirados(tiradaDeDados);
                totalPuntosJugador2.push(document.getElementById('puntosPlayer2').value);
                document.getElementById('totalPuntosPlayer2').value = sumarTotalPuntos(totalPuntosJugador2);
                clicksOnTheButtonP2++;
            } else {
                console.log(`OTRO ELEMENTO clicado con ID: ${element.target.id}`);
            }

            if(clicksOnTheButtonP1 == 3 && clicksOnTheButtonP2 == 3){
                partidas++;
            }
        }
    });
});


function generarTiradaDeDados(dados){
    var numeroDelDadoAlSerTirado = new Array();
    for(var i = 0; i < dados; i++){
        let tiradaAhora = Number.parseInt(Math.floor(Math.random() * 7));
        if(tiradaAhora == 0) tiradaAhora = 1; 
        numeroDelDadoAlSerTirado.push(tiradaAhora); 
    }
    return numeroDelDadoAlSerTirado;
}

function sumaDadosTirados(tiradaDeDados){
    var sumaTotalDados = 0;
    if(Array.isArray(tiradaDeDados) && tiradaDeDados.length > 0){
        for(var i = 0; i < tiradaDeDados.length; i++){
            sumaTotalDados += Number.parseInt(tiradaDeDados[i]); 
        }
    } else alert('No se han tirado dados elegidos');
    return sumaTotalDados; 
}

function sumarTotalPuntos(arrayPuntos){
    var sumaTotal = 0;
    if(Array.isArray(arrayPuntos) && arrayPuntos.length > 0){
        for(var i = 0; i < arrayPuntos.length; i++){
            sumaTotal += Number.parseInt(arrayPuntos[i]); 
        }
    }
    return sumaTotal; 
}