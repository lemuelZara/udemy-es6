# Exercícios

Neste exercícios vamos exercitar como utilizar parâmetros padrões em funções.

## Exercício 1 - Quem é você?
O que acontece na execução do código a seguir?

``` javascript
function mostraNome(nome) {
    console.log(`Meu nome é: ${nome}`);
}

mostraNome(); // ??
```

> O resultado é `undefined`, pois não foi indicado explicitamente qual o valor que queremos que o parâmetro tenha na execução do método

## Exercício 2 - Me passa uns parâmetros ae
Refatore o código a seguir utilizando parâmetros padrão de função.

``` javascript
function soma(a,b) {
  if(a === undefined) {
    a = 0;
  }
  if(b === undefined) {
    b = 0;
  }

  return a + b;
}
```
```javascript
function soma(a = 0, b = 0) {
    return a + b;
}

console.log(soma())
```

## Exercício 3 - Tá aqui a minha identidade
Refatore o código a seguir de modo a remover as variáveis `sobrenomeTratado` e `nomeDoMeioTratado`.

``` javascript
function imprimeNomeCompleto(nomeTratado, sobrenome, nomeDoMeio) {
  let nomeTratado = nomeTratado || '';
  let sobrenomeTratado = sobrenome || '';
  let nomeDoMeioTratado = nomeDoMeio || '';

  console.log(`${nomeTratado} ${nomeDoMeioTratado} ${sobrenomeTratado}`);
}

imprimeNomeCompleto('João'); // João
```
```javascript
function imprimeNomeCompleto(nomeTratado = '', sobrenome = '', nomeDoMeio = '') {
    console.log(`${nomeTratado} ${nomeDoMeio} ${sobrenome}`);
}

imprimeNomeCompleto('João'); // João
```

## Exercício 4 - Adivinha em quem eu estou pensando?
Considere o código a seguir e responda: Qual o valor será mostrado? E por que?

``` javascript
const v = 'valor 1';
function example(x = v) {
  const v = 'valor 2';
  console.log(x);
}

example(); // qual valor será mostrado?
```
> O valor mostrado será 1, pois como não foi passado nenhum parâmetro para a função `example()`, a mesma atribuirá o valor padrão para o parâmetro esperado como sendo a variável `const v = 'valor 1`, que nesse caso funcionará sem problemas, pois essa atribuição está fora do escopo da função, conseguindo encontrar a variável `v`

> Ao executar esta função, percebemos que o valor atribuído ao padrão é "valor 1" e não "valor 2". Isso aconteceu exatamente por causa do escopo de bloco que vimos no capítulo de const e let. Se removemos a primeira declaração da variável v, somos presenteados com um belo erro: `ReferenceError: v is not defined`

## Exercício 5 - Pare de me imitar!
Como podemos tornar o código abaixo menos repetitivo?

``` javascript
function subtrair(a = 0,b = 0) {
  return a + b;
}
```
```javascript
function subtrair(a = 0, b = a) {
    return a + b;
}
```

