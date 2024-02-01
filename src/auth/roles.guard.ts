import { Reflector } from '@nestjs/core';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Roles } from 'src/decorators/roles.decorator';

const matchRoles = (roles: string[], userRoles: string) => {
  roles.forEach(role => {
    if(role === userRoles) {
      return true
    }
  })
  return false
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get(Roles, context.getHandler())
    if(!roles) {
      return true
    }
    const request = context.switchToHttp().getRequest()
    const user = request.user
    return matchRoles(roles, user.roles)
    // matchRoles representa a logica por tras da validacao
    // nesse caso testa se o usuario se encaixa nas roles pre-definidas
    // em caso de false, o nest ira retornar o erro http FORBIBEN
  }
}
