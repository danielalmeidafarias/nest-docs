// Os DTO's definem como os dados devem chegar ao servidor
// Pode ser feito com Interfaces e Classes (recomendação é utilizar classes)

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}