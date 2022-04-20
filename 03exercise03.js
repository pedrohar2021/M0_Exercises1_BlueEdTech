console.clear();
const prompt = require('prompt-sync')();

/* Jogo da adivinhação: Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10
 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador.
 O programa deverá escrever na tela se o usuário venceu ou perdeu. */


console.log('Sou seu computador... Acabei de pensar em um número entre 0 e 10.')
console.log('Será que você consegue adivinhar qual foi: ')
let computador = Math.floor(Math.random() * 11)
let usuario = +prompt('Em qual número pensei? ')

let acertou = false

if(computador == usuario){
    acertou = true
    console.log('ACERTOU! Parabéns...'); 
}else{
    acertou = false
    console.log('ERROU! Boa sorte na proxima...'); 
}

