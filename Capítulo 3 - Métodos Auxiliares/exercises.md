## Exercício 1
Par ou Ímpar

``` javascript
const numeros = [2, 2, 34, 34, 1, 1, 13, 90, 23]

numeros.forEach(element => {
    element % 2 === 0 ? console.log('Par') : console.log('Ímpar')
})
```

## Exercício 2
Utilizando o método map, escreva o método dobrar que recebe um array de números inteiros e retorna um array com todos os valores do array original dobrados.

``` javascript
const dobrarArray = numeros.map(element => element * 2)
console.log(dobrarArray)
```

## Exercício 3
Escreva o método caps que recebe um array de strings e retorna um outro array com todas as strings do array original em CAIXA ALTA.

``` javascript
const nomes = ['Lemuel', 'Pedro', 'José', 'Maria']
const nomesUpperCase = nomes.map(element => element.toUpperCase())
console.log(nomesUpperCase)
```

## Exercício 4
Utilizando a função auxiliar reduce, escreva uma função chamada validaParenteses que avalia se os parênteses estão balanceados. Isso significa que, pra cada parênteses esquerdo “(“ é necessário ter um parênteses direito “)” correspondente.

A função deve aceitar uma string e retornar um valor booleano (true ou false).

``` javascript
function validaParenteses(string) {
    // Separa uma string em um Array
    const parenteses = string.split('')

    // Retorna falso caso o único operando possa ser convertido
    // para verdadeiro; senão, retorna verdadeiro.
    // 1 e -1 === false
    // 0 === true
    const newString = !parenteses.reduce((total, element) => {
        if (total < 0) { return total }
        if (element === '(') { return ++total }
        if (element === ')') { return --total }
    }, 0)

    return newString
}

console.log(validaParenteses('()'))
```

## Exercício 5

``` javascript

```

## Exercício 6
``` javascript

```

## Exercício 7
``` javascript

```

## Exercício 8
``` javascript

```

## Exercício 9
``` javascript

```

## Exercício 10
``` javascript

```

## Exercício 11
``` javascript

```

## Exercício 12
``` javascript

```

