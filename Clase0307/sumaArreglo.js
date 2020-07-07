var arreglo = [2, 4, 6, 8, 10];
function sumarArreglo(arreglo) {
    var suma = 0;
    for (var i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}
console.log("La suma de los elementos del arreglo es: " + sumarArreglo(arreglo));
