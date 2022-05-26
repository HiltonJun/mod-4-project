import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Perfil } from './entities/perfil.entity';

@ApiTags('Perfil')
@Controller('perfil')
export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os perfis',
  })
  findAll(): Promise<Perfil[]> {
    return this.perfilService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um perfil',
  })
  findOne(@Param('id') id: string): Promise<Perfil> {
    return this.perfilService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Cadastrar um perfil',
  })
  create(@Body() dto: CreatePerfilDto): Promise<Perfil> {
    return this.perfilService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um perfil pelo ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdatePerfilDto): Promise<Perfil> {
    return this.perfilService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover um perfil pelo ID',
  })
  delete(@Param('id') id: string) {
    return this.perfilService.delete(id);
  }
}