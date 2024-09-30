/* 
Implemente uma função JavaScript que resolva o problema "FizzBuzz". A função deve percorrer todos os números de 1 a 100 e seguir as seguintes regras:
Para cada número que seja divisível por 3, imprima a palavra "Fizz" no console. Para cada número que seja divisível por 5, imprima a palavra "Buzz" no console.
Para números que sejam divisíveis por 3 e 5, imprima a palavra "FizzBuzz" no console.Para os demais números que não são divisíveis nem por 3 nem por 5, imprima o próprio número 
no console.
*/

function FizzBuzz () {

    if (i % 3 === 0 && i % 5 === 0) {
        return "FizzBuzz"
    } else if (i % 3 === 0) {
        return "Fizz"
    } else if (i % 5 === 0) {
        return "Buzz"
    } else {
        return i
    }
};

for (i = 1; i <= 100; i++) {
    console.log(FizzBuzz(i));
};