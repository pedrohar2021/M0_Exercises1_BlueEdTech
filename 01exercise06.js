console.clear();
const prompt = require('prompt-sync')();

/* Você está na flor da idade?
Defina uma variável para o valor do ano do nascimento;
Defina uma variável para o valor do ano atual;
Defina uma variável que calcula o valor final da idade da pessoa;
Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade". */

let anoNascimento = +prompt('Digite o seu ano de nascimento: ')
let anoAtual = 2022
let idade = anoAtual - anoNascimento
console.log(`Você tem ${idade} anos.\nNa flor da idade`);
