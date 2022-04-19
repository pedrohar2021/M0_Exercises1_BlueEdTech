console.clear();
const prompt = require('prompt-sync')();

/* Faça um script que peça um valor e mostre na tela se o valor é positivo
ou negativo e implemente a funcionalidade de não aceitar o número 0.*/

while(true){
    let valor = +prompt('Insira um valor: [-/+] ')
    if (valor > 0){
        console.log('O número é postivo.');
    }else if(valor < 0){
        console.log('O número é negativo.');
    }else{
        console.log('Valor Invalido.');
        valor = +prompt('Insira um valor: [-/+] ');
    }
}

