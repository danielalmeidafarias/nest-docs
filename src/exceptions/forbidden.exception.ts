import { HttpException, HttpStatus } from "@nestjs/common";

// Custom exceptions
// Utilizando a classe HttpException o nest irá reconhecer seus exceptions e 
// automaticamente cuidar dos erros de response
export class ForbiddenException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}