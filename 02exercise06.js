console.clear();
const prompt = require('prompt-sync')();

/* Crie um programa onde o usuário possa digitar vários valores numéricos e 
cadastre-os em uma lista. Caso o número já esteja lá dentro, ele não será adicionado. 
No final, serão exibidos todos os valores únicos digitados, em ordem crescente.*/

const numerosLista = []
let continuar = 'S'

while(continuar == 'S'){
    const numero = +prompt('Digite um número: ')

    if(!numerosLista.includes(numero)){
        numerosLista.push(numero)
    }else{
        console.log('Esse número já existe na lista!');
    }

    continuar = prompt('Deseja continuar adicionando núimeros a lista? [S/N] :').toUpperCase()

    while(continuar != 'S' && continuar != 'N'){
        continuar = prompt('Deseja continuar adicionando núimeros a lista? [S/N] :').toUpperCase()
    }
}

 function crescente (a, b){
     return a - b
 }

 const listaOrdenada = numerosLista.sort(crescente)
 console.log(`Você adicionou os números ${listaOrdenada}`);