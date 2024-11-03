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
 * Para criar migrations e entity precisamos primeito configutar no datasource
 *
 *
 * export const AppDataSource = new DataSource({
 * type: 'postgres',
 * host: process.env.DB_HOST,
 * port: port,
 * username: process.env.DB_USER,
 * password: process.env.DB_PASS,
 * database: process.env.DB_NAME,
 * entities:[`./src/modules/* /database/entities/*.{ts,js}`] (indicamos onde irá estas as entidades)
 * dentro da pasta src/modules/** (qualquer pasta)/ databese/entities/*.(qualquer arquivo){js ou ts}
 * migrations: [`./src/shared/typeorm/migrations/*.{ts,js}`] (indica onde irá estar as migrations)
 * } )
 */

/**
 * normal criando por linha de comando:
 * typeorm migration:create ./src/shared/typeorm/migrations/CreateProduts
 *
 *  * usando script:
 *
 * instalamos:
 * npm i --save-dev cross-env me permite colocar variaveis de ambiente no terminal
 *
 * script:{
 *  migration:create: "cross-env MIGRATION_NAME=$npm_config_name ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:create src/shared/typeorm/migrations/$npm_config_name"
 * }
 *
 * windows :  "migration:create": "cross-env ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:create ./src/shared/typeorm/migrations/%npm_config_name%"
 *
 * dai rodamos npm rum migration:create --name=CreateProducts
 *             npm rum migration:create --name=nome da tabela
 */

/**
 * após criar a migration precisamos roda-la:
 *
 *  "migration:run": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run -d ./src/shared/typeorm/datasource.ts"
 *
 *  npm run migration:run
 *
*/

// migration:create:
// Este é o nome do script no package.json
// É apenas um identificador do comando


// cross-env:
// É uma biblioteca que garante que variáveis de ambiente funcionem consistentemente
//em diferentes sistemas operacionais(Windows, Linux, Mac)


// MIGRATION_NAME=$npm_config_name:
// Define uma variável de ambiente chamada MIGRATION_NAME
// O valor vem do parâmetro passado via npm (--name=NomeDaMigracao)
// $npm_config_name pega o valor do parâmetro name passado


// ts-node -r tsconfig-paths/register:
// ts-node: Permite executar TypeScript diretamente, sem precisar compilar para JavaScript
// -r tsconfig-paths/register: Registra o suporte para os path mappings definidos no tsconfig.json


// ./node_modules/typeorm/cli.js:
// Caminho para o CLI (Interface de Linha de Comando) do TypeORM
// É a ferramenta que realmente cria o arquivo de migração


// migration:create:
// Comando específico do TypeORM para criar uma nova migração


// src/shared/typeorm/migrations/$npm_config_name:
// Caminho onde o arquivo de migração será criado
// $npm_config_name será substituído pelo nome que você passar
