// 3) Desenvolver um programa que pergunte um número, e apresente como resposta se o referido número é par ou
// é ímpar.

let num;

console.log("Informe um numero: ")
num = 5
console.log(`Número: ${num}`)

if (num % 2 === 0){
    console.log(`O número ${num} é par`)
} else {
    console.log(`O número ${num} é impar`)
}