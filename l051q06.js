/* Desenvolver um programa que leia um número n qualquer menor ou igual a 50 e apresente o valor obtido da
multiplicação sucessiva de n por 3 enquanto o produto for menor que 250. (n x 3; n x 3 x 3; n x 3 x 3 x 3 etc...). */

let num = 1;
let multi = 0;

while(multi<=250 ){
    
    multi = num * 3
    console.log(`${num} x 3 = ${multi}`)
    num = multi
}
