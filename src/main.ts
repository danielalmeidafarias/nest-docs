import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { ClassValidatorPipe } from './pipes/class-validator.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // A middleware pode ser utilizada globalmente
  // mas nesse caso deve ser uma função
  // app.use(logger())
  
  // Pipe utilizado de maneira global(sem utilizar o dependency injector)
  // app.useGlobalPipes(
  //   new ClassValidatorPipe()
  // )

  await app.listen(3000);
}
bootstrap();
