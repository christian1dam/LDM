var aceptarCookiesBTN = document.getElementById("aceptarCookies");
var denegarCookiesBTN = document.getElementById("denegarCookies");


setCookie = (cookieName, cookieValue, expirationTime) => {
    let date = new Date();
    date.setTime(date.getTime() + (expirationTime * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + "; path=/;";
}


getCookie = (cookieName) => {
    const name = cookieName + "=";
    const cookieDecoded = decodeURIComponent(document.cookie);
    const cookieArray = cookieDecoded.split("; ");
    let value;
    cookieArray.array.forEach(element => {
        if(element instanceof String) {
            if(element.indexOf  (name) === 0) value = element.substring(name.length);
        }
    });

    return value;
}

aceptarCookiesBTN.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("cookies-body").style.display = "none";
    setCookie("cookie", true, 30);
});

//Si se abre con LiveServer no se cerrará
denegarCookiesBTN.addEventListener("click", () => {
    window.close();
});

cookieMessage = () => {
    if(!getCookie("cookie")){
        document.getElementById("cookies-body").style.display = "flex";
    }
}

window.addEventListener("load", cookieMessage);