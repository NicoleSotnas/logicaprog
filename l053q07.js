/*Desenvolver um programa que apresente no final a soma dos valores pares existentes na faixa de 3 até 21. */
let cont;
let soma = 0;


for(cont = 3; cont <= 21; cont ++){
    if(cont % 2 === 0){
        soma += cont
    }
}
console.log(`A soma dos valores pares de 3 a 21 é ${soma}`)