<h1 align="center">
    :mortar_board: :books: AcademicManager Ceuma
</h1>
<p align="center">
  <a href="#bookmark-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#warning-requisitos">Como acessar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#card_index_dividers-como-acessar">Como acessar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#postbox-perguntas-e-respostas">Perguntas e Respostas</a>
</p>

## :bookmark: Projeto

AcademicManager é um sistema de gerenciamento de alunos e cursos, desenvolvido durante o processo seletivo do Grupo Ceuma

## :computer: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [Jquery](https://jquery.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

## :rocket: Features

- Cadastro de alunos e cursos
- API de busca de CEP para preenchimento automático dos dados do aluno
- API de busca de estados e cidade
- Interface amigável para o controle dos dados
- Filtro de busca de cursos do aluno
- Botão para exportar dados para excel

## :warning: Requisitos

Para execução do projeto será necessário ter o [Node.js](https://nodejs.org/en/) e um servidor [PostgreSQL](https://www.postgresql.org/) instalado no ambiente
Perguntas e respostas podem ser encontradas em [Perguntas e Respostas](#postbox-perguntas-e-respostas)

## :card_index_dividers: Como Acessar

```bash
  $ git clone https://github.com/fredsonchaves07/academic-manager-ceuma.git
  $ cd academic-manager-ceuma
  $ npm install
  $ npm start
```

## :postbox: Perguntas e Respostas

**Pergunta** Qual foi o framework de desenvolvimento utilizado no backend?

**Resposta** Foi utilizado o [Express Framework](http://expressjs.com/en/) como ferramenta no controle do backend

##

**Pergunta** Foi utilizado alguma API para a consulta de CEP?

**Resposta** Sim, o serviço foi utilizado através de requisições do site [Via Cep](https://viacep.com.br)

##

**Pergunta** Foi aplicado alguma máscara de CPF, Telefone, CEP no cadastro dos dados

**Resposta** Sim, essas features foram aplicadas no projeto com o objetivo de deixar o cadastro mais dinâmico

##

**Pergunta** Qual API utilizada na consulta de estados e cidades?

**Resposta** Foi o utilizado a API do IBGE. Pode ser acessado nesse [link](https://servicodados.ibge.gov.br/api/)

##

**Pergunta** Qual biblioteca utilizada para exportar dados em planilha?

**Resposta** Como biblioteca para exportar dados, foi utilizado o [excellentexport](https://github.com/jmaister/excellentexport)

##
**Pergunta** O que é preciso para conectar no banco de dados?

**Resposta** Será necessário criar as tabelas ``courses`` e ``students`` em um banco de dados

Alguma dúvida? Abra uma nova [issue](https://github.com/fredsonchaves07/academic-manager-ceuma/issues) e reporte a sua dúvida 
 :smile:
 
 ---
 Developed with :blue_heart: by  Fredson Chaves
