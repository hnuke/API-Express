# Product API - Express.js

This is a REST API built with Node.js and Express.js to manage a mock list of products.

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
