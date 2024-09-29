/* calculadora básica */

function calculoSoma() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = soma(num1, num2);
    document.getElementById("resultado").innerHTML = `= ${resultado}`;
}

function calculoSubtracao() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = subtracao(num1, num2);
    document.getElementById("resultado").innerHTML = `= ${resultado}`;
}

function calculoMultiplicacao() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = multiplicacao(num1, num2);
    document.getElementById("resultado").innerHTML = `= ${resultado}`;
}

function calculoDivisao() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (num2 !== 0) {
    const resultado = divisao(num1, num2);
    document.getElementById("resultado").innerHTML = `= ${resultado}`;
    } else {
        document.getElementById("resultado").innerHTML = "divisão por zero.";
    }
}

function soma(num1, num2) {
    return num1 + num2
}

function subtracao(num1, num2) {
    return num1 - num2
}

function multiplicacao(num1, num2) {
    return num1 * num2
}

function divisao(num1, num2) {
    return num1 / num2
}