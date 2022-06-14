import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Game } from 'src/game/entities/game.entity';

@Injectable()
export class HomepageService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(perfilId: string) {
    const games = await this.prisma.game.findMany({
      where: {
        perfis: {
          every: {
            id:perfilId,
          },
        },
      },
    });

    return games;
  };

  async findFavorites(perfilId: string) {
    const favoritos = await this.prisma.favorite.findMany({
      where: {
        perfis: {
          every: {
            id: perfilId,
          },
        },
      },
    });

    return favoritos;
  };

  async findGamesByGenre(genero: string, perfilId) {
    const gamesByGenre = await this.prisma.game.findMany({
      where: {
        generos: {
          some: {
            nome: genero,
          },
        },
      },
    });

    return gamesByGenre;
  };
}
