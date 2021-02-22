# To-Do APP

This application was developed to store simple day-to-day tasks, containing text and date, to organize the user's routines. 

Esse aplicativo foi desenvolvido para armazenar tarefas simples do dia-a-dia contento texto e data, para organizar as rotinas do usuário.


## :pushpin: Goal / Objetivo

Make an application that demonstrates skills as a Front-End Developer, working mainly with data storage and consumption in Local Storage. Established steps:

Fazer um aplicativo que demonstra habilidades como Desenvolvedor Front-End, utilizando como fonte de dados para armazenamento e obtenção de dados o Local Storage. Etapas estabelecidas:

- [x] Project creation / Criação do projeto
- [x] Base configuration for the project / Configuração base para o projeto
- [x] Creating the main HTML / Criação do HTML principal
- [x] Base creation / Criação dos Base
- [x] Component creation / Criação dos Componentes
- [x] Creating Pages / Criação das Páginas
- [x] Creation of Js Modules/ Criação dos Módulos Js
- [x] Creation of Js Helpers / Criação dos Helpers Js
- [x] Project Completion / Finalização do Projeto


## :rocket: Technologies / Tecnologias

- HTML
- Gulp
- Babel
- Sass
- Browsersync
- Javascript


## :movie_camera: Live Version

https://paulotelles.github.io/todo_app/


## :technologist: How to use / Como utilizar

You can start by downloading the project to your machine.

Inicialmente deve começar baixando o projeto em sua máquina.

### :computer: Initializing / Iniciando

To start, you must run the first command inside the folder you downloaded the project to install all dependencies. After installation, which may take a few minutes depending on your internet, you can compile and run the program using the second command.

Para iniciar você deve rodar o primeiro comando dentro da pasta que você baixou o projeto para instalar todas as dependências. Após a instalação que pode demorar alguns minutos dependendo da sua internet, você poderá compilar e executar o programa utilizando o segundo comando.

`yarn install`
</br>
`gulp server`

### :page_facing_up::page_facing_up: Acessing Multiple Pages / Acessando Múltiplas Páginas

`http://localhost:3000/another-page.html`

> To create new pages just add the respective files {name} .html at the root of the project.

> Para criar novas páginas basta adicionar os respectivos arquivos {nome}.html na raiz do projeto. Lembrando que você deverá estiliza-la criando outro arquivo SASS para a mesma e colocar a referência de importação no Head do seu HTML.

### :card_index_dividers: Folders / Pastas

The folder structure aims to keep the project organized, facilitating the identification of files.

A estrutura de pastas visa manter o projeto organizado, facilitando a identificação dos arquivos.

```sh
│
├── README.md
│
└── dist/ # Folder with the finals style and scripts / Pasta com os arquivos finais de estilo e scripts.
│
└── src
│    ├── img/
│    │
│    ├── js/
│    │   ├── modules / # Components scripts / Scripts dos componentes
│    │   ├── pages/ # Page Scripts / Scripts das páginas
│    │
│    ├── sass/
│        ├── base/
│        ├── components/
│        ├── pages # Estilos das páginas (Apenas esses arquivos são convertidos para CSS pelo Gulp)
│
├── gulpfile.js # Gulp Configs
│
│
```
