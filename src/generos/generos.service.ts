import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create.genero.dto';
import { Genero } from './entities/genero.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGeneroDto } from './dto/update.genero.dto';

@Injectable()
export class GenerosService {
  constructor(private readonly prisma: PrismaService) {}

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.genero.delete({ where: { id } });
  }

  async update(id: string, dto: UpdateGeneroDto): Promise<Genero> {
    await this.findById(id);

    const data: Partial<Genero> = { ...dto };

    return this.prisma.genero.update({
      where: { id },
      data,
    });
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
    return this.findById(id);
  }

  create(dto: CreateGeneroDto): Promise<Genero> {
    const data: Genero = { ...dto };

    return this.prisma.genero.create({ data }).catch(this.handleError);
  }

  handleError(error: Error) {
    console.log(error.message);

    return undefined
  }
}
