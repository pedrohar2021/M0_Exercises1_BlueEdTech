console.clear();
const prompt = require('prompt-sync')();

/* Caixa eletrônico: Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque
e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais.
O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e
quatro notas de 1. */

let valorSaque = +prompt('Digite o valor a ser sacado: (Entre R$10 e R$600) R$')

if(valorSaque < 10 || valorSaque > 600){
    console.log('Valor Invalido. Tente novamente:');
    valorSaque = +prompt('Digite o valor a ser sacado: (Entre R$10 e R$600) R$')
}


let notas100 = Math.floor(valorSaque / 100)
valorSaque = valorSaque % 100
let notas50 = Math.floor(valorSaque / 50)
valorSaque = valorSaque % 50
let notas10 = Math.floor(valorSaque / 10)
valorSaque = valorSaque % 10
let notas5 = Math.floor(valorSaque / 5)
valorSaque = valorSaque % 5
let notas1 = Math.floor(valorSaque / 1)
valorSaque = valorSaque % 1

console.log();

console.log(`${notas100} notas de R$100,00`);
console.log(`${notas50} notas de R$50,00`);
console.log(`${notas10} notas de R$10,00`);
console.log(`${notas5} notas de R$5,00`);
console.log(`${notas1} notas de R$1,00`); 