console.clear();
const prompt = require('prompt-sync')();

/* Faça um programa que vai receber como parâmetro o ano de nascimento de uma pessoa, retornando um
 valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL ou OBRIGATÓRIO nas eleições:.*/

ano = +prompt('Qual o ano de nascimento do eleitor? ')
idade = 2022 - ano
 if (idade < 16){
     console.log('Voto negado.');    
 }else if (idade < 18){
     console.log('Voto opcional.');
 }else if (idade < 70){
     console.log('Voto obrigatório.');    
 }else{
     console.log('Voto opcional.');
 }