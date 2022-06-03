import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateGeneroDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do gênero',
    example: 'Open world survivalcraft',
  })
  nome: string;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Lista com os IDs dos jogos que são desse gênero',
    example:
      '["04f66779-bcfa-4c5c-a140-f234138890f3", "adb96fd7-cdcf-43dc-9e1b-0c0a262111f9"]',
  })
  games: string[];
}
