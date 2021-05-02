# JavaScript Promises

### Tópicos
* [O que vamos aprender?](#por-que-isso-%C3%A9-importante)
* [Por que isso é importante?](#por-que-isso-%C3%A9-importante)
  <details>
    <summary> <strong>Conteúdos</strong> </summary>
    
    1. [Application Programming Interface (API)](#Application-Programming-Interface-(API))
    2. [O fluxo assíncrono e as APIs](#O-fluxo-assíncrono-e-as-APIs)
    3. Promises
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

<img src="https://webstockreview.net/images/clipart-restaurant-hotel-restaurant-1.png" alt="drawing" width="400"/>

Uma API é criada quando uma empresa de software tem a intenção de que outros criadores de software desenvolvam produtos associados ao seu serviço.  O Google Maps é um dos grandes exemplos na área de APIs:  quando uma pessoa acessa uma página de um restaurante, por exemplo, é possível visualizar dentro do próprio site o mapa do Google Maps para saber a localização do estabelecimento e verificar qual o melhor caminho para chegar até lá. Esse procedimento é realizado por meio de uma API, onde os desenvolvedores do site do restaurante utilizam do código do Google Maps para inseri-lo em um determinado local de sua página permitindo com que a página do restaurante apresente a funcionalidade de localização sem a necessidade de que seus desenvolvedores escrevam todo o código do zero. Perceba os ganhos de tempo, qualidade e produtividade que as APIs agregam!

***
### O fluxo assíncrono e as APIs

