

// declarando um objeto chamado aluno Em TypeScript
let aluno: {nome: string; idade: number; ativo: boolean} = {
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

console.log(`O aluno ${aluno.nome} tem ${aluno.idade} anos de idade`)
console.log(`Nome do aluno: ${aluno.nome}  Idade: ${aluno.idade}`)


/*
for(let aluno of alunos){
    console.log(`O aluno ${aluno.nome} tem ${aluno.idade} anos de idade`)
}*/