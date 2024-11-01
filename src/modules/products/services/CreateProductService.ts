import AppError from '@shared/errors/AppError';
import { productsRepositories } from '../database/repositories/ProductsRepositories';

/**
 * neste modelo de arquitetura de projeto diferente de outra apis
 * cada serviço só possuira um metodo ex: create só cria para lista será outro arquivo
 */

interface ICreateProduct {   //tipos
  name: string;
  price: number;
  quantity: number;
}

export default class CreateProductService {   // class de criação
  async execute({ name, price, quantity }: ICreateProduct) {    //metodo com nome de execute
    const productExists = await productsRepositories.findByName(name);  //verificando se o produto ja existe

    if (productExists) {  // se existir da um erro
      throw new AppError('There is already one product with this name', 409);
    }

    const product = productsRepositories.create({   // se não existir cria um novo produto
      name,
      price,
      quantity,
    });

    await productsRepositories.save(product);   //salva ele no banco de dados

    return product;
  }
}
