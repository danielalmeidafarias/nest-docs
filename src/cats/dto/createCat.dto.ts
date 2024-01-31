// Os DTO's definem como os dados devem chegar ao servidor
// Pode ser feito com Interfaces e Classes (recomendação é utilizar classes)

import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCatDto {

  // Utilizando Pipes com class-validator
  
  @IsString()
  name: string;
  
  @IsInt()
  age: number;

  @IsString()
  breed: string;
}