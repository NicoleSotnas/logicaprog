/*Desenvolver um programa que pergunte um número de 1 a 12, e responda o mês correspondente ao número,
ou se o número não corresponde a nenhum dos 12 meses. */

let cod;
console.log("Informe um numero de 1 a 12: ")
cod = 6;
console.log(`número informado: ${cod}`)

switch(cod){
    case 1:
        console.log("Janeiro")
        break
    case 2:
        console.log("Fevereiro")
        break
    case 3:
        console.log("Março")
        break
    case 4:
        console.log("Abril")
        break
    case 5:
        console.log("Maio")
        break
    case 6:
        console.log("Junho")
        break
    case 7:
        console.log("Julho")
        break
    case 8:
        console.log("Agosto")
        break
    case 9:
        console.log("Setembro")
        break
    case 10:
        console.log("Outubro")
        break
    case 11:
        console.log("Novembro")
        break
    case 12:
        console.log("Dezembro")
        break
    default:
        console.log("Código Invalido: Informe um número válido")
}