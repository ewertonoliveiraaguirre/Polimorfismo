// criando a classe base
class Animal {
    constructor(nome, cor) {
        this.nome = nome
        this.cor = cor
    }
    falar() {
        return "Olá ,meu nome é " + this.nome
    }
}

// criando uma classe derivada de Animal
class Cachorro extends Animal {
    constructor(nome, cor, raça) {
        super(nome, cor);
        this.raça = raça
    }
    latir() {
        return "Au Au!"
    }
}

//criando uma classe derivada de Animal
class Gato extends Animal {
    constructor(nome, cor, raça) {
        super(nome, cor)
        this.raça = raça
    }
    miar() {
        return "Miau!"
    }
}

//criando um array de animais
const animais = [
    new Cachorro("Rex", "Marrom", "Pastor Alemão"),
    new Gato("Mia", "Preto", "Siamês"),
]

//percorrendo o array e imprimindo o nome e a cor de cada animal
for (const animal of animais) {
    console.log(`O animal ${animal.nome} é ${animal.cor}`);
}
//Chamando o metodo "falar()" em cada animal
for (const animal of animais) {
    console.log(animal.falar());
}

//chamando o metodo "latir()" no cachorro
const cachorro = animais[0]
console.log(cachorro.latir());

//chamando o metodo "miar()" no gato
const gato = animais[1]
console.log(gato.miar());