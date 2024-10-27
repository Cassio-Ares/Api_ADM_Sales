import { Router, Request, Response } from 'express';

export const routes = Router();

routes.get('/health', (req:Request, res:Response) => {
  res.json({message: 'Hello DEV!'})
})

