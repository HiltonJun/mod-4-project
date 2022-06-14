import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsPositive, IsString, IsUrl, IsUUID, Max } from "class-validator";
import internal from "stream";

export class CreateFavoriteDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'O nome do jogo',
    example: 'Outward: Definitive Edition',
  })
  nome: string;

  @IsUrl()
  @ApiProperty({
    description: 'A foto da capa do jogo',
    example:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/794260/header.jpg?t=1652856127',
  })
  capa: string;

  @IsPositive()
  @Max(5)
  @ApiProperty({
    description: 'Nota do jogo na IMBD de 1 a 5 estrelas',
    example: '5',
  })
  imdbscore: number;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Lista com os IDs dos perfis que favoritaram o jogo',
    example:
      '["04f66779-bcfa-4c5c-a140-f234138890f3", "adb96fd7-cdcf-43dc-9e1b-0c0a262111f9"]',
  })
  perfis: string[];

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'ID do jogo favoritado',
    example:
      '04f66779-bcfa-4c5c-a140-f234138890f3',
  })
  game: string;
}
