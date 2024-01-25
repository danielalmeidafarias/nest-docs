import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from './dto/createCat.dto';
import { CatsService } from './cats.service';
import { Cat } from 'src/cats/interfaces/cat.interfce';

@Controller('cats')
export class CatsControler {
  // * @HttpCode()
  // - Decorator para definir a mao o status code da requisição

  // * @Res()
  // - Decorator para lidar com a requisição a maneira da biblioteca nativa
  // nesse caso, express.js

  // * @Req()
  // Utilizado para acessar o objeto de requisição
  // é possivel reutilizar a tipagem do express

  // Se utilizado ao mesmo tempo, as features do framework serao ignoradas
  // Para usar os dois ao mesmo tempo é nessessário passar a opção ({ passthrough: true })

  // @Get(), @Post(), @Put(), @Delete(), @Patch(), @Options(), @Head() e @All()

  // @Next()
  // @Session()
  // @Param(key?: string)
  // @Body(key?: string)
  // @Query(key?: string)
  // @Headers(name?: string)
  // @Ip()
  // @HostParam()
  // @Redirect

  
  // Utilizando o CatsService
  // Constructor-based injection
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    return `Essa requisição retorna o gato #${params.id}`;
  }
}
