/** @type {HTMLCanvasElement} */
/** @type {CanvasDrawImage} */
/** @type {CanvasRenderingContext2D} */
/** @type {CanvasRenderingContext2DSettings} */
/** @type {FileSystem} */

let playerState = "coche_derrape_derecha";

const MYCAR = document.getElementById('pantallaPrincipal');
const CONTEXT = MYCAR.getContext('2d');

const CANVAS_WIDTH = MYCAR.width = getCurrentWindowWidth();
const CANVAS_HEIGHT = MYCAR.height = getCurrentWindowHeight();
const MYCAR_IMAGE = new Image();
MYCAR_IMAGE.src = './Animaciones/cocheDerrapandoHaciaLaDerecha.png';

let gameFrame = 0;
const STAGGER_FRAMES = 2.4;
const SPRITE_ANIMATIONS = [];

var ANIMATIONS_STATE = [
    {
        name: "coche_derrape_derecha",
        frames: 11,
    },
]

let SPRITE_WIDTH = 0;
let SPRITE_HEIGHT = 0;

async function getSpriteMeasures(url, array, nameAnimation) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    SPRITE_WIDTH = data.width / getAnimationStateFrame(array, nameAnimation);
    SPRITE_HEIGHT = data.height;
}

function getAnimationStateFrame(array, name){
    if(Array.isArray(array)){
        for(let i = 0; i < array.length; i++){
            if(array.at(i).name === name){
                return array.at(i).frames;
            }
        }
    }
}

await getSpriteMeasures("./JSON/imageSizeOfcoche_derrape_derecha.json", ANIMATIONS_STATE, "coche_derrape_derecha");

ANIMATIONS_STATE.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * SPRITE_WIDTH;
        let positionY = index * SPRITE_HEIGHT;
        frames.loc.push({x: positionX, y: positionY});
    }
    SPRITE_ANIMATIONS[state.name] = frames;
});

console.log(SPRITE_ANIMATIONS);

function animate() {
    CONTEXT.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame / STAGGER_FRAMES) % SPRITE_ANIMATIONS[playerState].loc.length;
    let frameX = SPRITE_WIDTH * position;
    let frameY = SPRITE_ANIMATIONS[playerState].loc[position].y;
    CONTEXT.drawImage(MYCAR_IMAGE, frameX, frameY, SPRITE_WIDTH,
        SPRITE_HEIGHT, 0, 0, SPRITE_WIDTH, SPRITE_HEIGHT);
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();


function getCurrentWindowWidth() {
    return document.querySelector('body').offsetWidth;
}

function getCurrentWindowHeight() {
    return document.querySelector('body').offsetHeight;
}