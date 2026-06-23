/* Crie um array com exatamente 5 números inteiros 
e exiba todos os elementos no console. Tente as três formas de iteração. */

let numeros = [1, 2, 3, 4, 5];

for(cont = 0; cont < numeros.length; cont ++){
    console.log("Índice " +  cont + ": " + numeros[cont]);
}

// Usando for...of
for (let num of numeros) {
console.log(num);
}

// Usando forEach
numeros.forEach((num, i) => {
console.log(`Posição ${i}: ${num}`);
});