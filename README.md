# Projeto Your Signature - BackEnd!

## Descrição
O Projeto Busca Simular um Ecommerce de assinaturas de produtos. Venha conhecer um pouco mais!

Você está começado na parte certa, mas o projeto é composto por duas partes. Então olhe também o repositório de [FrontEnd](https://github.com/MarioFLS/your_signature_front);

Mas você deve <b>primeiro</b> fazer as ações do repositório de BackEnd (o que você está atualmente). Para poder utilizar o de Front
 
A aplicação Permite:

-  Ter uma experiência de um usuário, assinando vários aparelhos telefônicos;
-  O usuário pode criar ou conectar em sua conta, assim podendo fazer novas assinaturas, ver quais são os produtos possíveis e gerenciar suas assinaturas!

## Tecnologias Usadas

> Desenvolvida utilizando: JavaScript, NodeJS, express, express-async-errors, express-http-proxy, Docker, Docker-Compose Sequelize, Mongoose, JWT, morgan, Jest, Sinon, Swagger, Mysql, MongoDB.

# :warning: ATENÇÃO :warning:

### Esse projeto simula padrão de microsserviços com Docker. 
Esteja atento que ele criará algumas imagens e containers, tanto para distribuições Linux,
como bancos, são eles: MySQL e MongoDB.

Isso exige um pouco da sua maquina e um espaço na memória de mais ou menos 1GB a 2GB!

# Como Utilizar

## Para utilizar projeto, você precisa ter o [Docker](https://www.docker.com/), [Docker-Compose](https://docs.docker.com/compose/) e [Git](https://github.com/).
  ### Siga o passo a passo na ordem! Para Começar, primeiro você precisa Clonar esse repositório.
  No terminal do seu computador, rode o seguinte comandos:
  ps: Cheque se o link do git clone é esse mesmo que voce deseja.
  
  ```bash
  git clone git@github.com:MarioFLS/your_signature.git
  ```
  #### Entre na pasta criada e inicie a sua IDE. Vamos dar o exemplo usando o Linux e o VSCode:
  ```bash
  cd your_signature
  npm run db:install
  code .
  ```
  Caso o comando `npm run db:install`, cheque seu Docker para ver se os containers subiram. Rode novamente se alertar erros de conexão. Pode ser só demora do servidor!
  
  ### <strong>🐳 Usando Docker</strong></summary>
  > Agora você precisa subir os containers, utilize o terminal:
   ```bash
  docker-compose up -d
  ```
  Esse pode ser um processo um pouco demorado!
  <br />

## Iniciando a aplicação

#### Se for sua primeira vez utilizando o projeto, utilize o seguinte comando:
##### Como usuário
 ```bash
  npm run start:first
 ```
 ##### Como desenvolvedor
 ```bash
  npm run start:dev:first
 ```
### Pronto, o projeto já está no ar!

## DOCUMENTAÇÂO

### A documentação está no caminho /docs

 - Após iniciado a Aplicação utlize a rota `/docs`:
 #### Exemplo
 
 Sua aplicação estando rodando localmente ele provalvemente irá rodar na `http://localhost:4000`
 Então use o seguinte caminho `http://localhost:4000/docs`
 É bem simples, o próprio terminal vai te avisar do caminho da documentação

## Outros comandos interessantes

### Se você quiser só instalar as depêndencias
```bash
  npm run db:install
 ```
 
 ### Se você quiser só Iniciar ou Restaurar os banco
```bash
  npm run restore
 ```
 
### Se você quiser só Iniciar a Aplicação como usuário
```bash
  npm start
 ```
 
### Se você quiser só Iniciar a Aplicação como desenvolvedor
```bash
  npm run start:dev
 ```

#### Além disso, cada pasta da aplicação possui seus proprios comandos, vale a pena dar uma explorada. Nem sempre você precisará subir a aplicação inteira!


# TESTES

## Os testes devem ser rodados dentro das pastas especificadas

## :warning: Os testes precisam da aplicação no ar! :warning:
Estando a aplicação no ar, dentro da pasta utilize o comando `npm test`. Espere um pouco e você vera os testes e a porcentagem que cobrem.

Os testes reiniciam o banco de dados de Assinaturas, tenha isso em mente!

## Estou aqui para Ajudar!
Havendo algum problema. Entre em contato comigo, poderei auxiliar a resolver os problemas!
Isso também vale para dúvidas de funcionamento!
