import { Router } from 'express'; //chama o metodo Router do express
import ProductsControllers from '../controllers/ProductsControllers';
import { createProductSchema, idParamsValidation, updateProductsSchema } from '../schemas/ProductsSchema';

const productsRouter = Router();

const productsController = new ProductsControllers(); //instancio a class para usar seus metodos nas rotas

productsRouter.get('/', productsController.index);
productsRouter.get('/:id', idParamsValidation,  productsController.show);
productsRouter.post('/', createProductSchema ,productsController.create);
productsRouter.put('/:id',updateProductsSchema ,productsController.update);
productsRouter.delete('/:id', idParamsValidation, productsController.delete);

export default productsRouter;


//dentro de routes da pasta http coloco routes.use('products',productsRouter)
