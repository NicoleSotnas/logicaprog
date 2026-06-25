/*
// Calcular desconto - produto 1
let preco1 = 100;
let desconto1 = preco1 * 0.1;
let final1 = preco1 - desconto1;
console.log(final1);

// Calcular desconto - produto 2
let preco2 = 250;
let desconto2 = preco2 * 0.1;
let final2 = preco2 - desconto2;
console.log(final2);
*/

function calcularPreco(preco, percentual){
    let desconto = preco * percentual
    return preco - desconto
}
console.log(calcularPreco(100, 0.1))
console.log(calcularPreco(250, 0.1))