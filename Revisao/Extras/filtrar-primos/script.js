/* filtrar primos entre 2 elementos de um array. -> [10, 40], retornar primos que estao entre 10 e 40. */

function numPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) {
            return false;
        }    
    }
    return true;
}

function listaElementos(num1, num2) {
    let primos = [];
    for (let numero = num1; numero <= num2; numero++) {
        if (numPrimo(numero)) {
            primos.push(numero)
        }
    }
    return primos;
}

let primos = listaElementos(10, 40);
console.log(primos);