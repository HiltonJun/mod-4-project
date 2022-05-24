import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.user.delete({ where: { id } });
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.findById(id);

    const data: Partial<User> = { ...dto };

    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`);
    }

    return record;
  }

  async findOne(id: string): Promise<User> {
    return await this.findById(id);
  }

  async create(dto: CreateUserDto): Promise<User> {
    const data: User = { ...dto };

    return await this.prisma.user.create({ data }).catch(this.handleError);
  }

  handleError(error: Error) {
    console.log(error.message);

    return undefined
  }
}
