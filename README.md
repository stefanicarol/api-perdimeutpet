--------------------------------------
SEQUENCIA PARA CRIAR O PROJETO
--------------------------------------
Criar o arquivo package
npm init

//Gerencia as requisições, rotas e URLs, entre outra funcionalidades
npm install express

//Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte
npm install -D nodemon

//Rodar o projeto usando o nodemon 
nodemon app.js

//Instalar o MongoDB
npm install --save mongodb

//Instalar o Mongoose - Mongoose traduz os dados do banco de dados para objetos JavaScript para que possam ser utilizados por sua aplicação.
npm install --save mongoose

--------------------------------------
COMO RODAR O PROJETO BAIXADO
--------------------------------------

//Instalar todas as dependencias indicada pelo package.json
npm install

//Rodar o projeto usando o nodemon 
nodemon app.js