import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle.error.utils';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { Perfil } from './entities/perfil.entity';

@Injectable()
export class PerfilService {
  constructor(private readonly prisma: PrismaService) {}

  delete(id: string) {
    return this.prisma.perfil.delete({where: { id }})
  };

  update(id: string, dto: UpdatePerfilDto) {
    return this.prisma.perfil.update({
      where: { id },
      data: {
        title: dto.title,
        imageURL: dto.imageURL,
      }
    })
  };

  findAll() {
    return this.prisma.perfil.findMany({
      select: {
        title: true,
        imageURL: true,
      },
    })
  }

  findOne(id: string) {
    return this.prisma.perfil.findUnique({
      where: { id },
      select: {
        user: {
          select: {
            name: true,
          },
        },
        title: true,
        imageURL: true,
        games: true,
      }
    })
  }

  create(dto: CreatePerfilDto) {
    const data: Prisma.PerfilCreateInput = {
      title: dto.title,
      imageURL: dto.imageURL,
      user: {
        connect: {
          id: dto.userId
        },
      },
      games: {
        connect: dto.games.map((gameId) => ({
          id: gameId,
        })),
      },
    };

    return this.prisma.perfil.create({
      data, select: {
        user: {
          select: {
            name: true,
          },
        },
        games: {
          select: {
            id: true,
            nome: true,
            favorite: true,
          },
        },
      },
    }).catch(handleError);
  }
}
