# AJAX-API-SIMULADA
Desenvolvimento de uma aplicação web simples para Cadastro AJAX com Tabela Dinâmica. O bjtivo foi criar um formulário. JSON Server (db.json): Confiuração de um arquivo db.json para simular um banco de dados. O JSON Server 


# 🚀 Projeto de Cadastro AJAX com Tabela Dinâmica

## Visão Geral do Projeto

Este repositório contém uma aplicação web front-end desenvolvida para demonstrar a manipulação de dados em tempo real utilizando requisições AJAX (Asynchronous JavaScript and XML) em conjunto com uma tabela dinâmica[cite: 1]. O projeto permite que usuários realizem operações CRUD (Create, Read, Update, Delete) de forma interativa, sem a necessidade de recarregar a página, proporcionando uma experiência de usuário fluida e responsiva.

A aplicação simula um sistema de gerenciamento de usuários, onde é possível cadastrar novos indivíduos, visualizar uma lista de todos os usuários, editar seus dados e, se necessário, removê-los. Para o backend, utilizamos o JSON Server, uma ferramenta que permite criar uma API RESTful completa e funcional com base em um arquivo JSON simples[cite: 1], ideal para prototipagem e desenvolvimento front-end sem a necessidade de um servidor de verdade.

## 🎯 Objetivos

* **Compreender e Aplicar AJAX:** Demonstrar o uso da API `fetch` do JavaScript para realizar requisições assíncronas ao servidor[cite: 3].
* **Manipulação de DOM Dinâmica:** Ilustrar como o JavaScript pode ser usado para adicionar, remover e atualizar elementos HTML (neste caso, linhas de uma tabela) de forma dinâmica[cite: 3, 4].
* **Gerenciamento de Estado Simplificado:** Apresentar uma abordagem básica para o gerenciamento de dados de usuários no lado do cliente.
* **Simulação de Backend:** Utilizar o JSON Server para simular um ambiente de API REST, permitindo o desenvolvimento front-end independente de um backend real em fase inicial[cite: 1, 2].
* **Interatividade e Usabilidade:** Prover uma interface de usuário responsiva e interativa, com feedback visual para operações de sucesso e erro[cite: 3, 4].

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura fundamental da página web, incluindo o formulário de cadastro e a tabela de exibição[cite: 4].
* **CSS3:** Estilização básica da interface, com classes para mensagens de sucesso (`.sucesso`) e erro (`.erro`), e formatação da tabela[cite: 4].
* **JavaScript (ES6+):** Lógica principal da aplicação[cite: 3], responsável por:
    * Interação com o formulário (`addEventListener`)[cite: 3].
    * Requisições AJAX via `fetch` para `POST`, `GET`, `PUT` e `DELETE`[cite: 3].
    * Manipulação do DOM para renderizar a tabela dinamicamente (`tabelaCorpo`) e exibir mensagens (`mensagem`)[cite: 3, 4].
    * Funções como `mostrarMensagem`, `carregarLista`, `editar` e `apagar`[cite: 3].
* **JSON Server:** Ferramenta para criar uma API RESTful de forma rápida e eficiente a partir de um arquivo `db.json`, servindo como mock de backend para o desenvolvimento[cite: 1, 2].

## 📂 Estrutura do Projeto

O projeto está organizado na seguinte estrutura de diretórios:

ajax-form/
├── index.html
├── script.js
└── db.json


* `index.html`: Contém a estrutura HTML do formulário de cadastro, a tabela de exibição de usuários e a inclusão do script JavaScript[cite: 4].
* `script.js`: Contém todo o código JavaScript responsável pela lógica da aplicação, incluindo as funções AJAX e manipulação do DOM[cite: 3].
* `db.json`: Arquivo JSON que serve como "banco de dados" para o JSON Server, onde os dados dos usuários são armazenados em um array `usuarios`[cite: 2].

## ⚙️ Como Executar o Projeto

Para colocar este projeto em funcionamento em sua máquina local, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) e o [npm (Node Package Manager)](https://www.npmjs.com/) instalados em seu sistema. Você pode verificar as instalações executando os seguintes comandos no terminal:

```bash
node -v
npm -v
Instalação e Inicialização
Clone o Repositório:
```

Bash

git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
cd SEU_REPOSITORIO/ajax-form
Substitua SEU_USUARIO e SEU_REPOSITORIO pelos valores corretos do seu GitHub.

Instale o JSON Server Globalmente:
Se você ainda não tem o JSON Server instalado, execute o comando abaixo:

Bash

npm install -g json-server
Este comando instala o JSON Server globalmente, permitindo que você o execute a partir de qualquer diretório.

Inicie o JSON Server:
Dentro da pasta ajax-form (onde db.json está localizado), execute o seguinte comando:

Bash

json-server --watch db.json
Você deverá ver uma saída no terminal indicando que o servidor foi iniciado, geralmente em http://localhost:3000.
Observação: A partir do JSON Server 1+, o --watch pode ser omitido, pois ele observa as mudanças nos arquivos por padrão, mas incluí-lo não causará problemas.

Abra a Aplicação no Navegador:
Com o JSON Server em execução, abra o arquivo index.html em seu navegador web preferido. Você pode fazer isso navegando até o arquivo no explorador de arquivos e clicando duas vezes, ou usando uma extensão de servidor local no seu editor de código (ex: Live Server no VS Code).

🚀 Funcionalidades
Cadastro de Usuários:
Preencha o formulário com Nome e Email e clique em "Cadastrar".
Os dados são enviados via AJAX (POST para http://localhost:3000/usuarios) para o JSON Server  e, em seguida, a tabela é atualizada dinamicamente para exibir o novo usuário.
Mensagens de sucesso (Cadastro feito com sucesso!) ou erro (Erro ao cadastrar.) são exibidas para feedback ao usuário.
Visualização de Usuários:
Ao carregar a página (window.onload), todos os usuários existentes são buscados da URL http://localhost:3000/usuarios e exibidos na tabela.
A tabela é atualizada automaticamente após operações de cadastro, edição ou exclusão.
Edição de Usuários:
Clique no botão "Editar" ao lado de um usuário na tabela.
Os campos do formulário são preenchidos automaticamente com os dados do usuário selecionado.
Ao submeter o formulário novamente, os dados do usuário são atualizados via requisição PUT para o JSON Server (ex: http://localhost:3000/usuarios/{id}).
A tabela é atualizada e uma mensagem de sucesso (Atualizado com sucesso!) é exibida.
Exclusão de Usuários:
Clique no botão "Apagar" ao lado de um usuário na tabela.
Uma caixa de diálogo de confirmação (Tem certeza que deseja apagar?) é exibida para evitar exclusões acidentais.
Confirmar a exclusão envia uma requisição DELETE para o JSON Server (ex: http://localhost:3000/usuarios/{id}) e o usuário é removido da tabela dinamicamente. Mensagem de sucesso (Apagado com sucesso!) é exibida.
🤝 Contribuição
Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou encontrar algum bug, sinta-se à vontade para:

Abrir uma Issue descrevendo a funcionalidade desejada ou o problema encontrado.
Criar um Fork do projeto.
Implementar suas alterações em uma nova branch (git checkout -b feature/minha-feature ou fix/meu-bug).
Realizar um git commit com uma mensagem clara sobre suas alterações.
Fazer um git push para a sua branch no seu fork.
Abrir um Pull Request para o repositório original.
📄 Licença
Este projeto está licenciado sob a licença MIT. Para mais detalhes, consulte o arquivo LICENSE no repositório.

