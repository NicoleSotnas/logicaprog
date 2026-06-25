//material 07 - página 16

// Declarando um vetor (ou array) de objetos "alunos"

let alunos = [
    {nome: "Julio", idade: 25, ativo: true },
    {nome: "Mariana", idade: 28, ativo: false},
    {nome: "José", idade: 23, ativo: true}
];
console.log(alunos)

// Acessando pelo índice + propiedade
console.log(`Nome do primeiro aluno: ${alunos[0].nome}`)
// Não funciona desta forma na concatenação:
console.log(`Todos os dados do primeiro aluno${alunos[0]}`)

// Percorrendo o vetor de objetos com for clássico
for(let cont = 0; cont < alunos.length; cont++){
    console.log(`Nome: ${alunos[cont].nome}`)
    console.log(`Idade: ${alunos[cont].idade}`)
    console.log(`Ativo: ${alunos[cont].ativo} \n`)
}

// Percorrendo o vetor de objetos com for of
// \n só funciona dentro das aspas
for(let aluno of alunos){
    console.log(`Nome: ${aluno.nome}`)
    console.log(`Idade: ${aluno.idade}`)
    console.log(`Ativo: ${aluno.ativo}\n`)
    /*if(aluno.ativo){
    console.log(`Situação: Ativo`)
    }else{
    console.log(`Situação: Inativa`)}*/
}


