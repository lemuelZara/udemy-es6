# Exercícios

Nestes exercícios iremos exercitar como utilizar a declaração de variáveis utilizando o `const` e o `let`

## Exercício 1 - Sei tudo sobre variáveis
Considere o trecho de código abaixo e responda as questões:

``` javascript
var arrayFuncoes = [];
for(var i = 0; i < 10; i++){
  arrayFuncoes.push(function(){
    console.log(i);
  });
}

arrayFuncoes.forEach(function(funcao){
  funcao();
});
```
a) Quais os valores são exibidos no console na execução desse código?
> O valor 10 será exibido várias vezes

b) Como podemos ajustar o comportamento desta função utilizando ES6?
> Utilizando o `let`

## Exercício 2 - ISSO_EH_UMA_CONSTANTE
Uma prática comum dos desenvolvedores é deixar o nome das variáveis que representam constantes em caixa alta. Como por exemplo, uma variável que armazena uma chave de API de um webservice. Com o ES6, temos uma maneira melhor de representar isso. Que maneira é essa?
> Utilizando a palavra-chave `const`

## Exercício 3 - Eu estou mandando atribuir!
Um programador júnior de uma empresa de software está tentando executar o seguinte código:

``` javascript
function nomeCompleto(primeiroNome, segundoNome){
  const nomeCompleto = primeiroNome;
  nomeCompleto += ' ' + segundoNome;

  return nomeCompleto;
}
```

Ele não consegue entender o que está fazendo de errado. No que ele está errando?
> Ele está tentando atribuir um valor a uma variável `const`, onde a mesma não pode ter seu valor alterado

## Exercício 4 - Não estou entendendo mais nada
Uma jovem programadora pensou que havia entendido como funcionava a declaração de variáveis com `let` e `const` até ver o seguinte trecho de código:
``` javascript
const jogador = {};
jogador.nome = 'Rodrigo';
jogador.idade = 33;

console.log(jogador.nome  + '_' +  jogador.idade); // saída: Rodrigo_33
```

Ela achou que este código não funcionaria, pois havia entendido que não era possível colocar novos valores em variáveis declaradas com `const`. Por que este código funciona sem problemas?
> É necessário ter em mente que um const não se trata de uma variável constante, mas uma referência constante. Em termos práticos, isso significa que o valor não é imutável, é possível adicionar e remover propriedades desta variável. Por isso funcionou.

## Exercício 5 - Lá vem um temporal
O que significa o _Temporal Dead Zone_? Qual sua relação com o _Hoisting_?
> No JavaScript, a declaração das nossas funções e variáveis possuem o comportamento de Hoisting. Este nome é dado ao comportamento de mover declarações para o topo de um escopo (global ou não). Em outras palavras, isso significa que é possível usar uma variável ou função antes mesmo de declará-las no código. No ES6, o “hoisting” do let e const são diferentes de variáveis e funções. Quando uma variável é declarada usando let ou const , ela possui o que é chamada de Temporal Dead Zone (TDZ), nome que descreve o comportamento de que, no seu escopo, ela é inacessível até que a execução alcance sua declaração

## Exercício 6 - Tudo fora de escopo
Refatore o código a seguir utilizando o `const` e `let`.
``` javascript
var status = [
  { codigo: 'OK', resposta: 'Sucesso' },
  { codigo: 'FAILED', resposta: 'Erro' },
  { codigo: 'PENDING', resposta: 'Pendente' }
];
var mensagem = '';
var codigoAtual = 'OK';

for (var i = 0; i < status.length; i++) {
  if (status[i].codigo === codigoAtual) {
    mensagem = status[i].resposta;
  }
}

console.log(mensagem);
```
Código refatorado:

```javascript
const status = [
    { codigo: 'OK', resposta: 'Sucesso' },
    { codigo: 'FAILED', resposta: 'Erro' },
    { codigo: 'PENDING', resposta: 'Pendente' }
];
let mensagem = '';
const codigoAtual = 'OK';

for (let i = 0; i < status.length; i++) {
    if (status[i].codigo === codigoAtual) {
        mensagem = status[i].resposta;
    }
}

console.log(mensagem);
```
