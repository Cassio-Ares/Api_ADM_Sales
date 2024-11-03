import { Router, Request, Response } from 'express';
import productsRouter from 'src/modules/products/routes/ProductsRoutes';

export const routes = Router();

routes.get('/health', (req:Request, res:Response) => {
  res.json({message: 'Hello DEV!'})
})

routes.use('/products',productsRouter)
