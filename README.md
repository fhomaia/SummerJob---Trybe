# JavaScript Promises

### Tópicos
* [O que vamos aprender?](#por-que-isso-%C3%A9-importante)
* [Por que isso é importante?](#por-que-isso-%C3%A9-importante)
  <details>
    <summary> <strong>Conteúdos</strong> </summary>
    
    1. [Application Programming Interface (API)](#Application-Programming-Interface-(API))
    2. [O fluxo assíncrono e as APIs](#O-fluxo-assíncrono-e-as-APIs)
    3. [Promises](#Promises)
    4. Para fixar
  </details> 
  
* #### Exercícios
* #### Recursos Adicionais

___
### O que vamos aprender?

No capítulo anterior aprendemos a importância das **operações assíncronas** do JavaScript para se manter o bom funcionamento de uma aplicação e também como executá-las através das **callbacks**. Neste capítulo aprenderemos uma outra maneira de acessar estas operações assíncronas, desta vez através das chamadas _**Promises**_.

___

### Por que isso é importante?

Se já tínhamos uma implementação de funções assíncronas, por que a preocupação de criar todo um novo padrão para podermos ter exatamente a mesma coisa? O ganho que se tem ao utilizar _Promises_ não está atrelado à funcionalidade em si mas à **organização do código**: ter um código mais enxuto, mais fácil de ler, mais fácil de alterar, de identificar problemas e de consertá-los, ou seja, um **código mais limpo**. Não é à toa que _Promises_ são uma das formas mais populares de se escrever operações assíncronas em JavaScript hoje em dia.

___

### Conteúdo
### Application Programming Interface (API)

Dando mais contexto ao uso das _Promises_ falaremos sobre as **APIs**. Mas o que seria uma API?

API é o acrônimo para "Application Programming Interface" que significa em tradução para o português "**Interface** de Programação de Aplicativos".Ou seja,  nada mais é do que uma forma de comunicação entre sistemas. As APIs permitem a **integração entre dois sistemas**, em que um deles fornece informações e serviços que podem ser utilizados pelo outro.

Para assimilar melhor o conceito podemos fazer uma analogia com a seguinte situação: vamos supor que você esteja em um restaurante, olhe para o menu e se interesse por um dos itens. Como você faz pra que o restaurante fique ciente do seu interesse e entregue seu pedido? 
Normalmente, solicitamos ao garçom, pois ele tem acesso à cozinha e poderá comunicar seu pedido ao chefe  e  retorná-lo à mesa quando tudo estiver pronto. Nesta metáfora você representa um sistema e a cozinha representa outro. Para requerer algo do sistema “cozinha” é necessário o garçom, que neste caso representa uma API.

<img src="https://webstockreview.net/images/clipart-restaurant-hotel-restaurant-1.png" alt="Analogia restaurante API" width="400"/>

Uma API é criada quando uma empresa de software tem a intenção de que outros criadores de software desenvolvam produtos associados ao seu serviço.  O Google Maps é um dos grandes exemplos na área de APIs:  quando uma pessoa acessa uma página de um restaurante, por exemplo, é possível visualizar dentro do próprio site o mapa do Google Maps para saber a localização do estabelecimento e verificar qual o melhor caminho para chegar até lá. Esse procedimento é realizado por meio de uma API, onde os desenvolvedores do site do restaurante utilizam do código do Google Maps para inseri-lo em um determinado local de sua página permitindo com que a página do restaurante apresente a funcionalidade de localização sem a necessidade de que seus desenvolvedores escrevam todo o código do zero. Perceba os ganhos de tempo, qualidade e produtividade que as APIs agregam!

***
### O fluxo assíncrono e as APIs

Apesar das muitas vantagens proporcionadas pelo uso de APIs também existem algumas desvantagens que não podem ser ignoradas. APIs podem ser muito complexas, conter uma base de dados densa e um número de operações extenso e todos estes fatores impactam no tempo de resposta da API à uma solicitação feita. Imagine se toda a sua aplicação tiver que esperar o resultado de uma API para ser carregada, imagine no caso restaurante, se os clientes não conseguissem ver os produtos, preços e realizar seus pedidos até que os dados do Google Maps fossem carregados, não seria nada interessante não é mesmo? De acordo com dados do Kissmetrics, 47% dos clientes esperam que o carregamento de uma página seja feito em 2 segundos ou, se possível, menos do que isso. Se demorar 3 segundos, 40% abandonam o site, sendo que um atraso de um segundo pode diminuir 7% das conversões (vendas efetivadas). Isto significa que a **demora do tempo de resposta das APIS** é um problema que precisa ser tratado para que não afete no desempenho do resto da aplicação.

<img src="https://fiquebemdevida.files.wordpress.com/2018/01/tempo-e-dinheiro.jpg?w=626" alt="tempoédinheiro" width="400"/>

A resposta para este dilema é **tratar de forma assíncrona a requisição à API**. Como vimos anteriormente, o fluxo padrão do JavaScript segue um modelo de cascata (o código é lido de cima para baixo) no qual a próxima linha de código só é lida quando a execução da linha de código anterior é finalizada. Quando tratamos uma função de forma assíncrona possibilitamos quebrar esta sequência de forma que esta função não trave a leitura do restante do código.

Você já sabe a definição de uma API, sabe que devemos fazer a requisição para uma API de forma assíncrona mas ainda não respondemos uma pergunta. Como fazer esta requisição à API?  Continue no conteúdo para encontrar a resposta!

***

### Promises

Foi dito que as _Promises_ são utilizadas para fazer uma implementação assíncrona no código e será a partir delas que responderemos à pergunta de como fazemos uma requisição a uma API. Mas antes, vamos estudar a estrutura de uma _Promise_ afim de entendermos melhor seu funcionamento para então vermos sua aplicação.

Para iniciar uma Promise seguimos a seguinte estrutura:

1. Começamos com um construtor `new Promise`. O construtor recebe dois parâmetros: resolve, que atua quando a _Promise_ der certo e reject que atua quando a _Promise_ falhar. (Perceba que temos uma relação de condição).
```
const promise = new Promise ((resolve,reject) => {
});
```
2. Para simular uma situação de sucesso e erro, vamos utilizar o Math.random() para sortear um valor de 0 a 10. Se o valor for entre 0 e 5 (com 5 incluso), será um fracasso, caso o valor seja entre 6 e 10, será um sucesso. Sendo assim nosso código ficaria:
```
const promise = new Promise ((resolve,reject) => {

const number =  Math.random() * 10
if (number > 5) {
resolve(console.log(‘Sucesso! Nosso número foi {number}’));
}
return reject(console.log(‘Não foi desta vez. Nosso número foi {number}’));

});
```
Resolve e reject funcionam como o `return` de uma função porém, diferentemente do `return` eles não interrompem a execução da função e por isso devemos usar `return`  antes de um deles quando não se quer que a execução continue.

3. As _Promises_ nos permitem usar, em especial, dois gestores de fluxo: o `.then` e o `.catch`. Estes gestores permitem encadear a saída da _Promise_ a alguma outra ação que se deseja executar e garantem que esta outra ação só será executada quando a _Promise_ retornar a requisição. A diferença entre os dois gestores é que o `.then` trata da saída quando há sucesso e o `.catch` quando há erro. É importante ressaltar que o `.catch()` "pega" qualquer erro que acontecer dentro de qualquer `.then()` anterior a ele. Por esse motivo é geralmente usado no final. Podemos refatorar o código acima da seguinte maneira:

```
const promise = new Promise ((resolve,reject) => {

const number =  Math.random() * 10
if (number > 5) {
resolve(number);
}
return reject(number);

})
.then((resolve) => console.log(‘Sucesso! Nosso número foi {number}’)
.catch((reject) => console.log(‘Não foi desta vez. Nosso número foi {number}’))
```
Uma outra forma de declarar uma _Promise_ é utilizando a estrutura de **async/await**
