import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle.error.utils';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { Perfil } from './entities/perfil.entity';

@Injectable()
export class PerfilService {
  constructor(private readonly prisma: PrismaService) {}

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.perfil.delete({ where: { id } });
  }

  async update(id: string, dto: UpdatePerfilDto): Promise<Perfil> {
    await this.findById(id);

    const data: Partial<Perfil> = { ...dto };

    return this.prisma.perfil.update({
      where: { id },
      data,
    });
  }

  findAll(): Promise<Perfil[]> {
    return this.prisma.perfil.findMany();
  }

  async findById(id: string): Promise<Perfil> {
    const record = await this.prisma.perfil.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`);
    }

    return record;
  }

  async findOne(id: string): Promise<Perfil> {
    return await this.findById(id);
  }

  async create(dto: CreatePerfilDto): Promise<Perfil> {
    const data: Perfil = { ...dto };

    return await this.prisma.perfil.create({ data }).catch(handleError);
  }
}
