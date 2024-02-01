import { Body, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

// Funções que são chamadas antes das rotas
// São equivalentes aos middlewares no express
// Podem ser uma função ou uma classe 
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Middleware rodando...');
    next();
  }
}
