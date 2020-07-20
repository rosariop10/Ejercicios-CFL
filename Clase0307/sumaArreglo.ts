let arreglo:number[] = [2,4,6,8,10];
function sumarArreglo(arreglo:number[]): number{
    let suma:number = 0;
    for (let i:number = 0; i<arreglo.length; i++){
        suma+=arreglo[i];
    }
    return suma;
}
console.log("La suma de los elementos del arreglo es: " + sumarArreglo(arreglo));