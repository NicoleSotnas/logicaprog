function calcularArea(base: number, altura: number ): number{
    return (base * altura)/2
}
console.log(calcularArea(5, 3))

function converterCelsius(temp: number): number{
    return (temp * 9/5) + 32
}
console.log(converterCelsius(25));

function saudacaoPersonalizada(nome: String): string{
    return `Olá, ${nome}! Seja Bem-Vindo(a)`
    
}
console.log(saudacaoPersonalizada("Nicole"))