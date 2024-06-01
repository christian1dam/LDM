export const getConsejo = () => {
    var xhr = new XMLHttpRequest(); //se instancia un objeto XMLHttpRrequest() para hacer la solicitud a la API.

    xhr.open('GET', 'http://localhost:3000/api/phrase?' + new Date().getDate(), true);//se hace una peticion HTTP de tipo GET que consiste en obtener datos de la API

    xhr.onload = function () {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            document.getElementById('frase').textContent = response.phrase;
            document.getElementById('autor').textContent = response.author;
        } else {
            console.log('Error al obtener la frase');
        }
    }; //Se recoje los datos de la API y se trabaja con ellos. En este caso la api devuelve un archivo JSON con el que se debe trabajar. response = JSON.parse() transforma el JSON en contenido facilmente manipulable

    xhr.send(); //envio de la peticion a la API. Se establece después del manejo de la respuesta por buenas practicas. 
}


