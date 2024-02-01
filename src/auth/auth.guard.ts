import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Body,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

const validateRequest = async (request: Request) => {
  if (request.body.token === 'autorizado') {
    return true;
  }
  return false;
};

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    return validateRequest(request);
    // validateRequest representa a logica por tras da validacao
    // Se retornar true a request ira prosseguir
    // Se retornar false, sera bloqueada
  }
}
