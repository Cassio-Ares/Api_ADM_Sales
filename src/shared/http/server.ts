import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import 'express-async-errors';// para capturar erros e facilitar o tratamento
import ErroHandleMiddleware from '@shared/middlewares/ErroHandleMiddleware'; //middleware que possui a class para tratamento de erros


import { routes } from './routes';

const app = express();

app.use(cors());
dotenv.config();
app.use(express.json());

app.use(routes);
app.use(ErroHandleMiddleware.handleError);


app.listen(process.env.PORT || 3333, () => {
  console.log(`Server running on port ${process.env.PORT || 3333}`);
});

/**
 *  "tsconfig-paths": "^4.2.0",
 *
 *  como vamos ter muitas pastas o   "tsconfig-paths": "^4.2.0", no ajuda a
 * criar alias para não precisar ficar ../../../../ varias vezes.
 *
 * no tsConfig.json
 *    colocamos    "baseUrl": "./",
 *
 *    "paths": {
 *     "@nome da pasta/*": ["src/nome da pasta /* "] obs * seg todos
 *     }
 *
 *    dai ao inves de eu usar ../../../ eu só uso "@nome da pasta/ para chamar
 *
 * EX: "paths": {
      "@config/*":["src./config/*"],
      "@models/*":["src./models/*"],
      "@shared/*":["src./shared/*"],
     },

     e no script{
      "dev": "dev": "ts-node-dev -r tsconfig-paths/register --inspect --transpile-only --ignore-watch node_modules src/server.ts",

           nos acrescentamos -r tsconfig-paths/register para dizer que vamos usar path
      }
 */

/**
 * Dependencias :
 *
 * npm i express cors express-async-errors
 * npm i -D @types/express @types/cors
 */
