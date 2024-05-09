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