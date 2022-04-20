console.clear();
const prompt = require('prompt-sync')();

/* AFaça um programa, que receba as dimensões de um terreno retangular 
(largura e comprimento) e mostre a área do terreno: */

largura = +prompt('Qual a metragem da 1ª dimensão do terreno? (Largura): ')
comprimento = +prompt('Qual a metragem da 2ª dimensão do terreno? (Comprimento): ')
metragem = largura * comprimento
console.log(`Seu terreno tem ${metragem}m².`);