/* 3) Desenvolver um programa que apresente o total da soma dos cinco primeiros números inteiros.
*/

let cont = 1;
let acum = 0;
let soma
do{
    acum += cont;
    cont = cont + 1
}while(cont <= 5) //while(cont < 6)

console.log(`A soma é ${acum}`)
