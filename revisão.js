/*// exercicio material 07 - página 14*/

let aluno = {
    nome : "Vitor",
    idade : 18,
    matricula : true
}
console.log(aluno)
console.log(aluno.nome)
console.log(aluno.idade)
if(aluno.matricula){
    console.log("Matriculado")
}else{
    console.log("Dematriculado")
}

// pagina 21
let cont
let produtos = [
    {nome: "Celular", preco: 1522},
    {nome: "Mouse", preco: 511},
    {nome: "Monitor", preco: 1477}
]

console.log(`Primeiro produto: ${produtos[0].nome}`)
console.log(`Ultimo produto: ${produtos[2].nome}`)
for(let item of produtos){
    console.log(`Nome: ${item.nome} | Preço: ${item.preco.toFixed(2)}`)
}

/*Crie uma função chamada calcularTriplo que receba um número
como parâmetro e retorne o valor desse número mulIplicado por 3. Após criar a função, chame-a
passando o valor 10 e exiba o resultado no console. */

function calcularTriplo(a){
    return a * 3

}
console.log(calcularTriplo(10))

class Carro  {
    marca;
    modelo;
    ano

    constructor(marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    exbirDetalhes(){
        console.log(`Marca: ${this.marca}`)
        console.log(`Modelo: ${this.modelo}`)
        console.log(`Ano: ${this.ano}\n`)
        
    }
}

let carro1 = new Carro("Ford", "Fusion", 2020)
let carro2 = new Carro("Fiat", "Polo", 2023)
carro1.exbirDetalhes()
carro2.exbirDetalhes()
