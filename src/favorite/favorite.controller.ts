import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Favorites')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post()
  @ApiOperation({
    summary: 'Favoritar um jogo',
  })
  create(@Body() dto: CreateFavoriteDto) {
    return this.favoriteService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os favoritos',
  })
  findAll() {
    return this.favoriteService.findAll();
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover um favorito pelo ID',
  })
  delete(@Param('id') id: string) {
    return this.favoriteService.delete(id);
  }
}
