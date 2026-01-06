### 🎯 PROJETO: Gerenciador de Tarefas (To-Do API)

Um backend para gerenciar tarefas pessoais (to-do list), com foco em boas práticas e regras de negócio.

### 🧠 ENTIDADES
## 📌 Tarefa (Task)

Cada tarefa deve ter:

```txt
id: number
titulo: string
descricao?: string
concluida: boolean
prioridade: 'baixa' | 'media' | 'alta'
```

---

### 🌐 ROTAS OBRIGATÓRIAS (CRUD)

## 1️⃣ Criar tarefa
POST /tasks

Body:
```txt
{
  "titulo": "Estudar backend",
  "descricao": "Revisar controllers e services",
  "prioridade": "alta"
}
```

## 📌 Regras:

- titulo é obrigatório

- prioridade só pode ser: baixa, media, alta

- concluida começa sempre como false

## 2️⃣ Listar todas as tarefas
GET /tasks


Retorna:
```txt
{
  "tasks": []
}
```

## 3️⃣ Buscar tarefa por ID
GET /tasks/:id


## 📌 Regra:
- Se não existir → 404

## 4️⃣ Atualizar tarefa
PUT /tasks/:id


## 📌 Regras:

- Só pode atualizar se existir

- Valida novamente os dados

- Pode atualizar qualquer campo

## 5️⃣ Marcar tarefa como concluída
PATCH /tasks/:id/concluir


## 📌 Regra:

- Se já estiver concluída → erro

- Se não existir → 404

## 6️⃣ Deletar tarefa
DELETE /tasks/:id

## 📌 Status:

- 204 No Content

--- 

### 🧱 ARQUITETURA (obrigatória)

Você DEVE usar:
```txt
src/
 ├─ controllers/
 │   └─ tasks.controller.js
 ├─ services/
 │   └─ tasks.service.js
 ├─ app.js
 └─ server.js
```

## 📌 Regras:

- Controller NÃO valida regra de negócio

- Service NÃO usa req e res

- Erros são lançados no service

- Status HTTP definidos no controller

---

## 🚨 VALIDAÇÕES IMPORTANTES (nível backend)

Você precisa pensar e implementar:

- titulo vazio

- prioridade inválida

- id inexistente

- Tentar concluir tarefa já concluída

---
## 🧪 TESTES MANUAIS (obrigatórios)

Você deve testar:

- Fluxo feliz

- Erros

- Edge cases

Exemplo:

- Concluir tarefa inexistente

- Criar tarefa sem título

- Criar tarefa com prioridade errada

--- 
### 🎯 OBJETIVO DO DESAFIO

Se você conseguir concluir isso:

✔️ Você consolida HTTP
✔️ Consolida CRUD
✔️ Consolida arquitetura
✔️ Consolida validação
✔️ Consolida pensamento de backend