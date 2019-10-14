# Exercícios

Nos exercícios a seguir iremos rever os principais aspectos das funções geradoras.

## Exercício 1 - O que é isso?
Em termos simples, explique o que são funções geradoras e como podemos identificá-las.

> São funções que podem interromper e retornar sua execução várias vezes. Podemos identificá-las através do `*` na declaração de uma `function* funcaoGeradora() {}`


## Exercício 2 - Sinal de parada
Considere o trecho de código a seguir:
``` javascript
function* testeDeGeradores() {
  console.log('passei aqui!');
  yield 'fim do método';
}
```

Ao executar o método, a frase "passei aqui!" não é exibida no console como esperado. Por quê? O que é necessário fazer para que a mensagem seja exibida?

> Quando chamamos uma função geradora, seu corpo não é executado imediatamente. Em vez disso, um objeto iterável é retornado. Esse objeto possui uma função muito útil chamada next. Ao utilizar este método next dele, o corpo da função geradora é executado até a primeira expressão yield, que define o valor que será devolvido no retorno da função.
```javascript
function* testeDeGeradores() {
    console.log('passei aqui!');
    yield 'fim do método';
}

testeDeGeradores().next()
```


## Exercício 3 - Corre Bolt! Corre!
Implemente uma função geradora chamada 'correBolt' que retorna para cada parada um checkpoint. Em cada checkpoint, deve ser impresso a mensagem: `Usain passou no Checkpoint X`, onde "X" indica o número do checkpoint. A função deve ter quatro paradas. Não se esqueça de invocar o método `next`.
```javascript
function* correBolt() {
    console.log('Checkpoint 1')
    yield 'Usain passou no Checkpoint 1'
    console.log('Checkpoint 2')
    yield 'Usain passou no Checkpoint 2'
    console.log('Checkpoint 3')
    yield 'Usain passou no Checkpoint 3'
    console.log('Checkpoint 4')
    yield 'Usain passou no Checkpoint 4'
}

const checkpoint = correBolt()
checkpoint.next()
checkpoint.next()
checkpoint.next()
checkpoint.next()

```


## Exercício 4 - Temos que pegar!
Refatore o trecho de código a seguir utilizando todas as melhorias propostas pelo ES6 até então. Use obrigatoriamente funções geradoras.

``` javascript
var pokemons = ['Pikachu', 'Charmander', 'Caterpie'];
for(var index = 0; index < pokemons.length; index++) {
	var pokemon = pokemons[index];
	console.log('Capturou o ' + pokemon + '!');
}
```
```javascript
function* capturarPokemon() {
    yield 'Pikachu'
    yield 'Charmander'
    yield 'Caterpie'
}

for (const iterator of capturarPokemon()) {
    console.log(`Capturou o Pokemon: ${iterator}`)
}
```

## Exercício 5 - Símbolos dizem até demais
Considere o seguinte objeto `equipe` representada pelo código que segue:
``` javascript
const equipe = {
  gerente: 'Gilberto',
  estagiario: 'Fernanda',
  senior: 'Paulo',
  pleno: 'Camila',
  junior: 'Adão'
}
```

Faça com que o objeto `equipe` se torne iterável em um laço de repetição do tipo `for...of`.

Exemplo:
``` javascript
for(let integrante of equipe) {
  console.log(integrante);
}

/*
Gilberto
Fernanda
Paulo
Camila
Adão
*/
```

```javascript
const equipe = {
    gerente: 'Gilberto',
    estagiario: 'Fernanda',
    senior: 'Paulo',
    pleno: 'Camila',
    junior: 'Adão',
    [Symbol.iterator]: function* () {
        yield this.gerente
        yield this.estagiario
        yield this.senior
        yield this.pleno
        yield this.junior
    }
}

for (const iterator of equipe) {
    console.log(iterator)
}
```
