/*Desenvolver um programa que apresente as potências de 3 variando de 0 a 15. Deve ser considerado que
qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. A apresentação deve observar a seguinte
exibição na tela: */

// Utilizando a função Math.pow() para calcular as potências de 3
/*let cont = 0;
while(cont <= 15){
    console.log(`3 elevado a ${cont} é: ${Math.pow(3, cont)}`);
    cont++;
}
*/
// Utilizando o operador de exponenciação (**) para calcular as potências de 3

let cont = 0;
while(cont <= 15){
    console.log(`3 elevado a ${cont} é: ${3 ** cont}`);
    cont++;
}
