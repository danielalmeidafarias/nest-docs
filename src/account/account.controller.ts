import { Controller, Get, HostParam } from "@nestjs/common";

// A opção host pode ser capturada dinamicamente 
// O host parameter pode ser acessado com o decorator @HostParam
@Controller({ host: ':account.example.com' })
export class AccountController {
  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }
}
