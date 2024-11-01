import { AppDataSource } from '@shared/typeorm/datasource';
import { Product } from '../entities/Product';

export const productsRepositories = AppDataSource.getRepository(Product).extend(
  {
    async findByName(name: string): Promise<Product | null> {
      return this.findOneBy({ name });
    },
    async findById(id: string): Promise<Product | null> {
      return this.findOneBy({ id });
    },
  },
);

/**
 * Cliamos uma função que ira carregar metodos:
 *
 * de AppDataSource usamos o metodo getRepository para carregar os metodos
 *
 * de onde (Product) carregamos a entidade
 *
 * criamos o metodo findByName que ira usar me metodo findOneBy de GetRepository
 *
 * crição para deixar o codigo mais limpo
 *
 */
