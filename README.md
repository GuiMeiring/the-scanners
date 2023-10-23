# Motor Política Comercial

A aplicação possui o objetivo de otimizar o relacionamento entre cliente-vendedor, sendo completamente efetivo em termos de usabilidade e praticidade. Dessa forma, o projeto visa expandir o sistema de vendas para atender todas as necessidades requisitadas dentro do campo de negócios para ambos os usuários, sempre cumprindo as regras de compras e qualidade nos produtos e atendimento. Nesse sentido, o sistema apresenta recursos inovadores que irão favorecer as trocas comerciais e agregar ainda mais valor ao Grupo Malwee.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

[Node.js](https://nodejs.org/) - Ambiente de execução JavaScript no servidor.

[Angular CLI](https://angular.io/cli) - Ferramenta de linha de comando para Angular.

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/GuiMeiring/the-scanners.git
   
2. Acesse o diretório do projeto:

   ```bash
   cd the-scanners
   ````

## Configuração

### Cliente Angular

1. Navegue até a pasta do cliente:
   
   ``` bash
   cd client
   ```
2. Instale as dependências do cliente:

   ```bash
   npm install
   ```

3. Inicie o cliente Angular:

   ```bash
   ng serve
   ```
O cliente Angular será executado em http://localhost:4200/ por padrão.

### Servidor Node.js

1. Navegue até a pasta do servidor:

   ```bash
   cd server
   ```

2. Instale as dependências do servidor:

   ```bash
   npm install
   ```

3. Antes de executar a API, você precisa configurar algumas variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

   ```bash
   PORT=                                                 # Porta da aplicação 
   DB_SERVER=localhost                                   # Endereço ou localização do servidor de Banco de Dados Mysql
   DB_USER=                                              # Usuário Mysql
   DB_PASS=                                              # Senha do usuário Mysql
   DB_DATABASE=                                          # Nome do banco de dados
   USER_TYPE_PUBLIC=0                                    # Usada para quando uma rota for publica
   USER_TYPE_PRIVATE=1                                   # Usada para quando uma rota for privada                                                               
   PASSWORD_SALT=SFAAFsd3gkunffohtyh2o9%3238¨%vsujbsyvar # Usada para adicionar complexidade ao processo de hash de senhas de usuário
   JWT_KEY=fkjnion2h7usaklxue¨¨$#*safghasd5828asd2       # Chave do JWT
   ```

4. Inicie o servidor Node.js:

   ```bash
   npm start
   ```
O servidor Node.js estará disponível em http://localhost:3007/ por padrão.

## Uso

Agora que o cliente e o servidor estão em execução, você pode acessar o aplicativo no navegador em http://localhost:4200/ e interagir com ele.

## Estrutura do Projeto

- `client/`: Contém os arquivos do cliente Angular.

- `server/`: Contém os arquivos do servidor Node.js.

- `client/src/app/`: Contém os componentes, serviços e módulos do cliente Angular.

## Viabilidade Tecnica

### O projeto foi realizado nas seguintes tecnologia: 

- [Node.js](https://nodejs.org/en) - um ambiente de execução do código [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) para realização do backend e toda a parte de desenvolvimento da API.

- [Angular](https://angular.io) - para a formação do front-end, juntamente com [TypeScript](https://www.typescriptlang.org).

- [Mysql](https://www.mysql.com/) - utilizado para o gerenciamento do banco de dados relacional.

### Ferramentas utilizadas: 

- [Visual Studio Code](https://code.visualstudio.com) - para execução do Angular e do NodeJs.

- [Swagger](https://swagger.io) - para a documentação da API.

- [Jasmine](https://jasmine.github.io/) e [Karma](https://karma-runner.github.io/) - para teste de front-end.

- [Eslint](https://eslint.org/docs/latest/use/getting-started) - para manter o código JavaScript consistente no back-end, seguindo o Style Guide [Google](https://google.github.io/styleguide/).

- [Jest](https://jestjs.io) -  para teste back-end.

# Contato

![logotipo](https://github.com/GuiMeiring/the-scanners/assets/101908636/f6540118-e83d-4a2a-b04f-de6f48c46876) <!-- Imagem à esquerda -->

Para dúvidas ou informações adicionais, entre em contato com a equipe **THE SCANNERS**.


