console.clear();
const prompt = require('prompt-sync')();

/* Qual o valor do troco?
Defina uma variável para o valor de uma compra que custou R$100,98;
Defina uma variável para o valor que o cliente pagou R$150,00;
Defina uma variável que calcula o valor do troco e exiba-o no console com o valor final arredondado. */

let valorDaCompra = 100.98
let valorPago = 150
let valorTroco = valorPago - valorDaCompra
console.log(`Você receberá um troco de R$${valorTroco.toFixed(0)}`);