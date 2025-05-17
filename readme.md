# API de Produtos - Express.js

Está é uma API Rest feita com Node.js e Express.js para gerenciar uma lista de produtos mockados.

## Endpoints

### GET /api/products
Retorna uma lista de produtos.

**Exemplo de resposta:**
{
  "message": "Sucess",
  "produtos": [
    { "name": "Rice", "price": "$ 1.4" },
    { "name": "Fice", "price": "$ 1.2" }
  ]
}

### POST /api/products
Retorna uma lista de produtos.

**Corpo da requisição (JSON):**
{
  "name": "Bread",
  "price": "$ 1.0"
}

**Exemplo de resposta (sucesso):**
{
  "message": "Product created",
  "product": { "name": "Bread", "price": "$ 1.0" }
}

**Exemplo de resposta (erro):**
{
  "message": "Either name or price is invalid"
}
