# Exercícios

Nestes exercícios iremos praticar a utilização de templates strings.

## Exercício 1 - Lista de compras
Utilizando Templates Literais Marcadas, crie uma tag que transforma uma String que representa uma lista de compras (divididas por vírgula) em um elemento de lista HTML (&lt;ul&gt; com &lt;li&gt;).

Por exemplo:
``` javascript
const compras = ‘leite,feijão,arroz,mandioca’;
var elemento = tag`${compras}`;

console.log(elemento)
// <ul><li>leite<li><li>feijão<li><li>arroz<li><li>mandioca<li></ul>
```
``` javascript
const compras = `leite,feijão,arroz,mandioca,batata`;
var elemento = tag`${compras}`;

function tag(strings, ...values) {
    const valores = values.toString().split(',')

    const list = valores.map(element => {
        return `
        <li>${element}</li>`
    }).join('')

    return `
    <ul>${list}
    </ul>`
}

console.log(elemento)
```

## Exercício 2 - Maçaroca de Strings
Implemente o método `criaMacaroca` que recebe como parâmetro uma lista de strings. O método deve retornar uma única string que é o resultado de todos os itens do array concatenados. É obrigatório a utilização de template string.

* Exemplo: criaMacaroca(['a','b','c', 'd']) → abcd
```javascript
function criaMacaroca(listString) {
    return `${listString.join('')}`
}

console.log(criaMacaroca(['a', 'b', 'c', 'd']))
```

## Exercício 3 - Quero o seu endereço completo
Implemente o método `montaEnderecoCompleto` que recebe os seguites parâmetros:
- rua: String que reprenta o nome de uma rua
- cidade: String que representa o nome de uma cidade
- numero: Inteiro que representa o número da casa
- cep: String que representa o CEP de um endereço
```javascript
function montaEnderecoCompleto(rua, cidade, numero, cep) {
  return `${rua}, ${numero} - ${cidade}, ${cep}`;
}dw
```

O método deve retornar uma única string com esses dados no seguinte formato:
rua, numero - cidade, cep

Lembre-se de respeitar as vírgulas e os espaços!

## Exercício 4 - Seja muito bem-vindo!
Refatore o código a seguir para utilizar template strings.
``` javascript
let nome = 'usuario';
console.log('Bem-vindo ' + usuário + '!');
```
``` javascript
let nome = 'usuario';
console.log(`Bem vindo ${nome}!`)
```

## Exercício 5 - Cálculo interpolado
Faça a implementação da função 'soma' que recebe como parâmetro dois valores que devem ser somados. O resultado da soma deve ser exibido no console no seguinte formato:

<n1> + <n2> = <resultado>

Utilize template string para implementar este método.

* Exemplo: soma(1,2) → 1 + 2 = 3
```javascript
soma = (par1, par2) => {
    return `${par1} + ${par2} = ${par1 + par2}`
}

console.log(soma(1, 2))
```
