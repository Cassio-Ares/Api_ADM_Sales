import AppError from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';


export default class ErroHandleMiddleware {
  public static handleError(
    error: Error,
    _req: Request, //boa pratica colocar _ para indicar que nao vai ser usado
    res: Response,
    _next: NextFunction,
  ) {
    if (error instanceof AppError) { //se error for uma instancia de da class AppError faça{}
      res.status(error.statusCode).json({
        type: "error",
        message: error.message
      })
    }

    res.status(500).json({
      type: "error",
      message: "Internal server error"
    })
  }
}
