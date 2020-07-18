import * as fs from 'fs';

//convierto el txt a variables
let nombres: string = fs.readFileSync('listadoNombres.txt', 'utf8');
let escuelas: string = fs.readFileSync('listadoEscuelas.txt', 'utf8');
console.log("Los nombres son: " + nombres);
console.log("Las escuelas son: " + escuelas);

//crear los arreglos
let arrNombres: string[] = nombres.split(',');
let arrEscuelas: string[] = escuelas.split(',');
console.log(arrNombres);
console.log(arrEscuelas);
console.log(arrNombres.length);

function asignarEscuela(arrNombres: string) {
    let inicial: string = arrNombres.charAt(0);
    switch (inicial) {
        case "A": case "B": case "C": case "D": case "E":
            return arrEscuelas[0];
        case "F": case "G": case "H": case "I": case "J":
            return arrEscuelas[1];
        case "K": case "L": case "M": case "N": case "O":
            return arrEscuelas[2];
        case "P": case "Q": case "R": case "S": case "T":
            return arrEscuelas[3];
        default:
            return arrEscuelas[4];
    }
}

for (let i: number = 0; i<arrNombres.length; i++){
    console.log("A " + arrNombres[i] + " le toca votar en: " + asignarEscuela(arrNombres[i]));
}


















//     for (let i: number = 0; i < arrNombres.length; i++) {
//         if (arrNom[i].startsWith("A" || "B" || "C" || "D")) {
//             console.log("la persona " + arrNom[i] + " vota en " + arrEsc[0]);
//         } else {
//             if (arrNom[i].startsWith("E" || "F" || "G" || "H")) {
//                 console.log("la persona " + arrNom[i] + " vota en " + arrEsc[1]);
//             } else {
//                 if (arrNom[i].startsWith("I" || "J" || "K" || "L")) {
//                     console.log("la persona " + arrNom[i] + " vota en " + arrEsc[2]);
//                 } else {
//                     if (arrNom[i].startsWith("M" || "N" || "O" || "P")) {
//                         console.log("la persona " + arrNom[i] + " vota en " + arrEsc[3]);
//                     } else {
//                         if (arrNom[i].startsWith("Q" || "R" || "S" || "T")) {
//                             console.log("la persona " + arrNom[i] + " vota en " + arrEsc[4]);
//                         } else {
//                             if (arrNom[i].startsWith("U" || "V" || "W" || "X" || "Y" || "Z")) {
//                                 console.log("la persona " + arrNom[i] + " vota en " + arrEsc[5]);
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// asignarEscuela(arrNombres, arrEscuelas);