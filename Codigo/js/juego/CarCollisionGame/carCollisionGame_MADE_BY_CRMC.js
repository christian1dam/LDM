
var enemigo = document.getElementById('enemigo');
var cocheJugador = document.getElementById('cocheJugador');
var result = document.getElementById("resultadoFail");
var hasGanado = document.getElementById("resultadoWin");
var puntos = document.getElementById("puntos");
var juego = document.getElementById("videojuego");
var contador = 0;
var velocidadEnemigo = 1;

enemigo.addEventListener('animationiteration', () => {
    var random = ((Math.floor(Math.random() * 5)) * 43.3);
    enemigo.style.left = `${random}px`;
    contador++;
    velocidadEnemigo += 0.001;
    aumentarVelocidadEnemgio(velocidadEnemigo);
    if (velocidadEnemigo >= 1.027) {
        youWin();
    }
})

function aumentarVelocidadEnemgio(v) {
    enemigo.style.animation = `move ${v}s linear infinite`;
}


window.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowDown') {
        cocheJugadorTop = parseInt(window.getComputedStyle(cocheJugador).getPropertyValue('top'));
        if (cocheJugadorTop < 250) {
            cocheJugador.style.top = (cocheJugadorTop + 43.3) + "px";
        }
    }
    if (e.key == 'ArrowUp') {
        let cocheJugadorTop = parseInt(window.getComputedStyle(cocheJugador).getPropertyValue('top'));
        if (cocheJugadorTop > -53.1) {
            cocheJugador.style.top = (cocheJugadorTop - 43.3) + "px";
        }
    }
    if (e.key == 'ArrowRight') {
        cocheJugadorleft = parseInt(window.getComputedStyle(cocheJugador).getPropertyValue('left'));
        if (cocheJugadorleft < 160) {
            cocheJugador.style.left = (cocheJugadorleft + 43.3) + "px";
        }
    }
    if (e.key == 'ArrowLeft') {
        let cocheJugadorleft = parseInt(window.getComputedStyle(cocheJugador).getPropertyValue('left'));
        if (cocheJugadorleft > 5) {
            cocheJugador.style.left = (cocheJugadorleft - 43.3) + "px";
        }
    }
});

function getElementPosition(element) {
    const rect = element.getBoundingClientRect();
    return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        width: rect.width,
        height: rect.height
    };
}

function youWin() {
    hasGanado.style.display = "block";
    juego.style.display = "none";
    puntos.innerHTML = `Tus puntos son ${contador}`;
    contador = 0;
}

setInterval(function GameOver() {
    const enemigoPos = getElementPosition(enemigo);
    const jugadorPos = getElementPosition(cocheJugador);
    const distanciaX = Math.abs(enemigoPos.x - jugadorPos.x);
    const distanciaY = Math.abs(enemigoPos.y - jugadorPos.y);
    const combinedWidth = enemigoPos.width + jugadorPos.width;
    const combinedHeight = enemigoPos.height + jugadorPos.height;
    if (distanciaX < combinedWidth / 2 && distanciaY < combinedHeight / 2) {
        result.style.display = "block";
        juego.style.display = "none";
        puntos.innerHTML = `Tus puntos son ${contador}`;
        contador = 0;
    }
}, 20);

document.getElementById('btnWin').addEventListener('click', () => {
    location.reload();
});

document.getElementById('btn').addEventListener('click', () => {
    location.reload();
});