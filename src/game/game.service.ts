import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGameDto } from './dto/create.game.dto';
import { Game } from './entities/game.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGameDto } from './dto/update.game.dto';
import { handleError } from 'src/utils/handle.error.utils';
import { Prisma } from '@prisma/client';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.game.delete({ where: { id } });
  }

update(id: string, dto: UpdateGameDto) {
  return this.prisma.game.update({
    where: { id },
    data: {
      nome: dto.nome,
      capa: dto.capa,
      descricao: dto.descricao,
      plataformas: dto.plataformas,
      lancamento: dto.lancamento,
      developer: dto.developer,
      publisher: dto.publisher,
      imdbscore: dto.imdbscore,
      favorite: dto.favorite,
      trailer: dto.trailer,
      gameplay: dto.gameplay,
    }
  })
  }

  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany();
  }

  async findById(id: string): Promise<Game> {
    const record = await this.prisma.game.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`);
    }

    return record;
  }

  async findOne(id: string): Promise<Game> {
    return await this.findById(id);
  }

  async create(dto: CreateGameDto) {
    const data: Prisma.GameCreateInput = {
      nome: dto.nome,
      capa: dto.capa,
      descricao: dto.descricao,
      plataformas: dto.plataformas,
      lancamento: dto.lancamento,
      developer: dto.developer,
      publisher: dto.publisher,
      imdbscore: dto.imdbscore,
      favorite: dto.favorite,
      trailer: dto.trailer,
      gameplay: dto.gameplay,
      generos: {
        connect: dto.generos.map((generoNome) => ({
          nome: generoNome,
        })),
      },
      perfis: {
        connect: dto.perfis.map((perfilId) => ({
          id: perfilId,
        })),
      },
    };

    return this.prisma.game.create({
      data, select: {
        nome: true,
        capa: true,
        descricao: true,
        plataformas: true,
        lancamento: true,
        developer: true,
        publisher: true,
        imdbscore: true,
        favorite: true,
        trailer: true,
        gameplay: true,
        generos: {
          select: {
            nome: true,
          },
        },
        perfis: {
          select: {
            id: true,
          }
        }
      }
    }).catch(handleError);
  }
}
