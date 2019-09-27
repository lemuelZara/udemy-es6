// Exercício 1 - Par ou ímpar?
const numeros = [2, 2, 34, 34, 1, 1, 13, 90, 23]
const nomes = ['Lemuel', 'Pedro', 'José', 'Maria']

numeros.forEach(element => {
    element % 2 === 0 ? console.log('Par') : console.log('Ímpar')
})

/**
 * Exercício 2
 * Utilizando o método map, escreva o método dobrar que recebe um
 * array de números inteiros e retorna um array com todos os
 * valores do array original dobrados.
 */
const dobrarArray = numeros.map(element => element * 2)
console.log(dobrarArray)

/**
 * Exercício 3
 * Escreva o método caps que recebe um array de strings e retorna
 * um outro array com todas as strings do array original em CAIXA ALTA.
 */
const nomesUpperCase = nomes.map(element => element.toUpperCase())
console.log(nomesUpperCase)


/**
 * Exercício 4
 * Utilizando a função auxiliar reduce, escreva uma função chamada
 * validaParenteses que avalia se os parênteses estão balanceados.
 * Isso significa que, pra cada parênteses esquerdo “(“ é necessário
 * ter um parênteses direito “)” correspondente.
 * 
 * A função deve aceitar uma string e retornar um valor 
 * booleano (true ou false).
 */
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

/**
 * Exercício 5
 * Faça uma função chamada removeDuplicatas que recebe um array de
 * números inteiros e remove todas as suas duplicadas.
 * 
 * Utilize as funções auxiliares: reduce e find.
 */
function removeDuplicatas(array) {
    return array.reduce((total, element) => {

        // Itera o array 'total', se o 
        // 'element' === 'numero', retorna o numero encontrado
        const achouDuplicata = total.find(numero => {
            return element === numero
        })

        /**
         * Nesse caso, se retornar o número, significa dizer que já
         * existe um número igual no Array 'total', o que caracteriza 2
         * número iguais. Por isso eu faço a negação do número dentro
         * do IF:
         * 
         * !2 === false
         * !34 === false
         */

        /**
         * Se não encontrar, pode-se perceber que o número em análise
         * não existe dentro do Array, então eu faço a inserção dele
         * dentro do array 'total'
         * 
         * !undefined === true
         */
        if (!achouDuplicata) {
            total.push(element)
        }

        return total
    }, [])
}
console.table(removeDuplicatas(numeros))

// 2ª Forma de se resolver
const uniqueNumber = numeros.filter((element, i, array) => {
    return array.indexOf(element) === i
})
console.table(uniqueNumber)

/**
 * Exercício 6
 * Dada uma lista de objetos que contém o nome de um aluno e sua média
 * final, crie o método 'aprovados' que recebe esta lista e retorna
 * somente os alunos que foram aprovados.
 * 
 * Para isto, utilize o método filter.
 */
const alunos = [
    { nome: 'Diogo', media: 5.6 },
    { nome: 'Julia', media: 9.5 },
    { nome: 'Roberto', media: 1.5 },
    { nome: 'Tiago', media: 6.0 }
]

function aprovados(list, criterio) {
    return list.filter(element => {
        return element.media > criterio
    })
}

console.table(aprovados(alunos, 2.5))

/**
 * Exercício 7
 * Crie uma função 'buscar' que receber três parâmetros
 *      .propriedade: Nome da prop no objeto
 *      .valor: valor da prop
 *      .lista: lista de objetos onde a busca deve ser executada
 * 
 * Dado estes parâmetros, a função deve buscar na lista e retornar
 * o registro que possui a propriedade com o valor especificado
 * 
 * Utilize o método find
 */
const lista = [
    { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 },
    { nome: 'Emilly', sobrenome: 'Barbosa', idade: 46 },
    { nome: 'Vitória', sobrenome: 'Costa', idade: 83 },
    { nome: 'Erick', sobrenome: 'Ferreira', idade: 16 }
]
function buscar(nameProp, valor, list) {
    return list.find(element => element[nameProp] === valor)
}
console.log(buscar('sobrenome', 'Costa', lista))

