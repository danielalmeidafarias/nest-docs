import { Module } from '@nestjs/common';
import { CatsControler } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';

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
export class AppModule {}
