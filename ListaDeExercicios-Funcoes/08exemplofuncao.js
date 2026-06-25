// material 08 (Modularização e Funções) - Página 06
/*
function somar(a,b){
    return a + b;
}

console.log(somar(10, 7))
*/

// Variável Global
let num;

function somar(a,b){
    // Resultado -> Variável Local
    let resultado = a + b;
    return resultado;

}
direcionador(); /* funciona pq a função fica salva na mémoria (função criada salva 
na memória antes de rodar o codigo de cima para baixo)
*/
// exibindo imediatamente o valor retornado pela função
console.log(somar(5, 3))

//guardando o valor retornado em uma variável
num = somar(10, 20);
console.log(num)

somar(4, 5) // o retorno da função se perde.

// Função sem return (Função void)
function direcionador(){
    console.log("Siga em frete! Estude sempre!")
};

//chamado a função direcionador()
direcionador();
direcionador();

let texto = direcionador();
// console.log(texto); // variável não recebe retorno da função

function mensagem(){
    return "Ame mais, brigue menos!";
};

mensagem() // perdi o retorno da função
console.log(mensagem());

function tudao(){
    console.log("Inicio da função tudao()")
    direcionador(); //chamando a função direcionador 
    let calc = somar(2, 3);
    console.log(`Resultado da soma: ${calc}`);
    let msg = mensagem();
    direcionador();
    console.log(`Mensagem do dia: ${msg}`);
    console.log("Fim da função tudao()")
}
tudao() // Chamando a função tudao()(Se não chamar não roda)

/*
let cont //global
for(cont = 0; cont <= 3; cont++){
    console.log(cont)
}
console.log(cont) // deu bom, pq é global
*/
direcionador();