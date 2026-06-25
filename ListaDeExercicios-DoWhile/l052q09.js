/*Desenvolver um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de Fibonacci é
formada pela sequência 1,1,2,3,5,8,13,21,34, ... etc. Essa série se caracteriza pela soma de um termo posterior
com o seu anterior subsequente. */

let termo1 = 1;
let termo2 = 1;
let proximoTermo;
let contador = 1;

console.log(`Termo 1: ${termo1}`);
console.log(`Termo 2: ${termo2}`);

do {
    proximoTermo = termo1 + termo2;
    contador++;
    console.log(`Termo ${contador + 1}: ${proximoTermo}`);
    
    termo1 = termo2;
    termo2 = proximoTermo;
} while (contador <= 14);