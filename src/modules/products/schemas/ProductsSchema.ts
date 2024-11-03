import { Joi, celebrate, Segments } from 'celebrate';

/**
 * vantagens do Celebrate ele permite a validação por seguimentos
 * ex: params, query, headers, body, ....
 *
 * sintaxe: celebrate({[segmentos]: {chaves: 'tipos de dados'}})
 *
 *
 * após criar o os schemas é important importar:
 *          import {errors} from 'celebrate' no server do projeto (raiz)
 *
 *          app.use(errors())
 */
export const createProductSchema = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().positive().precision(2).required(),
    quantity: Joi.number().positive().integer().required(),
  }),
});

export const updateProductsSchema = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required(),
  }),
  [Segments.BODY]: Joi.object({
    name: Joi.string().required(),
    price: Joi.number().positive().precision(2).required(),
    quantity: Joi.number().positive().integer().required(),
  }),
});

export const idParamsValidation = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required(),
  }),
});
