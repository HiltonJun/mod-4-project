import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/loggedUser.decorator';
import { User } from 'src/user/entities/user.entity';

@ApiTags('Perfil')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('perfil')
export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os perfis do usuário',
  })
  findAll(@LoggedUser()user: User) {
    return this.perfilService.findAll(user.id);
  }

  @Post()
  @ApiOperation({
    summary: 'Cadastrar um perfil',
  })
  create(@LoggedUser()user: User, @Body() dto: CreatePerfilDto) {
    return this.perfilService.create(user.id, dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um perfil pelo ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdatePerfilDto) {
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
