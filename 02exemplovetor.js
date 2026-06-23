/*Assunto: Vetores*/

//Vetor com nomes de alunos
let alunos = ["Ana", "Bruno", "Carlos", "Diana"];

// Vetor com notas de alunos

let notas = [8.5, 3, 8, 10];



console.log(alunos); // exibe os dados do vetor todo
// console.log(alunos[3]); // Diana
// console.log(alunos[0]); // Ana


alunos[2] = "Antônio"; 
console.log(alunos); // vetor todo (agora com Antônio)
/*

// For para percorre cada índice do vetor
for(cont = 0; cont < 4; cont ++){
   // console.log(alunos[cont])
    console.log(`Aluno(a) ${cont + 1}: ${alunos[cont]}`)
}

// Exibindo todas as notas
console.log(notas);
console.log(notas[2]); // 8

// For para percorrer cada índice dos dois vetores
for(cont = 0; cont < 4; cont ++){
    console.log(`Aluno(a): ${cont + 1} ${alunos[cont]} - Nota: ${notas[cont]}`)
}

// Exemplos for Clássico

for(cont = 0; cont < alunos.length; cont ++){
   // console.log(alunos[cont])
    console.log(`Aluno(a) ${cont + 1}: ${alunos[cont]}`)
}

*/

// Exemplo com For of

for(let aluno of alunos ){
    console.log(`Nome: ${aluno}`);
}

// Exemplo forEach
/*Aluno recebe o dado do vetor, indice recebe o indice do vetor estes parâmetros 
funcionam NESTA ORDEM. Não devm ser invertidos*/
/*
alunos.forEach(function(aluno, indice){
    console.log(`índice: ${indice}, aluno: ${aluno}`);
});
*/

/*
alunos.forEach(function(aluno, indice){
    console.log(`índice: ${indice + 1}, aluno: ${aluno}`);
});
*/

//métodos push, unshift, pop e shift
// push - adicionar

alunos.push("Raimundo");
console.log(alunos);

// pop - remove do final do vetor
alunos.pop();
console.log(alunos);

// unshift - adiciona ao início do vetor
alunos.unshift("Raimundo")
console.log(alunos);

//shift - remove do início do vetor
alunos.shift();
console.log(alunos);