import { Controller, Get } from "@nestjs/common";

// O decorator @Controller pode receber a propriedade "host"
// para validar se as requisições estão sendo enviadas de um host especifico
@Controller({ host: 'admin.example.com' })
export class AdminController {
  @Get()
  index(): string {
    return 'Admin page';
  }
}