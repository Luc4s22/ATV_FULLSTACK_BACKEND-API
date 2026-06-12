# Backend - API CRUD de Bebidas

## Sobre o Projeto

Este projeto consiste em uma API REST desenvolvida com Node.js e Express para gerenciamento de bebidas.

A aplicação foi criada como parte da atividade prática da disciplina de Desenvolvimento Mobile, com o objetivo de integrar um aplicativo React Native desenvolvido com Expo a um backend próprio, implementando as operações básicas de CRUD (Create, Read, Update e Delete).

Os dados são armazenados temporariamente em memória utilizando um array JavaScript.

---

## Tecnologias Utilizadas

* Node.js
* Express
* CORS
* JavaScript

---

## Estrutura do Projeto

```text
backend
│
├── controllers
│   └── bebidaController.js
│
├── models
│   └── bebidaModel.js
│
├── routes
│   └── bebidaRoutes.js
│
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Arquitetura Utilizada

O projeto foi organizado seguindo uma estrutura simples de separação de responsabilidades:

### Models

Responsável pelo armazenamento dos dados da aplicação.

Arquivo:

```text
models/bebidaModel.js
```

### Controllers

Responsável por processar as requisições recebidas, realizar as operações de cadastro, consulta, atualização e exclusão.

Arquivo:

```text
controllers/bebidaController.js
```

### Routes

Responsável pelo mapeamento das rotas da API.

Arquivo:

```text
routes/bebidaRoutes.js
```

### App

Arquivo principal responsável pela configuração do servidor.

Arquivo:

```text
app.js
```

---

## Instalação

### Clonar o Repositório

```bash
git clone https://github.com/Luc4s22/ATV_FULLSTACK_BACKEND-API.git
```

### Acessar a Pasta

```bash
cd ATV_FULLSTACK_BACKEND-API
```

### Instalar Dependências

```bash
npm install
```

### Executar o Projeto

```bash
node app.js
```

Ao iniciar corretamente, será exibida a seguinte mensagem:

```text
Servidor rodando na porta 3000
```

---

## Rotas Disponíveis

### Listar Bebidas

Retorna todas as bebidas cadastradas.

**Método**

```http
GET /bebidas
```

**Resposta**

```json
[
  {
    "id": 1,
    "nome": "Heineken",
    "categoria": "Cerveja",
    "teor": "5"
  }
]
```

---

### Cadastrar Bebida

Adiciona uma nova bebida ao sistema.

**Método**

```http
POST /bebidas
```

**Body**

```json
{
  "nome": "Heineken",
  "categoria": "Cerveja",
  "teor": "5"
}
```

---

### Atualizar Bebida

Atualiza os dados de uma bebida existente.

**Método**

```http
PUT /bebidas/:id
```

**Exemplo**

```http
PUT /bebidas/1
```

**Body**

```json
{
  "nome": "Heineken",
  "categoria": "Cerveja Premium",
  "teor": "5"
}
```

---

### Excluir Bebida

Remove uma bebida cadastrada.

**Método**

```http
DELETE /bebidas/:id
```

**Exemplo**

```http
DELETE /bebidas/1
```

---

## Funcionalidades Implementadas

* Cadastro de bebidas
* Listagem de bebidas
* Atualização de bebidas
* Exclusão de bebidas
* API REST
* Integração com React Native
* Estrutura organizada em Models, Controllers e Routes

---

## Testes

As rotas podem ser testadas utilizando:

* Postman
* Insomnia
* Thunder Client (VS Code)

---

## Integração com o Frontend

Esta API foi desenvolvida para integração com um aplicativo mobile em React Native utilizando Expo.

A comunicação é realizada através de requisições HTTP utilizando a biblioteca Axios.

---

## Autor

Lucas Mendes

Curso: Análise e Desenvolvimento de Sistemas

Projeto acadêmico desenvolvido para demonstrar a implementação de um CRUD completo utilizando Node.js, Express e React Native.
