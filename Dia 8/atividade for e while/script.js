////////////// FOR //////////////

/* Tabuada

let n = 2
for (let i = 0; i < 11; i ++) {
    console.log(`${n} x ${i} = ${i*n}`);
}
*/

/* Soma

let soma = 0

for (i = 1; i <= 100; i++) {
    soma += i

    console.log(+ soma)
}
*/

/* Numeros pares

for (i = 0; i < 51; i++)
    if (i % 2 == 0) {
        console.log(i)
    }
*/

/* Fatorial 

let numero = 10
let fatorial = 1

for (let i = 1; i <= numero; i++) {
    fatorial *= i;

}
    console.log(`o fatorial de ${numero} é: ${fatorial}`);
*/

/* Fibonacci 

let n1 = 0
let n2 = 1
let proximo;

console.log(n1);
console.log(n2);

for (let i = 2; i <= 8; i++) {
    proximo = n1 + n2;
    n1 = n2;
    n2 = proximo;

    console.log(proximo);
}
*/

////////////// WHILE //////////////

/* idade 

let count = 1;

while (count <= 19) {
    console.log(count);
    count++;
}

*/

/* soma 

let soma = 0;
let numero = 2;

while (numero <= 100) {
    soma += numero;
    numero += 2;
}

console.log(`a soma dos numeros pares é ${soma}`);

*/

/* multiplicar por 2

let numero = 1;
while (numero <= 1000) {
    console.log(numero); 
    numero *= 2;         
}

*/

/* verificar primo 

let numero = 5;
let primo = true;
let kikoloureiro = 2;

while (kikoloureiro < numero) {
    if (numero % kikoloureiro == 0) {
        primo = false;
        break;
    }
    kikoloureiro++;
}
console.log(primo);

*/

/* impares de 1 a 20 

let numero = 1;
while (numero <= 20) {
    if (numero % 2 == 1) {
        console.log(numero);
    }
    numero++;
}
*/