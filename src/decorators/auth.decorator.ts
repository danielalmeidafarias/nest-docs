import { SetMetadata, UseGuards, applyDecorators } from "@nestjs/common"
import { AuthGuard } from "src/auth/auth.guard"
import { RolesGuard } from "src/auth/roles.guard"

// Criando um decorator que engloba varios outros
export const Auth = (...roles: any) => {

  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(AuthGuard, RolesGuard),
  )
}