/* objeto pessoa

function pessoa (nome, idade, profissao) {
    this.nome = nome,
    this.idade = idade,
    this.profissao = profissao
};

const antonio = new pessoa('antonio', '44', 'medico')

console.log(`Sou ${antonio.nome} e sou ${antonio.profissao}`);

*/

/* manipular propriedades 

const carro = {
    marca: 'fiat',
    modelo: 'uno',
    ano: 1983
};

Object.defineProperty(carro, 'cor', {
    value: 'preto',
});

carro.ano = 1991

console.log(carro.cor);
console.log(carro.ano);

*/

/* metodo de soma de valores 

const calculadora = {
    a: 5,
    b: 5,
    c: 10,
    soma: function() {
        console.log(this.a + this.b + this.c)
    }
};

calculadora.soma()

*/

/* classe retangulo 

function retangulo (largura, altura) {
    this.largura = largura,
    this.altura = altura

    calculararea = function() {
        console.log(largura * altura);
    };
} 

const bunda = new retangulo(20, 60);
calculararea(bunda);
*/

/* conta bancaria */

function contaBancaria (titular, saldo) {
    this.titular = titular,
    this.saldo = saldo,
    this.deposito = function(valor) {

        this.saldo += valor
        console.log(`voce fez R$${valor} no tigrinho e seu saldo atual é de R$${this.saldo}.`)
    },

    this.saque = function(valor) {

        if (this.saldo >= valor) {
            this.saldo -= valor
            console.log(`voce perdeu R$${valor} no fortune rabbit demo bbc e agora tem um total de  ${this.saldo} putos no bolso. parabéns.`)
        } else {
            console.log('nao tem dinheiro, pobre.')
        }
    }
};

const felipinho = new contaBancaria('felipinho porra games', 2000);
const pedro2 = new contaBancaria('pedro2', 500);
const marselo = new contaBancaria('marselo', 100000000);

pedro2.saque(500);