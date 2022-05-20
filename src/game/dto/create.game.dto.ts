import { ApiProperty } from "@nestjs/swagger";
import { IsPositive, IsUrl, Max } from "class-validator";

export class CreateGameDto {
  @ApiProperty({
    description: 'O nome do jogo',
    example: 'Outward: Definitive Edition'
  })
  nome: string;

  @IsUrl()
  @ApiProperty({
    description: 'A foto da capa do jogo',
    example: 'https://cdn.cloudflare.steamstatic.com/steam/apps/794260/header.jpg?t=1652856127'
  })
  capa: string;

  @ApiProperty({
    description: 'Descrição do jogo',
    example: 'Jogo de RPG, Ação e Aventura'
  })
  descricao: string;

  @IsPositive()
  @ApiProperty({
    description: 'Preço do jogo em Reais',
    example: 119
  })
  preco: number;

  @ApiProperty({
    description: 'Para quais plataformas o jogo foi lançado',
    example: 'PC, Xbox, Playstation'
  })
  plataformas: string;

  @ApiProperty({
    description: 'Data de lançamento do jogo',
    example: '17/05/2022'
  })
  lancamento: string;

  @ApiProperty({
    description: 'Nome da empresa desenvolvedora',
    example: 'Nine Dots Studio'
  })
  developer: string;

  @ApiProperty({
    description: 'Nome da empresa publicadora',
    example: 'Prime Matter'
  })
  publisher: string;

  @ApiProperty({
    description: 'Gêneros do jogo',
    example: 'Açao, Aventura, RPG'
  })
  genre: string;

  @IsPositive()
  @Max(5)
  @ApiProperty({
    description: 'Nota do jogo na IMBD de 1 a 5 estrelas',
    example: '5'
  })
  imdbscore: number;

  @ApiProperty({
    description: 'Se o jogo é favorito do usuário("False" por default)',
    example: false
  })
  favorite: boolean;
}
