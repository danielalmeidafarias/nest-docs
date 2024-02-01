import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogginInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    console.log("Antes da rota...")

    // Utilizando o ExecutionContext para acessar a req/res do express
    // const req: Request = context.switchToHttp().getRequest()
    // const res: Response = context.switchToHttp().getResponse()

    const now = Date.now()
    return next
      .handle()
      .pipe(
        tap(() => console.log(`Depois da rota... ${now}`))
      )
  }
}
