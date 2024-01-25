import { Global, Module } from '@nestjs/common';
import { CatsControler } from './cats.controller';
import { CatsService } from './cats.service';

// Para definir providers que serão utilizados em vários lugares da aplicação
// pode-se usar o decorator @Global()

// Assim o CatsModule devera ser registrado apenas uma vez(pelo root da aplicação)
// e o CatsService estará disponível por toda aplicação

@Global()
@Module({
  controllers: [CatsControler],
  providers: [CatsService],

  // Qualquer módulo que importar o CatsModule agora terá acesso ao CatsService também
  exports: [CatsService],
})
export class CatsModule {
  // Uma classe de modulo pode injetar providers também
  constructor(private catsService: CatsService) {}
}
