# dietboxtest

# Calculadora de Percentual de Gordura 7 dobras desenvolvido em Vue.js 2.

O projeto foi uma super simples calculadora de percentual de gordura que armazena e lista as informações das avaliações já realizadas

Tecnologias do Ecosistema Vue utilizadas no projeto

vue-router      Single-page application routing
vuex    Large-scale state management
vue-cli     Project scaffolding
vue-loader  Single File Component (*.vue file) loader for webpack

Breve descrição do projeto

O objetivo foi desenvolver algo simples porém próximo ao contexto do negócio com
foco em explorar o framework Vue.js versão 2.* e suas funcionalidades de store, router e components

Para armazenar as avaliações calculadas está sendo utilizado um repositório no firebase (na aplicação o acesso ao mesmo, para fins de separação de responsabilidades ficou dentro do diretório API que expõe e disponibiliza a referência aos dados para as demais partes da aplicação)

O componente Avaliacoes.vue concentra todas as funcionalidades da aplicação
- Listagem de avaliações realizadas
- Detalhe da avaliação (selecionada ao clicar no campo Nome na listagem) 
- Formulário de cálculo com os campos a serem informados

A idéia era segregar cada uma das funcionalidades em componentes diferentes porém um pitfall na maneira como o
firebase retorna os dados num dictinary e não em listagem acabou fazendo a idéia ser abortada ficando para um V2.
Alguns campos do model como massa_magra, massa_gorda etc não foram utilizados ficando também para um V2.
O CSS ficou super extenso e também necessita refactoring

Observações sobre 2 componentes externos utilizados na UI

VueNumeric - eu não gostei do comportamento visual porque sempre deixa um valor mesmo se não setar a propriedade place-holder

VeeValidate - não aplica as classes nos campos como promete e tem um comportamento estranho após o submit que deixa 
o formulário em estado inválido e não limpo como deveria, apesar de explicitamente estar sendo chamado o reset do mesmo 
talvez posso ser algo relacionado a uma execução postergada de métodos porém mesmo tentando fazer a limpeza após concluido o retorno da promise que valida e insere não funcionou então deixei a validação somente no campo nome, excluí o atributo de validação dos outros inputs do formulário logo os spans de erro abaixo dos campos estão sendo inutilizados 

