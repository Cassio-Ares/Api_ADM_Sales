import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import 'reflect-metadata';
import 'express-async-errors'; // para capturar erros e facilitar o tratamento
import { errors } from 'celebrate';

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
     app.use(errors())
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
 * Validação com celebrate
 *
 * npm i celebrate
 *
 * npm i @types/joi (precisamos pq o joi vem junto com celebrate)
 */
