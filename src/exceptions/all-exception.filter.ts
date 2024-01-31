import { ArgumentsHost, Catch } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";

// Em caso em que seja necessario modificar apenas alguns casos de erros
@Catch()
export class AllExceptionFilter extends BaseExceptionFilter{
  catch(exception: unknown, host: ArgumentsHost) {
    super.catch(exception, host);
  }
}