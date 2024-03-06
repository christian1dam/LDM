/*
Te creas 4 o 5 arrays de p ej asignaturas y metes dentro unos cuantos nombres
Creas dos desplegables para seleccionar dos de las asignaturas y un botón que
al hacer click te salgan los alumnos que están matriculados en las dos 
(crea las asignaturas con alumnos repetidos)
*/

const MAX_TIMES_SELECTED_EQUATIONS = 1;
const MAX_TIMES_SELECTED_BUTTONS = 1;
var times1stDegButtonPressed = 0;
var times2ndDegButtonPressed = 0;
var times2ndDegSelected = 0;
var times1stDegSelected = 0;

document.addEventListener('DOMContentLoaded', (event) => {
    const gradoEcuaciones = document.getElementById("gradoEcuaciones");
    const primeraAsignatura = document.getElementById("getPrimeraAsignatura");
    const segundaAsignatura = document.getElementById("getSegundaAsignatura");
    const botonComparar = document.getElementById("submitButtonCompare");
    const boton = document.getElementById("buttonCuadradoDeCaracter");
    crearCuadrado(boton);
    compareSubjects(primeraAsignatura, segundaAsignatura, botonComparar);
    allowEquation(gradoEcuaciones);
});

function allowEquation(gradoEcuaciones) {
    gradoEcuaciones.addEventListener('input', function () {
        const selectedValue = parseInt(gradoEcuaciones.value);
        switch (selectedValue) {
            case 1:
                if (times1stDegSelected < MAX_TIMES_SELECTED_EQUATIONS) {
                    allowFirstDegreeEquatio();
                }
                break;
            case 2:
                if (times2ndDegSelected < MAX_TIMES_SELECTED_EQUATIONS) {
                    allowSecondDegreeEquation();
                }
                break;
            default:
                console.log("se acabo");
        }
    });
}

function suma() {
    var i = Number.parseInt(document.getElementById("primerNumeroSuma").value);
    var j = Number.parseInt(document.getElementById("segundoNumeroSuma").value);
    var texto = i + j;
    document.getElementById("resultadoSuma").innerText = texto;
}

function resta() {
    var i = Number.parseInt(document.getElementById("primerNumeroResta").value);
    var j = Number.parseInt(document.getElementById("segundoNumeroResta").value);
    var texto = i - j;
    document.getElementById("resultadoResta").innerText = texto;
}

function multiplicacion() {
    var i = Number.parseInt(document.getElementById("primerNumeroMultiplicacion").value);
    var j = Number.parseInt(document.getElementById("segundoNumeroMultiplicacion").value);
    var texto = i * j;
    document.getElementById("resultadoMultiplicacion").innerText = texto;
}

function division() {
    var i = Number.parseFloat(document.getElementById("primerNumeroDivision").value);
    var j = Number.parseFloat(document.getElementById("segundoNumeroDivision").value);
    if (i == 0 && j == 0) {
        alert("ERROR: la division de 0 / 0 es una indeterminación.");
    } else {
        var texto = Number((i / j).toFixed(3));
        document.getElementById("resultadoDivision").innerText = texto;
    }
}

function allowFirstDegreeEquatio() {
    var equationTemplate = createLabel("ax + b = 0", "template1stEq");
    document.getElementById("ecuaciones").appendChild(equationTemplate);
    var askForA = createLabel("Introduce el primer miembro de la ecuacion:", "askForA");
    document.getElementById("ecuaciones").appendChild(askForA);
    var a_member = createAEquationMember("a1deg");
    document.getElementById("ecuaciones").appendChild(a_member);
    var askForB = createLabel("Introduce el segundo miembro de la ecuacion:", "askForB");
    document.getElementById("ecuaciones").appendChild(askForB);
    var b_member = createAEquationMember("b1deg");
    document.getElementById("ecuaciones").appendChild(b_member);
    var resultadoButton = createButton("=", "equals1deg");
    document.getElementById("ecuaciones").appendChild(resultadoButton);
    var resultBox = createAEquationMember("result1deg");
    document.getElementById("ecuaciones").appendChild(resultBox);
    times2ndDegSelected = 0;
    times3ndDegSelected = 0;
    times4ndDegSelected = 0;
    times1stDegSelected++;
    solveEquation1deg(resultadoButton);
}

