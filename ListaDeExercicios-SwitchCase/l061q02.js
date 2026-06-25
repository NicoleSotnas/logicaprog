/*Desenvolver um programa que pergunte o sexo da pessoa e dê como resposta a seguinte orientação de acordo
com o sexo informado: “Banheiro masculino à direita” ou “Banheiro feminino à esquerda”.*/

let sex;

console.log("Informe seu sexo Feminino ou Masculino: ")
sex = "Feminino"
console.log(`${sex}`)

switch(sex){
    case "Feminino":
        console.log("Banheiro Feminino à esquerda")
        break;
    case "Masculino":
        console.log("Banheiro Masculino à direita")
        break;
    default:
        console.log("Informe apenas Feminino ou Masculino")
        break;
}
