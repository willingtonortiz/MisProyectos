window.onload = () => {
    var sumar = (...parametros) => {
        var suma = 0;
        for (var i = 0; i < parametros.length; i++) {
            suma += parametros[i];
        }
        return suma;
    }
    console.log(sumar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
}