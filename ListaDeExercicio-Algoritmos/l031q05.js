//5) Fazer um programa que pergunte o salário de um funcionário e apresente este salário com um aumento de 15%.

let sal, aumento, salFinal;

console.log("Informe seu salário: ")
sal = 1347.38;
aumento = sal * 15/100
salFinal = aumento + sal

//toFixed() é usado para formatação de casa decimais
console.log(`O salário com aumento é ${salFinal.toFixed(2)}`)

