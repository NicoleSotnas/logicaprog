/*Calcule a soma de todos os elementos de um array de números utilizando um loop e uma variável acumuladora. */

let numeros = [10, 25, 37, 42, 58];
let soma  = 0;
for (let num of numeros) {
soma += num;
}
console.log("Soma total:", soma); // 172