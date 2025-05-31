import express, { json } from 'express';
import productRoutes from './routes/product.routes.js';
import { errorHandler } from './middlewares/middleware.js';

const app = express();

app.use(json());
app.use('/api/products', productRoutes);


app.use(errorHandler);

export default app;