console.clear();
const prompt = require('prompt-sync')();

/* Conversor de moedas: Crie um programa que solicite um valor em real ao usuário e converta esse valor, para:
DOLAR
EURO
LIBRA ESTERLINA
DÓLAR CANADENSE
PESO ARGENTINO
PESO CHILENO */

 console.log('<<---- CASA DA MOEDA ---->');
 console.log('<<------ conversão ------>');
let valorUsuario = prompt('Quantos reais deseja converter? R$ ')
let valorDolar = valorUsuario / 4.70
let valorEuro = valorUsuario / 5.04
let valorLibra = valorUsuario / 6.08
let valorCanadense = valorUsuario / 3.71
let valorArgentino = valorUsuario * 24
let valorChileno = valorUsuario * 175

console.log(`A CONVERSÃO PARA DÓLAR FICA: US$${valorDolar.toFixed(2)},00`);
console.log(`A CONVERSÃO PARA EURO FICA: EUR$${valorEuro.toFixed(2)},00`);
console.log(`A CONVERSÃO PARA LIBRA ESTERLINA FICA: LE$${valorLibra.toFixed(2)}`);
console.log(`A CONVERSÃO PARA DOLÁR CANADENSE FICA: UC$${valorCanadense.toFixed(2)}`);
console.log(`A CONVERSÃO PARA PESO ARGENTINO FICA: PA$${valorArgentino.toFixed(2)}`);
console.log(`A CONVERSÃO PARA PESO CHILENO FICA: PC$${valorChileno.toFixed(2)}`);

