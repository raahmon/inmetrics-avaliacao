## Instruções para execução do projeto abaixo.

## Requisitos:
Para rodar o Cypress no Windows, você precisará ter os seguintes requisitos:

> Node.js: O Cypress requer o Node.js instalado no seu sistema. 

Você pode baixar o instalador do Node.js no site oficial e seguir as instruções para instalação.

Acesse o site oficial do Node.js em https://nodejs.org.

Após a conclusão da instalação, abra o prompt de comando e digite o seguinte comando para verificar se o Node.js foi instalado corretamente: 
>### 'node --version'

Não é necessário instalar o npm separadamente. 

Para verificar se o npm está instalado corretamente após a instalação do Node.js, você pode abrir o prompt de comando ou o PowerShell e executar o seguinte comando:


>### 'npm --version'

## 


Após instalar o Node.js, você pode seguir os seguintes passos para começar a usar o Cypress:

Abra o terminal ou prompt de comando no Windows.

Navegue até o diretório do seu projeto ou crie um novo diretório para o projeto.

Execute o seguinte comando para iniciar um novo projeto Cypress e instalar as dependências necessárias:


>### 'npm init'
Isso inicializará um projeto Node.js e criará o arquivo "package.json".

Execute o seguinte comando para instalar o Cypress (versão 13.16.1):


>### 'npm install cypress@13.16.1 --save-dev'


Execute o seguinte comando para abrir o Cypress e criar as pastas estruturadas necessárias para o projeto:

>### 'npx cypress open'
- Isso abrirá o Cypress Test Runner e criará a estrutura de pastas do projeto.

    Observação: <br/> 
        O comando "npx cypress open" cria a estrutura padrão de pastas e abre o Cypress.

        Na primeira vez que você executar o Cypress, uma mensagem aparecerá onde o Cypress fará uma verificação de compatibilidade.

        Caso ocorra algum erro de timeout, basta executar novamente o comando "npx cypress open" e clicar em "E2E Testing".
- Selecione um navegador de sua escolha.
Selecione a opção com exemplos de testes scaffold <br/>
Clique em "Ok, got it" para criar a estrutura básica do projeto.

Estrutura básica do projeto:
Ao final do processo, além de criar a estrutura de pastas do projeto, será aberto o Cypress Test Runner com alguns arquivos de exemplo para você estudar sobre o Cypress.

Estrutura inicial do projeto:

* Pasta "cypress" (pasta principal):
* Pasta "e2e - step_definitions": onde estão as novas automações .
* Pasta "support": Configuração de extensões ou plugins são adicionados aqui, além da criação dos "commands".
* Arquivo "cypress.json": Onde ficam as configurações do Cypress, como uma URL base para usar em todos os testes, dados para login, entre outras configurações.