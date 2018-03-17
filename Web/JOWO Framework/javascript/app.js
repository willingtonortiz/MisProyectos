window.onload = () => {
    var ex = new RegExp('ab+c');
    var entrada = document.querySelector("#entrada");
    var salida = document.querySelector("#salida");
    entrada.addEventListener("keydown", () => {
        encontrar();
    });

    var encontrar = () => {
        var textoEntrada = entrada.value;
        var textoSalida;
        // textoSalida = ex.match(textoEntrada);
        textoSalida = textoEntrada.match(/ab+c/);
        console.log(textoSalida[0]);

        // salida.innerText = textoSalida[0];
    }
}