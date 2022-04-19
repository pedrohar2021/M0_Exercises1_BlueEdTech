console.clear();
const prompt = require('prompt-sync')();

/* Agora, imprima todas as tabuadas do número 1 ao 10.*/

let numero = 1
while(numero < 11){
    console.log(`<- TABUADA DO NÚMERO ${numero}`);

    for( let i = 0; i < 11; i++){
        console.log(`${numero} x ${i} = ${numero * i}`);
    }

    numero++
    console.log();

}