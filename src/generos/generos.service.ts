import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create.genero.dto';
import { Genero } from './entities/genero.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGeneroDto } from './dto/update.genero.dto';
import { handleError } from 'src/utils/handle.error.utils';
import { Prisma } from '@prisma/client';

@Injectable()
export class GenerosService {
  constructor(private readonly prisma: PrismaService) {}

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.genero.delete({ where: { id } });
  }

update(id: string, dto: UpdateGeneroDto) {
    return this.prisma.genero.update({
      where: { id },
      data: {
        nome: dto.nome,
      }
    })
  }

  findAll(): Promise<Genero[]> {
    return this.prisma.genero.findMany();
  }

  async findById(id: string): Promise<Genero> {
    const record = await this.prisma.genero.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`);
    }

    return record;
  }

  async findOne(id: string): Promise<Genero> {
    return await this.findById(id);
  }

  create(dto: CreateGeneroDto) {
    const data: Prisma.GeneroCreateInput = {
      nome: dto.nome,
    };

    return this.prisma.genero.create({
      data, select: {
        nome: true,
      },
    }).catch(handleError);
  }
}
