import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Favorite } from './entities/favorite.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle.error.utils';
import { CreateFavoriteDto } from './dto/create-favorite.dto';

@Injectable()
export class FavoriteService {
  constructor(private readonly prisma: PrismaService) {}

  async create(gameId: string, createFavoriteDto: CreateFavoriteDto) {
    const data: Prisma.FavoriteCreateInput ={
      nome: createFavoriteDto.nome,
      capa: createFavoriteDto.capa,
      imdbscore: createFavoriteDto.imdbscore,
      game: {
        connect: {
          id: gameId,
        },
      },
      perfis: {
        connect: createFavoriteDto.perfis.map((perfilId) => ({
          id: perfilId,
        })),
      },
    }

    return await this.prisma.favorite.create({
      data, select: {
        nome: true,
        capa: true,
        imdbscore: true,
        game: {
          select:{
            id: true,
          },
        },
        perfis: {
          select: {
            id: true,
          },
        },
      },
    }).catch(handleError);
  };




  async findAll(): Promise<Favorite[]> {
    return await this.prisma.favorite.findMany();
  }

  async findById(id: string): Promise<Favorite> {
    const record = await this.prisma.favorite.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`);
    }

    return record;
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.favorite.delete({ where: { id } });
  }
}