function allowSecondDegreeEquation() {
    var equationTemplate = createLabel("ax^2 + bx + c = 0", "template2ndEq");
    document.getElementById("ecuaciones").appendChild(equationTemplate);
    var askForA = createLabel("Introduce el primer miembro de la ecuacion:", "askForA");
    document.getElementById("ecuaciones").appendChild(askForA);
    var a_member = createAEquationMember("a2deg");
    document.getElementById("ecuaciones").appendChild(a_member);
    var askForB = createLabel("Introduce el segundo miembro de la ecuacion:", "askForB");
    document.getElementById("ecuaciones").appendChild(askForB);
    var b_member = createAEquationMember("b2deg");
    document.getElementById("ecuaciones").appendChild(b_member);
    var askForC = createLabel("Introduce el segundo miembro de la ecuacion:", "askForC");
    document.getElementById("ecuaciones").appendChild(askForC);
    var c_member = createAEquationMember("c2deg");
    document.getElementById("ecuaciones").appendChild(c_member);
    var resultadoButton2deg = createButton("=", "equals2deg");
    document.getElementById("ecuaciones").appendChild(resultadoButton2deg);
    var resultBox = createAEquationMember("result2deg");
    document.getElementById("ecuaciones").appendChild(resultBox);
    times1stDegSelected = 0;
    times2ndDegSelected++;
    solveEquation2deg(resultadoButton2deg);
}

function solveEquation2deg(button) {
    button.addEventListener("click", function () {
        if (times2ndDegButtonPressed < MAX_TIMES_SELECTED_BUTTONS) {
            const a = parseFloat(document.getElementById("a2deg").value);
            const b = parseFloat(document.getElementById("b2deg").value);
            const c = parseFloat(document.getElementById("c2deg").value);
            solving2degEq(a, b, c);
        } else console.log("La respuesta ya se encuentra en pantalla!");
    });
}

function solving2degEq(a, b, c) {
    var d = b * b - 4 * a * c;
    var sqrt_val = Math.sqrt(Math.abs(d));
    if (a == 0) {
        return alert("La ecuacion que has introducido no es cuadrática");
    } else if (a == c) {
        times2ndDegButtonPressed++;
        return alert("La solucion a esta ecuacion es +-[-1^(1/2)], que no pertenece al conjunto de los números reales");
    } else if (d > 0) {
        const x1 = ((-b + sqrt_val) / (2 * a)).toFixed(2);
        const x2 = ((-b - sqrt_val) / (2 * a)).toFixed(2);
        times2ndDegButtonPressed++;
        return document.getElementById("result2deg").value = `${x1} ; ${x2}`;
    } else if (d == 0) {
        // misma solucion para x1 y x2
        const x = (-b / (2 * a)).toFixed(2);
        times2ndDegButtonPressed++;
        return document.getElementById("result2deg").value = `${x} ; ${x}`;
    }
}

function solveEquation1deg(button) {
    button.addEventListener("click", function () {
        if (times1stDegButtonPressed < MAX_TIMES_SELECTED_BUTTONS) {
            const a = parseFloat(document.getElementById("a1deg").value);
            const b = parseFloat(document.getElementById("b1deg").value);
            const x = (- b) / a;
            times1stDegButtonPressed++;
            return document.getElementById("result1deg").value = x;
        } else console.log("La respuesta ya se encuentra en pantalla!");
    });
}

function createButton(buttonContent, idName) {
    var button = document.createElement("button");
    button.setAttribute("id", idName);
    button.setAttribute("type", "button");
    button.innerText = buttonContent;
    return button;
}

function createLabel(labelContent, forName) {
    var a = document.createElement("label");
    a.setAttribute("for", forName);
    a.innerText = labelContent;
    return a;
}


function createVoidLabel(labelTypeName, atributeTypeName, atributeName) {
    var a = document.createElement(`${labelTypeName}`);
    a.setAttribute(`${atributeTypeName}`, `${atributeName}`);
    return a;
}

function createAEquationMember(name) {
    var a = document.createElement("input");
    a.setAttribute("oninput", `this.value = this.value.replace(/[^-0-9.]/g, '');`);
    a.setAttribute("onkeydown", "if(this.value.length==10 && event.keyCode!=8) return false;");
    a.setAttribute("id", `${name}`);
    return a;
}
// ASIGNATURAS

var matematicas = new Array();
var espanol = new Array();
var frances = new Array();
var fisica = new Array();

var asignaturasNombres = ["Matemáticas", "Español", "Francés", "Física"];
var asiganturasArrays = [matematicas, espanol, frances, fisica];

