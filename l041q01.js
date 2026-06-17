// 1) Desenvolver um programa que pergunte um número. Se este número for maior que 20, então ele deverá exibir a
// metade deste número, senão, ele deverá exibir o número sem alterações.

let num, metade;

console.log("Informe um número: ")
num = 40
console.log(`número: ${num}`)

metade = num / 2

if (num > 20){
    console.log(`A metade de ${num} é ${metade}`)
}
else{
    console.log(num)
}

console.log("FIM DO PROGRAMA")