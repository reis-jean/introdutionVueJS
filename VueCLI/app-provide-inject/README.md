# app-provide-inject

## Visão Geral da Comunicação entre Componentes
*Component Communication Overview*  
Os componentes são usados para construir interfaces de usuário (UIs) combinando-os entre si.

Os componentes estabelecem relações "pai-filho" e utilizam "fluxos de dados unidirecionais" para comunicação.

---

## Eventos Personalizados (filho => pai)
*Custom Events (child => parent)*  
"Eventos Personalizados" são emitidos (via $emit) para acionar um método em um componente pai.

Os eventos personalizados podem carregar dados que podem ser usados no método chamado.

*Explicação*: Quando um componente filho precisa comunicar algo ao componente pai (como uma ação do usuário), ele emite um evento personalizado. O pai escuta esse evento e executa uma função em resposta.

---

## Props (pai => filho)
*Props (parent => child)*  
"Props" são usadas para passar dados de um componente pai para um componente filho.

As props devem ser definidas antecipadamente, possivelmente com muitos detalhes (tipo, obrigatoriedade, etc.).

*Explicação*: Props são como parâmetros que você passa para um componente filho. Elas são sempre de fluxo unidirecional (pai → filho) e imutáveis pelo filho.

---

## Provide-Inject
*Provide-Inject*  
Se os dados precisam ser passados através de vários componentes ("pass-through"), você pode usar *provide/inject*.

Forneça (provide) os dados em um componente pai e injete (inject) em um componente filho.

*Explicação*: Este é um padrão para evitar "prop drilling" (passar props através de muitos níveis de componentes). Um componente ancestral fornece dados que podem ser acessados por qualquer componente descendente, sem precisar passar por todos os níveis intermediários.

## Diferenças Chave:
- *Props*: Comunicação direta pai→filho (1 nível)
- *Eventos*: Comunicação filho→pai
- *Provide/Inject*: Comunicação ancestral→descendente (vários níveis) sem passar por todos os intermediários

