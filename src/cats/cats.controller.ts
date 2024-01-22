import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/createCat.dto';

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

  // @Next()
  // @Session()
  // @Param(key?: string)
  // @Body(key?: string)
  // @Query(key?: string)
  // @Headers(name?: string)
  // @Ip()
  // @HostParam()

  // @Get(), @Post(), @Put(), @Delete(), @Patch(), @Options(), @Head() e @All()

  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return 'Essa ação adiciona um gato novo';
  }

  @Get()
  findAll(@Req() req: Request): string {
    return 'Essa função retorna todos os gatos';
  }

  // Get()
  // findAll(@Res() res: string {
  //   return res.status(202).send("Essa função retorna todos os gatos")
  // }

  // Se utilizado ao mesmo tempo, as features do framework serao ignoradas
  // Para usar os dois ao mesmo tempo é nessessário passar a opção ({ passthrough: true })


  // Nest.js também aceita funcoes assincronas

  // @Get()
  // async findAll(@Req() req: Request): Promise<string> {
  //   return 'Essa função retorna todos os gatos';
  // }


  // WildCards
  @Get('as*as') // O asterisco combina qualquer caracter na rota
  wildCard() {
    return 'Essa rota utiliza um wildcard';
  }

  // Redirect
  @Get('redirect')
  @Redirect('http://localhost:3000/cats', 301)
  redirectFunction() {
    return 'Essa rota ira redirecionar o usuario';
  }

  // Retornando { url: "Nova url" } o redirecionamento sera sobrescrito

  // @Get('redirect')
  // @Redirect('http://localhost:3000/cats')
  // getDocs(@Query('version') version) {
  //   if (version && version === '5') {
  //     return { url: 'https://docs.nestjs.com/v5/' };
  //   }
  // }

  @Get(':id')
  findOne(@Param() params: any): string {
    return `Essa requisição retorna o gato #${params.id}`;
  }
}
