# Exercícios

Nestes exercícios iremos exercitar como utilizar as estruturas de Map e WeakMap

## Exercício 1 - Você tem esse produto?
Crie um método chamado `possuiProduto` que recebe dois parâmetros:
- produtos: Mapa com nome e preço dos produtos (ex: 'Feijão: 2.30')
- produtoDesejado: String que representa o nome do produto desejado

Faça com o método retorne `true` caso o produto esteja contido no mapa, caso contrário, devolva `false`.

``` javascript
const produtos = new Map();
produtos.set('Arroz', 7.10);
produtos.set('Feijão', 2.30);
produtos.set('Macarrão', 4.70);
produtos.set('Refrigerante', 3.00);

possuiProduto = (produto, produtoDesejado) => {
    return produto.has(produtoDesejado)
}

console.log(possuiProduto(produtos, 'Batata'))
```

## Exercício 2 - Comprinhas online
Implemente o método 'calculaValorTotalDaCompra' que recebe quatro parâmetros:
- produtos: Lista com o nome dos produtos comprados
- cidade: String que representa o nome da cidade
- caixa: Mapa que contém relação de produtos e preços
- fretes: Mapa que contém relação de cidades e fretes

Calcule o preço total da compra junto com o frete de acordo com as tabelas a seguir:

Produtos:

|Produto|Preço|
|----|----|
|Arroz|7.10|
|Feijão|2.30|
|Macarrão|4.70|
|Refrigerante|3.00|

Fretes:

|Cidade|Frete|
|----|----|
|São Paulo|10.10|
|Rio de Janeiro|12.30|
|Brasília|14.70|
|Outros|13.00|

* Exemplo: calculaValorTotalDaCompra(['Arroz'], 'São Paulo', caixa, fretes) → 7.20
````javascript
const caixa = new Map()
caixa.set('Arroz', 7.10)
caixa.set('Feijão', 2.30)
caixa.set('Macarrão', 4.70)
caixa.set('Refrigerante', 3.00)

const fretes = new Map()
fretes.set('São Paulo', 10.10)
fretes.set('Rio de Janeiro', 12.30)
fretes.set('Brasília', 14.70)
fretes.set('Outros', 13.00)

calculaCompra = (produtos, cidade, caixa, fretes) => {
    let somaCompra = 0;

    for (const iterator of produtos) {
        somaCompra += caixa.get(iterator)
    }
    somaCompra += fretes.get(cidade)

    return somaCompra
}
````

## Exercício 3 - Não sei qual algoritmo usar hoje
Em que situações devemos usar uma implementação de `Map` ao invés de uma implementação de objeto literal?

## Exercício 4 - Professor, quando eu vou usar isso na minha vida?
Cite um exemplo de uso para a estrutura de `WeakMap`.

## Exercício 5 - Não vou mais com a sua cara.
Implemente o método `deletaAmigos` que recebe dois parâmetros:
- amigos: Mapa com relação de nome e informações sobre os amigos
- exAmigos: Lista com nome dos amigos que deve ser deletado

Para cada nome em `exAmigos`, você deve:
- Verificar se nome consta na lista. Se sim, deletá-lo e imprimir no console: "<nome> foi deletado!"
- Se o nome não estiver no mapa de amigos, exibir no console para o usuário: "<nome> não é seu amigo!"

Considere os seguintes amigos para este exercícios:

Amigos:

|Nome|Dados|
|----|----|
|João Silva|idade: 23, sexo: masculino|
|Luisa Pimenta|idade: 18, sexo: feminino|
|Julio Marinho|idade: 52, sexo: masculino|
|Marcela Mel|idade: 27, sexo: feminino|
````javascript
const amigos = new Map()
amigos.set('João Silva', { idade: 23, sexo: 'masculino' })
amigos.set('Luisa Pimenta', { idade: 18, sexo: 'feminino' })
amigos.set('Julio Marinho', { idade: 52, sexo: 'masculino' })
amigos.set('Marcela Mel', { idade: 27, sexo: 'feminino' })

deletaAmigos = (amigos, exAmigos) => {
    for (const exAmigo of exAmigos) {
        if (amigos.has(exAmigo)) {
            amigos.delete(exAmigo)
            console.log(`${exAmigo} foi excluído da lista`)
        } else {
            console.log(`${exAmigo} não é seu amigo`)
        }
    }
}
deletaAmigos(amigos, ['João Silva', 'Luisa Pimenta', 'Lemuel'])
````
