# Exercícios

Nestes exercícios iremos praticar a utilização de das arrow functions.

## Exercício 1 - Hora de usar as setas
Utilize o que foi aprendido neste capítulo e refatore a função `imprimeProduto` para utilizar arrow functions. Não deixe de customizar o método para utilizar templates strings.
``` javascript
let carrinho = [
    { nome: 'abacaxi', preco: '2.00' },
    { nome: 'detergente', preco: '2.50' },
    { nome: 'bolacha', preco: '3.80' }
]

carrinho.forEach(function(produto) {
    imprimeProduto(produto.nome, produto.preco);
})

function imprimeProduto(nome, preco) {
    console.log('Produto: ' + nome + ' | ' + 'Preço: ' + preco);
}
```
```javascript
let carrinho = [
    { nome: 'abacaxi', preco: '2.00' },
    { nome: 'detergente', preco: '2.50' },
    { nome: 'bolacha', preco: '3.80' }
]

imprimeProduto = (nome, preco) => {
    console.log(`Produto: ${nome}, Preço: ${preco}`);
}

carrinho.forEach(function(produto) {
    imprimeProduto(produto.nome, produto.preco);
})
```

## Exercício 2 - Hora de usar as setas novamente
Refatore o código a seguir para utilizar arrow functions:
``` javascript
let itens = ['abacaxi', 'banana', 'maçã', 'laranja', 'limão'];
itens.forEach(function(item) {
    console.log(item);
})
```
```javascript
let itens = ['abacaxi', 'banana', 'maçã', 'laranja', 'limão'];
itens.forEach(item => console.log(item))
```

## Exercício 3 - Quem está na janela?
Toda função declarada no escopo global possui o objeto `window` como valor do `this`. Por que acontece isso?
> Sempre que executamos uma função no JavaScript, ela é associada a um contexto de execução. Esse contexto possui uma propriedade denominada ThisBinding, que pode ser acessada a qualquer momento através da palavra reservada this. O valor do this, que chamamos de contexto da função, é constante e existe enquanto este contexto de execução existir. Toda função também declarada no escopo global possui o objeto window como valor do this.

## Exercício 4 - Vou lavar sua boca com sabão!
Utilize as arrow funcions para deixar o código a seguir ainda menor.
``` javascript
let palavroes = [
    "Inconstitucionalíssimo",
    "Otorrinolaringologista",
    "Pneumoultramicroscopicossilicovulcanoconiose",
    "Oftalmotorrinolaringologista"
];

let tamanhos =  palavroes.map(function(palavrao){ return palavrao.length });

console.log(tamanhos); // [ 22, 22, 44, 28 ]
```
```javascript
let palavroes = [
    "Inconstitucionalíssimo",
    "Otorrinolaringologista",
    "Pneumoultramicroscopicossilicovulcanoconiose",
    "Oftalmotorrinolaringologista"
];

let tamanhos = palavroes.map(palavrao => palavrao.length);

console.log(tamanhos); // [ 22, 22, 44, 28 
```

## Exercício 5 - Tudo dentro do seu escopo
O código a seguir utiliza um velho truque do JavaScript para conseguir utilizar o valor do `this` que referência o objeto dentro do loop. Utilize os seus conhecimentos de ES6 para refatorá-lo da melhor maneira.

``` javascript
var equipe = {
    nome: 'Valentes da Glória',
    membros: ['Luciano', 'Maria', 'Virgínia', 'Daniela'],
    imprimeNomes: function() {
        var that = this;
        this.membros.forEach(function(membro) {
            console.log(membro + ' é da equipe ' + that.nome);
        })
    }
}

equipe.imprimeNomes();
```
```javascript
const equipe = {
    nome: 'Valentes da Glória',
    membros: ['Luciano', 'Maria', 'Virgínia', 'Daniela'],
    imprimeNomes: function () {
        this.membros.forEach(element => {
            console.log(`${element} é da equipe ${this.nome}`)
        })
    }
}

equipe.imprimeNomes();
```

