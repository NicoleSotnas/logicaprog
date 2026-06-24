/* Dado um array desordenado, exiba-o antes e depois da ordenação, tanto crescente quanto decrescente. */
let numeros = [59, 36, -5, 98, 0, 32, 3, -99, 22]
console.log(`Original: ${numeros}`)



numeros.sort( (a, b) => a - b)
console.log(`Crescente: ${numeros}`)
console.log(numeros)


numeros.sort( (a, b) => b - a)
console.log(`Decrescente: ${numeros}`)
console.log(numeros)