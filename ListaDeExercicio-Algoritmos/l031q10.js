/*Fazer um algoritmo que efetue o cálculo do valor de uma prestação em atraso, utilizando a fórmula prestação =
valor + (valor x (taxa : 100) x tempo em dias). */

let num;
let taxa;
let dias;
let prestacao;
console.log("Informe o valor: ")
num = 200
console.log(`valor: ${num.toFixed(2)}`)

console.log("Infome a taxa de juros: ")
taxa = 2
console.log(`taxa ${taxa.toFixed}%`)
console.log("Infome os dias: ")
dias = 10
console.log(`dias: ${dias}`)

prestacao = num + (num * (taxa / 100) * dias)
console.log(`${prestacao.toFixed(2)}`)