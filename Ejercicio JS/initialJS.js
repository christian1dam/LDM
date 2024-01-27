var boxClassesArray = new Array();
boxClassesArray = document.getElementsByClassName(`box`);

function getOriginalColoursFromBoxes(){
    var coloursArray = new Array();
    for(var i = 0; i < boxClassesArray.length; i++){
        coloursArray[i] = window.getComputedStyle(boxClassesArray[i]);
    }
    return coloursArray;
}

var boxesOriginalColoursArray = new Array();
var boxesOriginalColoursArray = getOriginalColoursFromBoxes();

function changeColor(colour) {
    for(var i = 0; i < boxClassesArray.length; i++){
        boxClassesArray[i].style.backgroundColor = colour;
    }
}

function getNormalColour(){
    location.href = "index.html";
}

function changeSingleBoxColour(id, colour){
    document.getElementById(id).style.backgroundColor = colour;
}

function changeSingleBoxColourRandomly(id){
    var letters = '0123456789ABCDEF'; 
    var color = '#';
    for (var i = 0; i < 6; i++){
      color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById(id).style.backgroundColor = color;
}

function changeTextFromBox(){
    boxClassesArray[arrayRandomPosition(0, boxClassesArray.length - 1)].innerHTML = "LOREM IPSUM";
}

function arrayRandomPosition(from, to){
    return Math.floor((to - from + 1) * Math.random()) + from;
}

function createABox(yourHTML){
    var fragmento = document.createDocumentFragment();
    var temporal = document.createElement('div');
    temporal.innerHTML = yourHTML;
    while(temporal.firstChild){
        fragmento.appendChild(temporal.firstChild);
    }
    return fragmento;
}

function newBox(){
    var i = boxClassesArray.length;
    if(i%2==0){
        var fragment = createABox(`<div class="box" id="box${i+1}" onmouseenter="changeColor('blue')"><p>Caja ${i+1}</p></div>`);
        document.getElementById('main').insertBefore(fragment, document.getElementById('main').childNodes[(i*2)]);
        changeSingleBoxColourRandomly(`box${i+1}`);
        i++;
    } else{
        var fragment = createABox(`<div class="box" id="box${i+1}" onmouseenter="changeColor('red')"><p>Caja ${i+1}</p></div>`);
        document.getElementById('main').insertBefore(fragment, document.getElementById('main').childNodes[(i*2)]);
        changeSingleBoxColourRandomly(`box${i+1}`);
        i++;
    }
    // boxesOriginalColoursArray.push(window.getComputedStyle(document.getElementById(`box${i}`.style.backgroundColor))); PARA ALMACENAR EL COLOR CON EL QUE SE CREA LA CAJA.
    boxClassesArray.push(`box${i}`);
}