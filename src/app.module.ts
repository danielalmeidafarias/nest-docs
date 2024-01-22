import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsControler } from './cats/cats.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsControler],
  providers: [AppService],
})
export class AppModule {}
