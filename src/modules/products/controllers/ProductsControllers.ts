import { Request, Response } from 'express';
import ListProductService from '../services/ListProductService';
import ShopProductService from '../services/ShopProductService';
import CreateProductService from '../services/CreateProductService';
import DeleteProductService from '../services/DeleteProductService';
import UpdateProductService from '../services/UpdateProductService';

export default class ProductsControllers {
  //obs: não estou usando o try/catch pq o express-async-error intercepta os erros
  async index(req: Request, res: Response): Promise<void> {
    //Primeiro estancio a class que vou usar
    const listProductsService = new ListProductService();
    // chamo o metodo da class estanciada
    const products = await listProductsService.execute();
    // retorno
    res.json(products);
  }

  async show(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const showProductService = new ShopProductService();
    const product = await showProductService.execute({ id });

    res.json(product);
  }

  async create(req: Request, res: Response): Promise<void> {
    const { name, price, quantity } = req.body;
    const createProductService = new CreateProductService();
    const product = await createProductService.execute({
      name,
      price,
      quantity,
    });
    console.log(product);
    res.json(product);
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { name, price, quantity } = req.body;
    const updateProductService = new UpdateProductService();
    const product = await updateProductService.execute({
      id,
      name,
      price,
      quantity,
    });

    res.json(product);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const deleteProductService = new DeleteProductService();
    await deleteProductService.execute({ id });
    res.status(204).send([]);
  }
}
