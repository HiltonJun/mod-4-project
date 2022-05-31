import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGameDto } from './dto/create.game.dto';
import { Game } from './entities/game.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGameDto } from './dto/update.game.dto';
import { handleError } from 'src/utils/handle.error.utils';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.game.delete({ where: { id } });
  }

  async update(id: string, dto: UpdateGameDto): Promise<Game> {
    await this.findById(id);

    const data: Partial<Game> = { ...dto };

    return this.prisma.game.update({
      where: { id },
      data,
    });
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

  async create(dto: CreateGameDto): Promise<Game> {
    const data: Game = { ...dto };

    return await this.prisma.game.create({ data }).catch(handleError);
  }
}
