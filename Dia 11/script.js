/* Crie uma lista de inteiros com 5 elementos. Em seguida, crie uma novo lista que
contenha apenas os elementos da primeira lista que são múltiplos de 3. Imprima a
nova lista. 

let lista = [1, 2, 3, 6, 9];

for (let multiplos = 0; multiplos < lista.length; multiplos++) {
    if (lista[multiplos] % 3 == 0) {
        console.log(lista[multiplos]);
    }
}
*/

/* Crie uma lista com 10 elementos e uma nova lista que contenha apenas os
elementos da primeira lista que são maiores que 5. Imprima a nova lista. 

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let maiores = 0; maiores < lista.length; maiores++) {
    if (lista[maiores] > 5) {
        console.log(lista[maiores]);
    }
}
*/

/* Crie uma lista de inteiros com 10 elementos. Calcule e imprima a soma dos
elementos nas posições pares da lista. 

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somaPares = 0;

for (let pares = 0; pares < lista.length; pares++) {
    if (pares % 2 == 0) {
        somaPares += lista[pares];
    }
}
console.log(somaPares);
*/

/* Crie uma função que receba uma lista de inteiros e retorne a média aritmética
dos valores. */



/* Crie um objeto chamado Pessoa com os campos "nome", "idade" e "endereço". O
campo "endereço" deve ser um outro objeto com os campos "rua", "número",
"cidade" e "estado". Escreva uma função que receba uma Pessoa como parâmetro e
imprima seu endereço completo. */