/**
 * Exercício 8
 * Crie um função 'calculaAreaTotal' que recebe um parâmetro
 *      .dimensoes: objeto que possui as propriedades 'altura' e
 *       'comprimento' que são números inteiros
 * 
 * A função deve retornar a soma de todas as áreas.
 */
const dimensoes = [
    { altura: 10, comprimento: 20 },
    { altura: 2, comprimento: 4 },
    { altura: 1, comprimento: 1 },
    { altura: 50, comprimento: 50 }
]
function calculaAreaTotal(dimensoes) {
    return dimensoes.reduce((total, element) => {
        return total + (element.altura * element.comprimento)
    }, 0)
}
console.log(calculaAreaTotal(dimensoes))

/**
 * Exercício 9
 * Crie uma função chamada calculaRaizesQuadradas que recebe um array
 * de números inteiros positivos e devolve um outro array com as raízes
 * quadradas correspondentes de cada um dos itens.
 *      .para este exercício, assuma que a entrada terá somente números
 *       com raiz exata.
 * 
 *      .utilize a função Math.sqrt para calcular a raiz quadrada
 */
const numbers = [4, 9, 16, 25, 36, 49, 64, 81, 100]
function calculaRaizesQuadradas(array) {
    return array.reduce((total, element) => {
        total.push(Math.sqrt(element))

        return total
    }, [])
}
console.table(calculaRaizesQuadradas(numbers))

/**
 * Exercício 10
 * .forEach() = objetivo é somente iterar os itens de uma lista, como
 *  por exemplo, exibir todos os valores no console (console.log)
 * 
 * .map() = ais apropriado para quando precisamos alterar os valores
 *  do array. Com ele, conseguimos alterar os valores sem danificar o
 *  array original.
 */

/**
 * Exercício 11
 * Utilizando o método auxiliar forEach, crie uma função clonaObjeto
 * que recebe como parâmetro um objeto e cria uma cópia exata dela.
 *      .utilize o método Object.getOwnPropertyNames para obter as
 *       propriedades do objeto
 */
const objectLemuel =
    { name: 'Lemuel', idade: 19, dataNascimento: 2000 }


function clonaObjeto(obj) {
    const prop = Object.getOwnPropertyNames(obj)
    const copyObject = {}

    prop.forEach(element => {
        copyObject[element] = obj[element]
    })

    return copyObject
}

console.log(clonaObjeto(objectLemuel))

/**
 * Exercício 12
 * Crie um método chamado existeProdutosDatados que recebe um parâmetro
 * chamado produtos que é um array de produtos e identifica se há algum
 * produto que está acima da data de validade. Caso existe, deve voltar
 * true, caso contrário, false. Cada produto tem as seguintes
 * características:
 *      .nome: String que representa o nome do produto
 *      .preço: Número que representa o preço do produto
 *      .dataValidade: Data de validade do produto
 * 
 * O método também deve aceitar um segundo parâmetro dataReferencia.
 * Se passado, o método deve fazer a comparação de validade em relação
 * a ele, caso contrário, utiliza a data da execução como parâmetro.
 * 
 * Exemplo: existeProdutosDatados(produtos, '2017-03-01')   → true
 *          existeProdutosDatados(produtos,'2016-01-01')    → false    
 * 
 */


const produtos = [
    { nome: 'Cereal', preco: '10', dataValidade: '21/02/2017' },
    { nome: 'Arroz', preco: '7', dataValidade: '01/01/2017' },
    { nome: 'Feijão', preco: '6', dataValidade: '07/07/2017' },
    { nome: 'Batata', preco: '5', dataValidade: '21/03/2017' }
]

function existeProdutosDatados(produtos, dataReferencia) {
    return produtos.some(element => {
        return new Date(element.dataValidade) < new Date(dataReferencia)
    })
}

console.log(existeProdutosDatados(produtos, '2017-03-01'))
console.log(existeProdutosDatados(produtos, '2016-01-01'))


