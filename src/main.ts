import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { ClassValidatorPipe } from './pipes/class-validator.pipe';
import { RolesGuard } from './auth/roles.guard';
import { LogginInterceptor } from './interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // A middleware pode ser utilizada globalmente
  // mas nesse caso deve ser uma função
  // app.use(logger())

  // global-scoped filter
  // app.useGlobalFilters(new HttpExceptionFilter())
  
  // Pipe utilizado de maneira global(sem utilizar o dependency injector)
  // app.useGlobalPipes(
  //   new ClassValidatorPipe()
  // )

  // global-scoped guard
  // app.useGlobalGuards(new RolesGuard())

  // global-scoped interceptor
  // app.useGlobalInterceptors(new LogginInterceptor())
  

  await app.listen(3000);
}
bootstrap();
