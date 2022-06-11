import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HomepageService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.perfil.findMany({
      select: {
        games: true,
      },
    });
  };

  async findFavorites() {
    return this.prisma.perfil.findMany({
      select: {
        favorites: true,
      },
    });
  };

  async findByGenre(genero: string) {
    const jogos = await this.prisma.perfil.findMany({
      select: {
        games: true,
      }
    });
  };
};