asignar8Nombres(matematicas, "Carlos", "Jose", "Mael", "Christy", "Josue", "Carmen", "Juan", "Raquel");
asignar8Nombres(espanol, "Christian", "Miguel", "Mael", "Christy", "Pere", "Carmen", "Juan", "Raquel");
asignar8Nombres(frances, "Christian", "Miguel", "Ricardo", "Christy", "Josue", "Carmen", "Juan", "Tania");
asignar8Nombres(fisica, "Hilario", "Miguel", "Mael", "Christy", "Josue", "Carmen", "Rodrigo", "Raquel");

function asignar8Nombres(array, a, b, c, d, e, f, g, h) {
    array.push(a);
    array.push(b);
    array.push(c);
    array.push(d);
    array.push(e);
    array.push(f);
    array.push(g);
    array.push(h);
}

var click = 0;
function compareSubjects(primeraAsignatura, segundaAsignatura, comparar) {
    comparar.addEventListener("click", function () {
        var getFirstSubjectArray = new Array();
        var getScndSubjectArray = new Array();
        getFirstSubjectArray = getFirstSubjectArrayList(primeraAsignatura);
        getScndSubjectArray = getFirstSubjectArrayList(segundaAsignatura);
        if(existSharedNames(getFirstSubjectArray, getScndSubjectArray) && click < 1){
            click++;
            createHTMLListForTheNames();
            for(var i = 0; i < Math.max(getFirstSubjectArray.length, getScndSubjectArray.length); i++){
                if(getFirstSubjectArray[i] == getScndSubjectArray[i]){
                    var temp = createNameLabel("li", getFirstSubjectArray[i]);
                    document.getElementById("SharedNamesList").appendChild(temp);
                }
            }
        } else alert("No hay nombres compartidos entre las asignaturas escogidas.");
    });
}

function existSharedNames(a, b){
    var sol = false;
    if(Array.isArray(a) && Array.isArray(b)){
        for(var i = 0; i < Math.max(a.length, b.length); i++){
            if(a[i] === b[i]){
                sol = true;
                break;
            }
        }
    }
    return sol;
}

function createHTMLListForTheNames(){
    var htmlList = createVoidLabel("ol", "id", "SharedNamesList");
    document.getElementById("asignaturas").appendChild(htmlList);
}

function createNameLabel(labelTypeName, labelContent){
    var a = document.createElement(`${labelTypeName}`);
    a.innerText = labelContent;
    return a;
}

function getFirstSubjectArrayList(a){
    for (var i = 0; i < asiganturasArrays.length; i++) {
        if(a.value === asignaturasNombres[i]){
            return asiganturasArrays[i];
        }
    }
}

/*---------------------------------------------- CUADRADO */

function crearCuadrado(boton){
    // debugger;
    // console.log(typeof boton);
    boton.addEventListener("click", function() {
        var caracter = document.getElementById("getCaracterCuadrado").value;
        var tamano = Number.parseInt(document.getElementById("getTamanoCuadrado").value) * Number.parseInt(document.getElementById("getTamanoCuadrado").value);
        var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgElement.setAttribute("width", tamano);
        svgElement.setAttribute("height", tamano);
        svgElement.style.border = "solid red 1px";
        document.getElementById("cuadradoDeCaracter").appendChild(svgElement);
        var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const d = createPathData(tamano, caracter); // Replace with your character and style
        path.setAttribute("d", d);
        path.setAttribute("fill", "red"); // Or your preferred color
        svgElement.appendChild(path);
    });
}


function createPathData(n, character) {
    debugger;
    const segmentLength = n / 5; // Adjust as needed
    let pathData = "";
    switch (character) {
      case '%':
        // Top left diagonal
        pathData += `M 0 ${n / 5} L ${n / 5} 0 L ${segmentLength} ${segmentLength}`;
        // Top right diagonal
        pathData += ` L ${n - segmentLength} ${segmentLength} L ${n} ${n / 5}`;
        // Bottom right diagonal
        pathData += ` L ${n - segmentLength} ${n - segmentLength} L ${segmentLength} ${n - segmentLength}`;
        // Bottom left diagonal
        pathData += ` L ${n / 5} ${n - segmentLength} Z`; // Close path
        // Optional: Add vertical stroke
        pathData += ` M ${n / 2} 0 L ${n / 2} ${n}`;
        break;
      default:
        // Handle other characters or provide an error message
    }
    return pathData;
  }
  