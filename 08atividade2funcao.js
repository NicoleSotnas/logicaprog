function calcularArea(base, altura ){
    return (base * altura)
}
console.log(calcularArea(5, 3))

function converterCelsius(temp){
    return (temp * 9/5) + 32
}
console.log(converterCelsius(25));


// Não precisa declarar variável pq está sendo declarada dentro de função
function saudacaoPersonalizada(nome){
    return `Olá, ${nome}! Seja Bem-Vindo(a)`
    
}
console.log(saudacaoPersonalizada("Nicole"))

let nome = "Julia"; //var Global