# Product API - Express.js
This is a full-stack application featuring a REST API built with Node.js and Express.js for managing a product list, backed by a PostgreSQL database. The frontend is developed with React, TypeScript, and Vite.

## Endpoints

### GET /api/products

Returns a list of products.

**Example response:**

json
{
  "message": "Success",
  "products": [
    { "name": "Rice", "price": "1.4" },
    { "name": "Fice", "price": "1.2" }
  ]
}

### POST /api/products

Adds a new product.

**Example response (success):**

{
  "message": "Product created",
  "product": { "name": "Bread", "price": "1.0" }
}

**Example response (error):**

{
  "message": "Either name or price is invalid"
}
