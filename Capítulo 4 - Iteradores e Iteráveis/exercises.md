## Exercício 1 - Você está muito longe
Implemente uma função chamada `calculaDistancia` que recebe uma lista de objetos que representam ruas e faça a soma de seus tamanhos. Cada objeto rua da lista possui as seguintes propriedades:

* **nome:** String que representa o nome da rua
* **tamanho:** Número intero que representa a comprimento da rua em metros.
Utilize somente os conceitos que foram apresentados neste capítulo para iterar as ruas. Assuma que sempre haverá pelo menos uma rua no array.

Exemplo: `calculaDistancia(ruas)` → 7300
````javascript
const ruas = [
    { nome: 'Rua 1', tamanho: 2500 },
    { nome: 'Rua 2', tamanho: 3400 },
    { nome: 'Rua 3', tamanho: 1400 }
];

function calculaDistancia(listObject) {
    const iterator = listObject[Symbol.iterator]()
    let proximo = iterator.next()
    let result = 0

    do {
        result += proximo.value.tamanho
        proximo = iterator.next()
    } while (!proximo.done)

    return result
}

console.log(calculaDistancia(ruas))
````

## Exercício 2 - Tem alguém ai?
Desenvolva a função `isListaVazia` que recebe como parâmetro uma lista de números inteiros qualquer e retorna o valor `true` caso esta lista não tenha nenhum item e `false` para os demais resultados. A lógica deve ser feita usando somente a propriedade done do objeto que é obtido ao executar o next no iterador do array.
````javascript
const numbers = [1, 2, 45, 32, 99, 10]

function isListaVazia(listNumbers) {
    return listNumbers[Symbol.iterator]().next().done ?
        console.log('Lista Vazia') :
        console.log('Lista tem valores')
}

isListaVazia(numbers)
````

## Exercício 3 - S-o-l-e-t-r-a-n-d-o
Utilizando os aprendizados deste capítulo, implemente a função `soletraPalavra` que recebe como único parâmetro uma String e então exibe cada letra da String em uma linha do console.
````javascript
const numbers = [1, 2, 45, 32, 99, 10]

function soletraPalavra(string) {
    const iterator = string[Symbol.iterator]()
    let proximo = iterator.next()
    
    do {
        console.log(proximo.value)
        proximo = iterator.next()
    } while (!proximo.done);
}

soletraPalavra('Lemuel')
````

## Exercício 4 - Eu prefiro o meu
Crie o método `criaIterador` que recebe como parâmetro uma lista e então o devolve um objeto que possui o mesmo comportamento de um iterador, ou seja, que possui o método next que toda vez que invocado, retorna um objeto com as propriedades: value e done.

Exemplo: `criaIterador([1,2]).next()` → { value: 1, done: false }
````javascript
const numbers = [1, 2, 45, 32, 99, 10]

function criaIterator(array) {

    let proximoIndice = 0

    return {
        next: function() {
            if (proximoIndice < array.length) {
                return {
                    value: array[proximoIndice++],
                    done: false
                }
            } else {
                return {
                    value: undefined,
                    done: true 
                }
            }
        }
    }
}

console.log(criaIterator(numbers).next()) 
````
