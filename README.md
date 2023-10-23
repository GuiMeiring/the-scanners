# the-scanners
![logotipo](https://github.com/GuiMeiring/the-scanners/assets/101908636/f6540118-e83d-4a2a-b04f-de6f48c46876)

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

Navegue até a pasta do cliente:

``` bash
cd client
```
Instale as dependências do cliente:

```bash
npm install
```

Inicie o cliente Angular:

```bash
ng serve
```
O cliente Angular será executado em http://localhost:4200/ por padrão.

### Servidor Node.js

Navegue até a pasta do servidor:

   ```bash
   cd server
   ```

Instale as dependências do servidor:

  ```bash
   npm install
  ```

## Configuração

Antes de executar a API, você precisa configurar algumas variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

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

