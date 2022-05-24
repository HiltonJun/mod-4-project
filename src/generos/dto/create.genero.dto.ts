import { ApiProperty } from "@nestjs/swagger";

export class CreateGeneroDto {

@ApiProperty({
  description: 'O id do genero no banco de dados',
  example: '504ead36-3afe-491a-8222-811ce36241b2'
})
  id: string;

  @ApiProperty({
    description: 'Nome do gênero',
    example: 'Open world survivalcraft'
  })
  nome: string;

  @ApiProperty({
    description: 'Data de criação',
    example: '2022-05-23T23:33:57.067Z'
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Data da última modificação',
    example: '2022-05-23T23:33:57.067Z'
  })
  updatedAt: Date;

}
