/*Desenvolver um programa que apresente os resultados de uma tabuada de um número n qualquer a ser
perguntado ao usuário (n x 1, n x 2, n x 3, ... , n x 9, n x 10) */

let cont = 0;
let i = 5;
//let multi
do{
    multi = cont * i
    console.log(`${cont} x ${i} = ${cont * i}`)
    //console.log(`${cont} x ${i} = ${multi}`)
   
    
    cont ++
    //cont += 1;
}while(cont <= 10)