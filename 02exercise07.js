console.clear();
const prompt = require('prompt-sync')();

/* Utilizando laço, imprima a tabuada do 8 na tela. */
console.log('<- TABUADA DO NUMERO 8 ->');
let oito = 8
for (let i = 1; i < 11; i++){
    console.log(`${oito} x ${i} = ${oito * i}`);
}