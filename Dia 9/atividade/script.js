/* soma 

let numeros = [1, 1, 3, 4].reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
);
console.log(numeros)

*/

/* maior numero

let numeros = [1, 2, 3, 4, 10];
console.log(Math.max(...numeros));

*/

/* contador

let numeros = [1, 2, 3, 4, 4, 4];
let valor = 4;
let qtd = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === valor) {
        qtd++; 
    }
}

console.log(`o numero ${valor} aparece ${qtd} vezes no array `);

*/

/* produto 

let numeros = [1, 2, 3, 4];
let produto = 1;

for (let i = 0; i < numeros.length; i++) {
    produto *= numeros[i];
}

console.log(`o produto desses numeros é ${produto}`);

*/

/* numeros pares 

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i]);
    }
}

*/