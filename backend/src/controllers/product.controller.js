import { pool } from '../lib/db.js';
import prisma from '../lib/client.js';

async function getProducts(req, res){
    /* Com pg
    const products = await pool.query(
        'SELECT * FROM products'
    );
    */

    const products = await prisma.products.findMany();

    res.status(200).json({
        message: "Sucess",
        produtos: products
    });
}

async function createProduct(req,res){
    const {name, price} = req.body;

    if (!(name && price)) return res.status(400).json({
        message: "Either name or price is invalid"
    });
    /* Com pg
    const products = await pool.query(
        'INSERT INTO products (product_name, product_price) VALUES ($1, $2)',
        [name, price]        
    );
    */

    const newProduct = await prisma.products.create({
        data: {
            product_name: name,
            product_price: price
        },
    });

    return res.status(200).json({
        message: "Product created",
        product: {newProduct}
    });
}


export {
    getProducts,
    createProduct
};