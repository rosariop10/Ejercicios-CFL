import * as fs from 'fs';

let texto:string = fs.readFileSync('info.txt', 'utf-8');

let palabras:string[] = texto.split(' ');

console.log(texto);
console.log(palabras);

