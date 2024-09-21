let andarAtual = 0;
const elevador = document.getElementById("elevador");

function moverElevador(andar) {
    const andarLimite = 107; /* em px */
    let distancia = Math.abs(andar - andarAtual);
    
    elevador.style.transitionDuration = `${distancia * 1}s`;
    elevador.style.bottom = `${andar * andarLimite}px`;
    
    andarAtual = andar;
}
