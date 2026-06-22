/*Elaborar um programa que apresente o valor de uma potência de uma base qualquer (Variável b) elevada a um
expoente qualquer (Variável e), ou seja, de be */
let cont = 0;
let base = 2; // Variável b
let expoente = 3; // Variável e

while(cont <= expoente){
    console.log(`${base} elevado a ${cont} é: ${base ** cont}`);
    cont++;
}
