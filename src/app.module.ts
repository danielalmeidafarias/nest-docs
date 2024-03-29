import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { CatsControler } from './cats/cats.controller';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';
import { ClassValidatorPipe } from './pipes/class-validator.pipe';
import { RolesGuard } from './auth/roles.guard';
import { LogginInterceptor } from './interceptors/logging.interceptor';

// É preciso adicionar o Service na lista de providers para que o Nest
// possa performar a injeção de dependencias
@Module({
  // Lista dos módulos que exportam providers utilizados nesse módulo
  imports: [CatsModule],

  // Lista de providers que são providenciados por esse módulo e podem ser
  // utilizados em outro módulo que importar este
  // Um módulo pode ser "re-exportado"
  exports: [CatsModule],

  // Os controller que devem ser instaciados nesse modulo
  controllers: [],

  // Os providers que serão instanciados pelo Nest Injector
  providers: [
    // global-scoped filter
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },

    // global-scoped pipe
    // {
    //   provide: APP_PIPE,
    //   useClass: ClassValidatorPipe,
    // },

    // global-scoped guard(utilizando o dependency injector)
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard
    // }

    // global-scoped interceptor
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: LogginInterceptor
    // }
    
  ],
})

// As Middlewares não são implementadas no objeto @Module
// Em vez disso é preciso implementalos no metodo configure do NestModule

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .forRoutes({ path: 'cats', method: RequestMethod.GET });
      // .forRoutes('cats');
      // .forRoutes('*'); // Para utilizar globalmente
      .forRoutes(CatsControler);
  }
}
