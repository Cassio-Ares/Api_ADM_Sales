import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import 'reflect-metadata';
import 'express-async-errors'; // para capturar erros e facilitar o tratamento

import ErroHandleMiddleware from '@shared/middlewares/ErroHandleMiddleware'; //middleware que possui a class para tratamento de erros
import { AppDataSource } from '@shared/typeorm/datasource';
import { routes } from './routes';

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    app.use(cors());
    dotenv.config();
    app.use(express.json());

    app.use(routes);
    app.use(ErroHandleMiddleware.handleError);

    console.log('Connected to the database');

    app.listen(process.env.PORT || 3333, () => {
      console.log(`Server running on port ${process.env.PORT || 3333}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to the database', err);
  });

/**
 * npm i typeorm reflect-metadata pg
 *
 * reflect-metadata para usar decoreitors (ex: @entity) usando metadatas do express
 *
 * pg para usar o postgres
 *
 *
 * import 'reflect-metadata'; IMPORTANTE na raiz
 *
 *no tsConfig liberar
 *
 *   "emitDecoratorMetadata": true,
 *    "experimentalDecorators": true,
 *    "strictPropertyInitialization": true,
 * 609
 */

/**
 * Em typeorm
 *        datasource
 *   configuramos:
 *    import 'reflect-metadata';
 *    import 'dotenv/config';
 *    import { DataSource } from 'typeorm';
 *
 *      const port = process.env.DB_PORT as number | undefined;
 *
 *      export const AppDataSource = new DataSource({
 *         type: 'postgres',
 *         host: process.env.DB_HOST,
 *         port: port,
 *         username: process.env.DB_USER,
 *         password: process.env.DB_PASS,
 *         database: process.env.DB_NAME,
 *})
 *
 *
 * e então inicializamos no server como podemos ver acima.
 *
 * usar extensão Database client
 *
 */
