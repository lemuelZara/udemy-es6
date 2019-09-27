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

``` javascript
```
