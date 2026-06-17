//Desenvolver um programa que pergunte 4 notas escolares de um aluno e exiba mensagem informando que o
//aluno foi aprovado se a média escolar for maior ou igual a 5. Se o aluno não foi aprovado, indicar uma
//mensagem informando essa condição. Apresentar junto com a mensagem de aprovação ou reprovação o valor
//da média obtida pelo aluno.

let nota1, nota2, nota3, nota4, media;

console.log("Informe sua primeira nota: ")
nota1 = 8
console.log(`Primeira nota: ${nota1}`)

console.log("Informe sua segunda nota: ")
nota2 = 2
console.log(`Segunda nota: ${nota2}`)

console.log("Informe sua terceira nota: ")
nota3 = 5
console.log(`Terceira nota: ${nota3}`)

console.log("Informe sua quarta nota: ")
nota4 = 3
console.log(`Quarta nota: ${nota4}`)

media = (nota1 + nota2 + nota3 + nota4) / 4
if (media >= 5){
    console.log(`Você foi Aprovado, sua média é ${media.toFixed(1)}`)
} else {
    console.log(`Você foi Reprovado, a sua média é ${media.toFixed(1)}`)
}