/*Desenvolver um programa que apresente o valor de uma potência de uma base qualquer elevada a um expoente
qualquer, ou seja, de be */

let base
let expoente
let cont = 0
let resultado = 1

console.log("Informe a base: ")
base = 2
console.log(`Base: ${base}`)

console.log("Informe o expoente: ")
expoente = 3
console.log(`Expoente: ${expoente}`)    

do{
    resultado = resultado * base
    cont++

}while(cont < expoente)
console.log(`O resultado da potência de ${base} elevado a ${expoente} é: ${resultado}`)
