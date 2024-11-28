# ***Projeto de Automação Cypress - Nível basíco***

## ***Projeto de automação web com Cypress, escrevendo os primeiros casos de testes***

### ***Sistema Operacional***

- macOS 10.9 e superior (Intel ou Apple Silicon 64-bit (x64 ou arm64))
- Linux Ubuntu 20.04 e superior, Fedora 21 e Debian 8 (x86_64 ou Arm 64 bits (x64 ou arm64))
- Windows 10 e superior (apenas 64 bits)

### ***Mínimo de 2 CPUs para rodar o Cypress***

- 1 CPU adicional se a gravação de vídeo estiver ativada
- 1 CPU adicional por processo executado fora do Cypress, como:
  - Servidor de aplicativos (frontend)
  - Servidor de aplicativos (back-end)
- Banco de dados de aplicativos
- Qualquer infraestrutura adicional (Redis, Kafka, etc.)

### ***Tecnologias Utilizadas***

- Node JS
- VS Code

### ***Links de instalação***

- NodeJs - https://nodejs.org/en/download
- VSCODE - https://code.visualstudio.com/download

### ***Documentos de Referência***

- https://www.cypress.io/
- https://example.cypress.io/commands/actions
- https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Folder-Structure

# ***Configurando ambiente para começar a usar o Cypress***

## ***Agora iremos configurar o ambiente para iniciarmos nosso projeto com o Cypress. Para isso é necessário realizar o download da IDE do VSCODE***

### ***01 Instalação inicial***

- Faça o download o NodeJS e instale a versão compatível com seu Sistema Operacional;
- Faça o download e instale o VSCODE ou outra IDE de sua preferência;

### ***02 Instale o Cypress***

npm install cypress --save-dev

### ***03 Observação***

Configuração no package.json, um bloco de script para executar o cypress
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"cypress:open": "cypress open",
"cypress:run": "cypress run"
A sintaxe "cypress:open" determina como será executado o cypress, recebendo a instrução padrão "cypress open"

### ***04 Executando o cypress***

npm run cypress:open

# ***Obrigada!*** 
