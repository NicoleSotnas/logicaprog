

// declarando um objeto chamado aluno
let aluno = {
    nome: "Julio",
    idade: 20,
    ativo: true

};
console.log(aluno); //exibe o objeto completo
console.log(aluno.nome, aluno.idade)
console.log(aluno.idade)
console.log(aluno.ativo)

if(aluno.ativo){
    console.log("Situação: Ativo")
}else{
    console.log("Situação: Inativa")
}

//Exemplo notação de Conchetes

let propriedade = "nome";

console.log(aluno[propriedade]); // Julio

//Também funciona diretamente
console.log(aluno["idade"]); //20

// Declarando novo objeto
let produto = {
    nome: "Notebook",
    preco: 3000,
}
console.log(produto)

//Modificando o preço do Notebook
produto.preco = 2800
console.log(produto)

//Adicionar uma nova propriedade (uma nova chave)
produto.estoque = 15;
console.log(produto)
