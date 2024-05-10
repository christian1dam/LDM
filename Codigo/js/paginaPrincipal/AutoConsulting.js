let icono = document.getElementById("menu_icono");

icono.addEventListener("click", (e) => {
    document.getElementById('lista_not_hover').style.left = "0px";
});

let main = document.getElementById("main");
let footer = document.getElementById("footer");

main.addEventListener('click', (e) => {
    document.getElementById('lista_not_hover').style.left = "-100%";
});

footer.addEventListener('click', (e) => {
    document.getElementById('lista_not_hover').style.left = "-100%";
});


//**Cookies**/

document.addEventListener("DOMContentLoaded", function(){
    var avisoCookies = document.getElementById("avisoCookies");
    var cookiesForm = document.getElementById("cookiesForm");

    if(!cookiesAceptadas()){
        mostrarAvisoCookies();
    }

    function mostrarAvisoCookies(){
        avisoCookies.style.display = "block";
    }

    function aceptarCookies(event){
        event.preventDefault();
        avisoCookies.style.display = "none";
        almacenarCookiesAceptadas();
    }

    function rechazarCookies(event){
        event.preventDefault();
        avisoCookies.style.display = "none";
    }

    function cookiesAceptadas() {
        return localStorage.getItem("cookiesAceptadas") === "true";
    }

    function almacenarCookiesAceptadas() {
        var checkboxes = cookiesForm.querySelectorAll("input[type=checkbox]:checked");
        localStorage.setItem("cookiesAceptadas", "true");
        checkboxes.forEach(function(checkbox) {
            localStorage.setItem(checkbox.name, "true");
        });
    }

    cookiesForm.addEventListener("submit", aceptarCookies);
    var rechazarButton = cookiesForm.querySelector('button[type="button"]');
    rechazarButton.addEventListener("click", rechazarCookies);

    if (cookiesAceptadas()) {
        avisoCookies.style.display = "none";
    }
});