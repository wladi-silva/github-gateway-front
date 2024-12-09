[![GitHub Projects](https://img.shields.io/badge/Projeto-GitHub%20Projects-FF5733)](https://github.com/users/wladi-silva/projects/1) [![Backend](https://img.shields.io/badge/Backend-GitHub%20Gateway%20Back-FFB400)](https://github.com/wladi-silva/github-gateway-back)

## Github Gateway

Este é o frontend do projeto GitHub Gateway, uma interface desenvolvida em React com TypeScript. 
Permite explorar informações de usuários e repositórios do GitHub de forma visual e intuitiva.

### Requisitos

* **Node.js 16 ou superior**
* **Gerenciador de pacotes: npm ou yarn**
* **Backend rodando localmente em http://localhost:8080**

### Tecnologias Utilizadas

* **React:** Biblioteca JavaScript para criação de interfaces de usuário.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática ao projeto.
* **Axios:** Cliente HTTP para comunicação com o backend.
* **TailwindCSS:** Framework CSS para estilização rápida e responsiva.

## Como Executar Localmente

Siga os passos abaixo para rodar o projeto em seu ambiente local.

1. **Clone o repositório:**

```bash
git clone https://github.com/wladi-silva/github-gateway-front.git
cd github-gateway-front
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Execute o projeto em ambiente de desenvolvimento:**

```bash
npm run dev
```

O frontend estará disponível em http://localhost:3000.

## Estrutura de Pastas

A estrutura de pastas do projeto é organizada da seguinte forma:

* **components**: Contém todos os componentes reutilizáveis que formam a interface do usuário, como Card, User, List, etc.
    * **card**: Exibe um cartão genérico com título, descrição e um campo de busca.
    * **list**: Lista repositórios do GitHub com links e ícones de linguagem.
    * **user**: Mostra informações do usuário, como avatar, nome e login do GitHub.
* **assets**: Inclui recursos estáticos, como imagens e ícones usados nos componentes.
* **styles**: Contém arquivos de estilização global e configurações de estilos (separados do Tailwind, caso necessário).
* **services**: Centraliza a lógica de comunicação com APIs externas, facilitando a manutenção e testes.
* **utils**: Inclui funções auxiliares para manipulação e formatação de dados, como truncar textos ou criar links.
