import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}

// export interface ArgumentMetadata {
//   type: 'body' | 'query' | 'param' | 'custom'; 
// Indica de onde vem os dados

//   metatype?: Type<unknown>; 
// O tipo dos dados, 
// por exemplo String

//   data?: string; 
// A string que deve ser passada pelo decorator
// por exemplo @Body('string')

// }