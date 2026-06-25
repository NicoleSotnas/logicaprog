// exercicio material 07 - página 14

// item 1
let aluno = {
    nome: "Jonatan",
    idade: 25,
    matricula: true
}

//item 2
console.log(aluno)
console.log(`Nome: ${aluno.nome}`)
console.log(`Idade: ${aluno.idade}`)
if(aluno.matricula){
    console.log("Matricula Ativada")
}else{
    console.log("Matricula Desativada")
}

//Item 3 - Modificando Idade
aluno.idade = 30
console.log(aluno)
console.log(`Idade: ${aluno.idade}`)