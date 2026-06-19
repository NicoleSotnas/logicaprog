/* Desenvolver um programa que apresente o valor de uma potência de uma base qualquer elevada a um expoente
qualquer, ou seja, de be , onde os valores de b e e são fornecidos pelo usuário, sem utilizar Math.pow().*/

let cont;
let base;
let expo;
let pot;


base = 2
expo = 6
pot = 1

for(cont = 1; cont <= expo; cont++){
    pot = pot * base
    
}
console.log(`${base} elevado à ${expo} = ${pot}`)
