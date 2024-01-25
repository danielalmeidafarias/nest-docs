import { Inject, Injectable, Optional } from '@nestjs/common';
import { Cat } from 'src/cats/interfaces/cat.interfce';

@Injectable()
// O decorator @Injectable diz que essa classe poderá ser utilizada pelo
// container de injeção de dependencias do Nest
// Providers

export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
