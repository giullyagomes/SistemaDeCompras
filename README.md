# Sistema de Compras Online

Este é um projeto de uma interface frontend para um sistema de compras online, desenvolvido como parte de uma atividade da Rocket Lab (Viságio). A aplicação permite visualizar produtos, adicionar/remover itens do carrinho, ver detalhes de produtos em um modal, finalizar compras e persistir o carrinho no localStorage. O projeto foi construído com React, TypeScript, Vite e Tailwind CSS, com foco em uma interface responsiva e funcional.

## Funcionalidades

- **Listagem de Produtos**: Exibe uma grade de produtos com nome, preço e imagem.
- **Detalhes do Produto**: Modal com descrição detalhada, preço e opção de adicionar ao carrinho.
- **Carrinho de Compras**: Adiciona/remover itens e calcula o total.
- **Finalização de Compra**: Limpa o carrinho com uma mensagem de sucesso.
- **Persistência de Dados**: Salva o carrinho no localStorage para manter os itens ao recarregar a página.
- **Responsividade**: Interface adaptada para dispositivos móveis e desktop.

## Pré-requisitos

Antes de rodar o projeto, certifique-se de ter:

- Node.js (versão 20 ou superior recomendada)
- npm (gerenciador de pacotes)
- Git (para clonar o repositório)

## Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/giullyagomes/SistemaDeCompras
   cd sistema-compras
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```

4. Acesse a aplicação no navegador em `http://localhost:5173`.

## Uso

- **Visualizar Produtos**: Navegue pela lista de produtos na página inicial.
- **Ver Detalhes**: Clique em "Detalhes" para abrir o modal com informações do produto.
- **Gerenciar Carrinho**: Adicione itens com o botão "Adicionar" e remova com "Remover" no carrinho.
- **Finalizar Compra**: Clique em "Finalizar Compra" para limpar o carrinho e exibir uma mensagem de sucesso.
- **Persistência**: O carrinho é salvo automaticamente no localStorage e restaurado ao recarregar a página.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface.
- **TypeScript**: Tipagem estática para maior segurança no código.
- **Vite**: Ferramenta de build rápida e moderna.
- **Tailwind CSS**: Framework CSS para estilização.
- **LocalStorage**: Persistência de dados no navegador.
- **Back4app**: Persistência de dados em um banco de dados.

## Estrutura do Projeto

- **App.tsx**: Componente principal que gerencia o estado do carrinho e produtos.
- **components/**: Contém os componentes reutilizáveis (ProductList, Cart, ProductModal).
- **services/api/**: (Contém os método de busca de dados no back4app).
- **index.css**: Estilos globais com Tailwind CSS.
- **postcss.config.cjs**: Configuração do PostCSS para Tailwind e Autoprefixer.
- **tailwind.config.js**: Configuração do Tailwind CSS.

## Correções e Ajustes

Durante o desenvolvimento, foram realizados os seguintes ajustes:

- Adicionada a exportação da interface `Product` em `App.tsx` para corrigir erros de importação nos componentes.
- Renomeado `postcss.config.js` para `postcss.config.cjs` para compatibilidade com CommonJS, devido ao `"type": "module"` no `package.json`.
- Corrigida a versão do Tailwind CSS para `3.4.7` no `package.json`.

- Implantação do banco de dados (Back4app)