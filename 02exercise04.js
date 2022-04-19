console.clear();
const prompt = require('prompt-sync')();

/* Crie um programa em Portugol que peça a nota do aluno, que deve ser um real entre 0.00 e 10.0
Se a nota for menor que 6.0, deve exibir a nota F.
Se a nota for de 6.0 até 7.0, deve exibir a nota D.
Se a nota for entre 7.0 e 8.0, deve exibir a nota C.
Se a nota for entre 8.0 e 9.0, deve exibir a nota B.
Por fim, se for entre 9.0 e 10.0, deve exibir um belo de um A. */

let notaAluno = parseFloat(prompt('Qual sua nota em Portugol? [0/10]: '))
if(notaAluno < 0){
    console.log('Nota inválida');
}else if(notaAluno < 6){
    console.log('Você tirou "F" no boletim.');
}else if (notaAluno < 7){
    console.log('Você tirou "D" no boletim.');
}else if (notaAluno < 8){
    console.log('Você tirou "C" no boletim.');
}else if (notaAluno < 9){
    console.log('Você tirou "B" no boletim.');
}else if (notaAluno < 10){
    console.log('Você tirou "A" no boletim.');
}else{
    console.log('Nota inválida');
}

