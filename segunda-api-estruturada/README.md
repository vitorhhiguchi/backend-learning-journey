# 02 – API Estruturada

## 🎯 Objetivo

Refatorar a primeira API criada anteriormente, aplicando uma **estrutura mais organizada**, separando responsabilidades e começando a pensar como backend de verdade.

O foco deste projeto **não é adicionar novas funcionalidades**, mas **melhorar a qualidade do código**.

---

## 🧠 Conceitos aplicados

- Separação de responsabilidades
- Organização de pastas
- Reaproveitamento de código
- Leitura e manutenção de código
- Estrutura base para APIs REST

---

## 🗂 Estrutura do projeto

```txt
src/
│
├── controller/
│   └── salas.controller.js
│
├── services/
│   └── salas.service.js
├── app.js
└── server.js
```

---

## 📌 Responsabilidade de cada camada

### 🖥 server.js

- Responsável por:

- Iniciar o servidor

- Definir a porta

- Chamar o app

- Não possui lógica da aplicação.

### 🌐 app.js

Responsável por:

- Criar a instância do Express

- Definir rotas

- Registrar middlewares

- Serve como ponto central da aplicação.

### 🎯 controllers

Responsável por:

- Receber requisições HTTP

- Extrair dados de req

- Chamar os services

- Retornar respostas com status HTTP

- O controller não contém regra de negócio.

### ⚙️ services

Responsável por:

- Regras de negócio

- Validações

- Manipulação de dados

- Decisões da aplicação

- O service não conhece Express nem HTTP.

### 🔁 Separação de responsabilidades na prática

Um fluxo típico funciona assim:

- O cliente faz uma requisição

- O controller recebe e valida dados básicos

- O service executa a regra de negócio

- O controller retorna a resposta ao cliente

Isso evita:

- código duplicado

- controllers muito grandes

- regras espalhadas

### ❌ O que ainda NÃO foi implementado

Este projeto propositalmente não possui:

- Banco de dados real

- Camada de repositório

- Validações avançadas

- Autenticação

- Testes automatizados

Esses pontos ficam para as próximas evoluções.

### 🚀 Evolução em relação à primeira API

| Primeira API              | API Estruturada                  |
| ------------------------- | -------------------------------- |
| Tudo em um arquivo        | Código separado por camadas      |
| Lógica misturada com rota | Controllers e services separados |
| Difícil de manter         | Estrutura escalável              |

### 🛠 Tecnologias utilizadas

- Node.js

- Express

- JavaScript

- Git

### 📈 Próximo passo

- Criar validações mais robustas

- Melhorar tratamento de erros

- Introduzir uma camada de persistência (banco de dados)

➡️ Essas melhorias serão abordadas nos próximos projetos.