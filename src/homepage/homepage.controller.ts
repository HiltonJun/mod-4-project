import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HomepageService } from './homepage.service';

@ApiTags('Homepage')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('homepage')
export class HomepageController {
  constructor(private readonly homepageService: HomepageService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar os jogos do perfil',
  })
  findAll() {
    return this.homepageService.findAll();
  }

  @Get('favoritos')
  @ApiOperation({
    summary: 'Listar os jogos favoritos do perfil',
  })
  findFavorites() {
    return this.homepageService.findFavorites();
  }

  @Get('genero')
  @ApiOperation({
    summary: 'Listar os jogos por gênero',
  })
  findByGenre(@Param('genero') genero: string) {
    return this.homepageService.findByGenre(genero);
  }
};
