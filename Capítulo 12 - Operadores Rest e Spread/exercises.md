* O operador Rest coleta os itens e coloca-os em um Array;
* O operador Spread torna um Array (e outros objetos iteráveis) em itens individuais.

# Exercícios

## Exercício 1 - Gastando até o que não tem
Refatore o código a seguir para utilizar o operador Rest:

``` javascript
function calculaPrecoTotal(a, b, c, d, e) {
  let precos = [a,b,c,d,e];
  return precos.reduce(function(total, preco) {
    return total + preco;
  }, 0)
}

calculaPrecoTotal(1,2,3,4,5); // 15
```
```javascript
function calculaPrecoTotal(...parameters) {
    let precos = [...parameters];
    return precos.reduce(function (total, preco) {
        return total + preco;
    }, 0)
}

console.log(calculaPrecoTotal(1, 2, 3, 4, 5)); // 15
```

## Exercício 2 - Eu sou maior do que você, lero lero!
Utilize o operador Rest para criar uma função que recebe um parâmetro referência, que é obrigatório, e mais n parâmetros numéricos. O objetivo é que esta função calcule se todos os valores numéricos passados são maiores que a referência e retorne verdadeiro ou falso.

Exemplo:
todosSaoMaioresQue(2,3,4,5,6,7); // resultado esperado: true

Outros exemplos de entradas:
todosSaoMaioresQue(5,4,3,2,1); // resultado esperado: false
todosSaoMaioresQue(1,2); // resultado esperado: true
```javascript
function todosSaoMaioresQue(paramRef, ...numbers) {
    return [...numbers].every(element => element > paramRef)
}

console.log(todosSaoMaioresQue(1, 2)) // -> true
console.log(todosSaoMaioresQue(10, 2, 30)) // -> false
```

## Exercício 3 - Bingo!
Refatore o código abaixo para utilizar o operador Rest ao invés do `arguments`

``` javascript
function anunciaBolasSorteadas() {
  var nBolas = arguments.length;
  for(var i = 0; i < nBolas; i++) {
    console.log('A bola escolhida foi: ' + arguments[i]);
  }
}

anunciaBolasSorteadas(1,2,3);
// saída
// A bola escolhida foi: 1
// A bola escolhida foi: 2
// A bola escolhida foi: 3
```
```javascript
function anunciaBolasSorteadas(...bolas) {
    return [...bolas].forEach(element => {
        console.log(`A bola escolhida foi: ${element}`)
    })
}

anunciaBolasSorteadas(1, 2, 3);
  // saída
  // A bola escolhida foi: 1
  // A bola escolhida foi: 2
  // A bola escolhida foi: 3
```

## Exercício 4 - Mas o professor que ensinou assim!
Um aluno de computação tentou utilizar o operador Rest para tratar números e letras, de quantidade indefinida, dentro do seu código, mas não conseguiu. Este foi o código que ele escreveu:

``` javascript
function numerosELetras(...numeros, ...letras){
  // corpo da função
}

Explique o porque este código não funciona.
```

## Exercício 5 - Este sim saber argumentar
O que é o objeto `arguments`?

## Exercício 6 - Hora do ditado
Refatore o código a seguir para utilizar o operador `Spread` no método `log` do console.

``` javascript
console.log('e','c','m','a','s','c','r','i','p','t');
```
```javascript
const letras = ['e', 'c', 'm', 'a', 's', 'c', 'r', 'i', 'p', 't']
console.log(...letras);
```

## Exercício 7 - Não são só umas reticências?
Qual a diferença básica entre os operadores `Rest` e `Spread`?

* O operador Rest coleta os itens e coloca-os em um Array;
* O operador Spread torna um Array (e outros objetos iteráveis) em itens individuais.


## Exercício 8 - Contador de Vogais
Implemente o método `contaQuantidadeVogaisNaoAcentuadas` que recebe um número indeterminado de palavras e retorna para o usuário o número total de vogais não acentuadas encontradas. Para este exercício, Considere somente palavras em minúsculo.


## Exercício 9 - Esse jeito é tão ultrapassado...
Como podemos refatorar o código a seguir sem utilizar os benefícios do ECMAScript 6?

``` javascript
var argumentos = [1,2,3];
console.log(argumentos[0], argumentos[1], argumentos[2]);
// 1, 2, 3
```

## Exercício 10 - A união faz a força
Refatore o código a seguir para utilizar o operador `Spread` ao invés do método `concat`.

``` javascript
const equipeMarketing = ['Joana', 'Marcela', 'Bruna'];
const equipeComercial = ['Talita', 'Luisa', 'Vitória'];

const timeCompleto = equipeMarketing.concat(equipeComercial);

realizaBrainstorm(timeCompleto);
```
