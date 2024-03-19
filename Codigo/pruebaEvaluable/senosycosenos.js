
document.getElementById('buttonSeno').addEventListener('click', (e) => {
    let n = seno(document.getElementById('seno').value, document.getElementById('iterSeno').value);
    document.getElementById('senoResultado').value = n;
});


document.getElementById('buttonCoseno').addEventListener('click', (e) => {
    let n = coseno(document.getElementById('coseno').value, document.getElementById('iterCoseno').value);
    document.getElementById('cosenoResultado').value = n;
});


function factorial(n) {
    let factorial = n;
    if (n == 0 || n == 1) return 1;
    else {
        for (let i = n - 1; i >= 2; i--) {
            factorial *= i;
        }
        return factorial;
    }
}

function exponencial(x, n) {
    let exponencial = 1;
    if(n == 0) return 1; 
    else {
        for (let i = 0; i < n; i++) {
            exponencial *= x;
        }
        return exponencial;
    }
    // x * x * x * x * x * x = x ^ 6
    // x * (..) * x = x ^ n
}

function seno(x, n) {
    let seno = 0; 
    for (let i = 0; i < n; i++) {
        seno += ( exponencial((-1), i) * exponencial(x, (2*n+1))  / factorial(((2*i) + 1)) );
    }
    return seno; 
}

function coseno(x, n) {
    let coseno = 0; 
    for (let i = 0; i < n; i++) {
        coseno += ( exponencial((-1), i) * exponencial(x, (2*n))  / factorial(2*i));
    }
    return coseno; 
}