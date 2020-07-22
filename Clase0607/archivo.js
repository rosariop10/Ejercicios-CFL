"use strict";
exports.__esModule = true;
var fs = require("fs");
var texto = fs.readFileSync('info.txt', 'utf-8');
console.log(texto);
