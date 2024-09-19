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

/* classe retangulo */

function retangulo (largura, altura) {
    this.largura = largura,
    this.altura = altura
}; 

const bunda = new retangulo(20, 60);

function calculararea () {

}

