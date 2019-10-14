# Exercícios

Nestes exercícios revisaremos como funciona no novo modelo de classes proposto pelo ECMAScript 6.

## Exercício 1 - Dando uma transformada nos objetos
Refatore o código a seguir para que declaração do objeto `VideoGame` seja uma classe de acordo com o ES6. Não se esqueça de criar o construtor e invocar um objeto desta classe.

``` javascript
function VideoGame(marca, nControles, tipoMidia) {
  this.marca = marca;
  this.nControles = nControles;
  this.tipoMidia = tipoMidia;
}

var playstation = new VideoGame('sony', '2', 'dvd');
console.log(playstation);
// { marca: 'sony', nControles: '2', tipoMidia: 'dvd' }
```
```javascript
class VideoGame {
    constructor(marca, nControles, tipoMidia) {
        this.marca = marca
        this.nControles = nControles
        this.tipoMidia = tipoMidia
    }
}

const playstation = new VideoGame('Sony', 2, 'DVD')
console.log(playstation)
```

## Exercício 2 - O meu videogame é muito melhor que o seu
Aproveitando a classe `VideoGame` criada no exercício anterior, implemente a classe `PlayStation` que contém todas as propriedades do `VideoGame` mais as seguintes proprieades:
- nEntradasUSB: inteiro que representa a quantidade de entradas usb do console
- voltagem: inteiro que representa a voltagem do console.
- adicionais: array de strings que representam os nomes dos adicionais do videogame (ex: adicionais=['Controle sem fio', 'Volante'])

Não esqueça de invocar um objeto da classe.
```javascript
class PlayStation extends VideoGame {
    constructor(marca, nControles, tipoMidia, nEntradaUSB, volt, adicionais) {
        super(marca, nControles, tipoMidia)
        this.nEntradaUSB = nEntradaUSB
        this.volt = volt
        this.adicionais = [adicionais]
    }
}

const playstation = new PlayStation('Sony', 2, 'DVD', 2, 5, ['Controle sem Fio', 'Volante'])
console.log(playstation)
```

## Exercício 3 - Tem alguém ai?
Crie uma classe chamada `Porta` que contenha um método chamado `toctoc` que sempre responde no console a mensagem: 'Quem é?'. O método deve funcionar mesmo sem que exista uma instância da classe.
```javascript
class Porta {
    static toctoc() {
        console.log('Quem é ? ...')
    }
}

Porta.toctoc()
```

## Exercício 4 - Qual é o jeito certo de fazer isso então?
Um programador codificou o seguinte trecho:
``` javascript
const comida = new Comida('Feijão');
class Comida {
  constructor(nome) {
    this.nome = nome;
  }
}
```

Ao tentar executar, ele recebeu o seguinte erro:
``` javascript
ReferenceError: Comida is not defined
```

Por que aconteceu este erro? O que é preciso modificar para que o código funcione corretamente?

> O erro acontece pois não se pode declarar uma Classe antes da mesma ser criada, pois a mesma não tem o comportamento de `hoisting`. Precisa-se declarar a Classe em primeiro, depois acessar a mesma.

```javascript
class Comida {
    constructor(nome) {
        this.nome = nome;
    }
}

const comida = new Comida('Feijão');
```


## Exercício 5 - Declarações anônimas
Refatore o código a seguir para trocar a declaração da classe para que seja anônima:

``` javascript
class Computador {
  // conteúdo da classe
}
```
```javascript
const Computador = class {
    // conteúdo da classe
}
```
