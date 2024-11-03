import { Router } from 'express'; //chama o metodo Router do express
import ProductsControllers from '../controllers/ProductsControllers';

const productsRouter = Router();

const productsController = new ProductsControllers(); //instancio a class para usar seus metodos nas rotas

productsRouter.get('/', productsController.index);
productsRouter.get('/:id', productsController.show);
productsRouter.post('/', productsController.create);
productsRouter.put('/:id', productsController.update);
productsRouter.delete('/:id', productsController.delete);

export default productsRouter;


//dentro de routes da pasta http coloco routes.use('products',productsRouter)
