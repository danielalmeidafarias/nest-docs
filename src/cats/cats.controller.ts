import {
  Body,
  Controller,
  DefaultValuePipe,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
  Param,
  // ParseIntPipe,
  Post,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { CreateCatDto } from './dto/createCat.dto';
import { CatsService } from './cats.service';
import { Cat } from 'src/cats/interfaces/cat.interfce';
import { HttpExceptionFilter } from 'src/exceptions/http-exception.filter';
import { ZodValidationPipe } from 'src/pipes/zod-validation.pipe';
import { createCatSchema } from './schema/create-cat.schema';
import { ClassValidatorPipe } from 'src/pipes/class-validator.pipe';
import { ParseIntPipe } from 'src/pipes/parse-int.pipe';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { AuthGuard } from 'src/auth/auth.guard';
import { LogginInterceptor } from 'src/interceptors/logging.interceptor';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';
import { CacheInterceptor } from 'src/interceptors/cache.interceptor';

@Controller('cats')

// controller-scoped guard
// @UseGuards(RolesGuard)

// controller-scoped filter
// @UseFilters(HttpExceptionFilter)

// controller-scoped interceptor
// @UseInterceptors(LogginInterceptor)
export class CatsControler {
  // Utilizando o CatsService
  // Constructor-based injection
  constructor(private catsService: CatsService) {}

  @Post()

  // method-scoped guard
  // @UseGuards(RolesGuard)
  // @UseGuards(AuthGuard)

  // Zod Pipes
  // @UsePipes(new ZodValidationPipe(createCatSchema))

  // method-scoped interceptor
  // @UseInterceptors(LogginInterceptor)

  // @UseInterceptors(TransformInterceptor)
  // @UseInterceptors(CacheInterceptor)

  // @Roles(['admin'])
  async create(@Body() createCatDto: CreateCatDto) {
    // class-validator pipe
    // async create(@Body(new ClassValidatorPipe()) createCatDto: CreateCatDto)

    try {
      this.catsService.create(createCatDto);
      return 'Criado com sucesso';
    } catch (err) {
      // Standart exceptions
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    try {
      return this.catsService.findAll();
    } catch (err) {
      // Modificando Standart exceptions
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          message: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: err,
        },
      );
    }
  }

  @Get(':id')

  // method-scoped filter
  // @UseFilters(HttpExceptionFilter)
  // @UseFilters(new HttpExceptionFilter())

  // Preferível utilizar classes inves de intancias de uma classe
  // para utilizar a Injecao de dependencias
  findOne(
    // Podemos instanciar um Pipe para personaliza-lo
    // @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number)

    // Transform Pipe
    // @Param('id', ParseIntPipe) id: number): string

    @Param(
      'id',
      new DefaultValuePipe(0), // Valor padrão para evitar Undefined e null
      new ParseIntPipe(),
    )
    id: number,
  ): string {
    try {
      return `Essa requisição retorna o gato #${id}`;
    } catch (err) {
      // Custom exceptions
      throw new ForbiddenException(err);
    }
  }
}
