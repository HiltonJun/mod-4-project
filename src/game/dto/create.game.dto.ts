import { ApiProperty } from '@nestjs/swagger';
import { IsPositive, IsString, IsUrl, Max } from 'class-validator';

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

  @IsPositive()
  @ApiProperty({
    description: 'Preço do jogo em Reais',
    example: 119,
  })
  preco: number;

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
  @IsString()
  @ApiProperty({
    description: 'Gêneros do jogo',
    example: 'Açao, Aventura, RPG',
  })
  genre: string;

  @IsPositive()
  @Max(5)
  @ApiProperty({
    description: 'Nota do jogo na IMBD de 1 a 5 estrelas',
    example: '5',
  })
  imdbscore: number;

  @ApiProperty({
    description: 'Se o jogo é favorito do usuário("False" por default)',
    example: false,
  })
  favorite: boolean;

  @ApiProperty({
    description: 'Data de criação gerenciada pela Api',
    example: '2022-05-23T23:33:57.067Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Data de última atualização',
    example: '2022-05-23T23:33:57.068Z',
  })
  updatedAt: Date;
}
