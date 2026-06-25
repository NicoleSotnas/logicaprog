/*Questão 5: Refatoração de código - Um desenvolvedor escreveu o seguinte código repeIIvo para calcular
a área de dois retângulos diferentes:*/
/*
// Retângulo 1
let base1 = 5;
let altura1 = 10;
console.log(base1 * altura1);
// Retângulo 2
let base2 = 8;
let altura2 = 3;
console.log(base2 * altura2); */

function calcularRetangulo(base, altura){
    return base * altura
}
console.log(calcularRetangulo(5, 3))
console.log(calcularRetangulo(3, 3))