console.clear();
const prompt = require('prompt-sync')();

/* Jogo de dados: Crie um programa onde jogadores joguem um dado e tenham resultados aleatórios.
O programa tem que:
Perguntar quantas rodadas você quer fazer;
Perguntar quantos jogadores vão jogar;
Criar um objeto pra cada jogador com nome e número tirado;
Guarda todos os objetos em uma lista;
Ordenar esses objetos, sabendo que o vencedor tirou o maior número no dado.
Mostrar no final qual jogador ganhou mais rodadas e foi o grande campeão.*/

const quantidadeRodadas = +prompt('Quantas rodadas serão jogadas? ')
const quantidadeJogadores = +prompt('Quantos jogadores irão jogar? ')
let jogadores = []

for(let i = 0; i , quantidadeJogadores; i++){
    jogadores.push({
        jogador: i+1,
        vitorias: 0,
    })
}

for(let i = 0; i < quantidadeRodadas; i++){
    console.log(`\nRodada ${i+1}`);

    const rodada = []
    for(let i = 0; i < quantidadeJogadores; i++){
        const resultadoDado = Math.floor(Math.random() * 6 + 1)
        rodada.push({
            jogador: i+1,
            numero: resultadoDado
        })
    }
    
    function numMaior(a, b) {
        if(a.numero < b.numero) return 1
        if(a.numero > b.numero) return -1
        return 0 
    }

    rodada.sort(numMaior)
    console.log(rodada)
    console.log(`O vencedor da rodada ${i+1} foi o jogador ${rodada[0].jogador}`);

    const posicao = jogadores.findIndex((tabela) => tabela.jogador == rodada[0].jogador)

    jogadores[posicao].vitorias++
}

function maisVitorias(a, b){
    if (a.vitorias < b.vitorias) return 1
    if (a.vitorias > b.vitorias) return -1
    return 0
}

jogadores.sort(maisVitorias)
console.log(`\nO jogador ${jogadores[0].jogador} venceu ${jogadores[0].vitorias} rodadas 
e foi o grande campeão`);