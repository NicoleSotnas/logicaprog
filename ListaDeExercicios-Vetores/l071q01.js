/*Crie 2 vetores chamados nome e profissao, cada um com 5 elementos. Pergunte ao usuário o nome e a profissão
de 5 pessoas e preencha estes vetores. Ao final exiba um relatório apontando o nome e a profissão de cada uma
das 5 pessoas cadastradas. */

let cont;
let nomes = ["Julio", "Vinicius", "Roberto", "David", "Telofilos"]
let profissaos = ["Médico", "Professor", "Artista", "Engenheiro", "Cantor"]
/*
console.log("Informe seu Nome e sua Profissão: ")
for(let nome of nomes  ){
    console.log(nome)
}
console.log("Informe sua profissão")
for(let profissao of profissaos){
    console.log(profissao)
}
*/


for (cont = 0; cont < nomes.length; cont++){
    console.log(`${nomes[cont]} tem ${profissaos[cont]} como profissão`)
}