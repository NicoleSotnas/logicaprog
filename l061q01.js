//Swich Case
/*Desenvolver um programa que mostre o menu de opções da tabela abaixo e peça o código desejado. Mostre
como resposta uma mensagem confirmando a escolha do usuário, ou que o número digitado não existe no
menu de opções.
Código  Opção
1       Incluir
2       lterar
3       Excluir
4       Pesquisar
5       Sair
*/

let cod;

console.log("Menu De Opções: ");
console.log("Código      Opções")
console.log("   1      - Incluir")
console.log("   2      - Alterar")
console.log("   3      - Excluir")
console.log("   4      - Pesquisar")
console.log("   5      -  Sair")

console.log("Informe o código referente á ação desejada: ")
cod = 2 ;
console.log(`Código inserido: ${cod}`)

switch(cod){
    case 1:
        console.log("Você escolheu a opção Incluir")
        break;
    case 2:
        console.log("Você escolheu a opção Alterar")
        break;
    case 3:
        console.log("Você escolheu a opção Excluir")
        break;
    case 4:
        console.log("Você escolheu a opção Pesquisar")
        break;
    case 5:
        console.log("Você escolheu a opção Sair")
        break;
    default:
        console.log("ERROR: Código inválido");
        break;
}

