console.clear();
const prompt = require('prompt-sync')();

/* Faça um programa que peça dois números, imprima o maior deles ou imprima 
"Números iguais" se os números forem iguais */

let numero1 = +prompt('Digite o primeiro número: ')
let numero2 = +prompt('Digite o segundo número: ') 
if (numero1 > numero2){
    console.log(`O primeiro número (${numero1}), é maior.`);
} else if (numero1 < numero2){
    console.log(`O segundo número (${numero2}), é maior.`);
}else{
    console.log(`Os números ${numero1} e ${numero2}, são iguais.`);
}