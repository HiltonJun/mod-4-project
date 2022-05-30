import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsPositive, IsString, IsUrl, IsUUID, Max } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @ApiProperty({
    description: 'O id do jogo no banco de dados',
    example: '504ead36-3afe-491a-8222-811ce36241b2',
  })
  id: string;

  @IsString()
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

  @IsString()
  @ApiProperty({
    description: 'Descrição do jogo',
    example: 'Jogo de RPG, Ação e Aventura',
  })
  descricao: string;

  @IsString()
  @ApiProperty({
    description: 'Para quais plataformas o jogo foi lançado',
    example: 'PC, Xbox, Playstation',
  })
  plataformas: string;

  @IsString()
  @ApiProperty({
    description: 'Data de lançamento do jogo',
    example: '17/05/2022',
  })
  lancamento: string;

  @IsString()
  @ApiProperty({
    description: 'Nome da empresa desenvolvedora',
    example: 'Nine Dots Studio',
  })
  developer: string;

  @IsString()
  @ApiProperty({
    description: 'Nome da empresa publicadora',
    example: 'Prime Matter',
  })
  publisher: string;

  @IsPositive()
  @Max(5)
  @ApiProperty({
    description: 'Nota do jogo na IMBD de 1 a 5 estrelas',
    example: '5',
  })
  imdbscore: number;

  @IsBoolean()
  @ApiProperty({
    description: 'Se o jogo é favorito do usuário("False" por default)',
    example: false,
  })
  favorite: boolean;

  @IsUrl()
  @ApiProperty({
    description: 'Trailer do jogo no Youtube',
    example: 'https://www.youtube.com/watch?v=gy6bya_YIkw',
  })
  trailer: string;

  @IsUrl()
  @ApiProperty({
    description: 'Gameplay do jogo no Youtube',
    example: 'https://www.youtube.com/watch?v=7krjWYPsMNc',
  })
  gameplay: string;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Lista com os IDs dos generos do jogo',
    example:
      '["04f66779-bcfa-4c5c-a140-f234138890f3", "adb96fd7-cdcf-43dc-9e1b-0c0a262111f9"]',
  })
  generos: string[];

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Lista com os IDs dos perfis que tem o jogo',
    example:
      '["04f66779-bcfa-4c5c-a140-f234138890f3", "adb96fd7-cdcf-43dc-9e1b-0c0a262111f9"]',
  })
  perfis: string[];
}
