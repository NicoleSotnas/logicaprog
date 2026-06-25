/* Desenvolver um programa que apresente o valor de uma potência de uma base qualquer elevada a um expoente
qualquer, ou seja, de be , onde os valores de b e e são fornecidos pelo usuário, sem utilizar Math.pow().*/

let cont;
let base;
let expo;
let pot = 1;

console.log("Infome o valor da base da potência: ")
base = 2
console.log(`Base: ${base}`)
console.log("Informe o valor do expoente da potência: ")
expo = 6
console.log(`Expoente: ${expo}`)

for(cont = 1; cont <= expo; cont++){
    pot = pot * base
    
}
console.log(`${base} elevado à ${expo} = ${pot}`)
