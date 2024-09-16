let corAtual = 0;
const interval = 2000;

function mudarCor() {
    const vermelho = document.getElementById('verde');
    const amarelo = document.getElementById('amarelo');
    const verde = document.getElementById('vermelho');

    vermelho.classList.remove('ativo');
    amarelo.classList.remove('ativo');
    verde.classList.remove('ativo');

    if (corAtual === 0) {
        vermelho.classList.add('ativo');
    } else if (corAtual === 1) {
        amarelo.classList.add('ativo');
    } else if (corAtual === 2) {
        verde.classList.add('ativo');
    }

    corAtual = (corAtual + 1) % 3; //ciclo
}

setInterval(mudarCor, interval);