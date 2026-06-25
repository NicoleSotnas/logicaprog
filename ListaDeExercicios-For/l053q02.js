/*2) Desenvolver um programa que apresente o total da soma de n números inteiros do número 1 até n, onde n é um
valor informado pelo usuário. */
let cont;
let acum = 0
let num



console.log("Informe um número:")
num = 100;
console.log(`Número: ${num}`)

for(cont = 1 ; cont <= num ; cont ++){
      acum += cont
  
}
console.log(`${acum}`)
