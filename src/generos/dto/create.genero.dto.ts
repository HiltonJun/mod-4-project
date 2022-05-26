import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateGeneroDto {
  @IsString()
  @ApiProperty({
    description: 'O id do genero no banco de dados',
    example: '504ead36-3afe-491a-8222-811ce36241b2',
  })
  id: string;

  @IsString()
  @ApiProperty({
    description: 'Nome do gênero',
    example: 'Open world survivalcraft',
  })
  nome: string;
}
