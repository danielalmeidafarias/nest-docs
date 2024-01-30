import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './cats/middleware/logger.middleware';
import { CatsControler } from './cats/cats.controller';

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
  providers: [],
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
