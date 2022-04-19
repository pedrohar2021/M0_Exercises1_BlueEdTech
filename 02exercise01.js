console.clear();
const prompt = require('prompt-sync')();

/* Faça um programa que pergunte ao usuário um número e valide se o numero é par ou impar:
Crie uma variável para receber o valor, com conversão para inteiro
Para um número ser par, a divisão dele por 2 tem que dar resto 0 */
while(numero = true){
let numero = parseInt(prompt('Digite um número: '))
if (numero % 2 == 0){
    console.log(`O número ${numero} é PAR.`);
}else{
    console.log(`O número ${numero} é IMPAR.`);
}}