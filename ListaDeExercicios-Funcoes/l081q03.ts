/*Escreva uma função chamada verificarMaioridade em
TypeScript. Ela deve receber um parâmetro chamado idade (do Ipo number) e retornar uma string dizendo
"Maior de idade" se a idade for 18 ou mais, ou "Menor de idade" caso contrário. CerIfique-se de definir o
Ipo do retorno da função. */

function verificarMaioridade(idade: number): string {
    if (idade >= 18) {
        return "Maior de idade";
    }
    return "Menor de idade";
}   

console.log(verificarMaioridade(20)); // Maior de idade
console.log(verificarMaioridade(15)); // Menor de idade 

