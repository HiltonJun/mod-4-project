import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoggedUser } from 'src/auth/loggedUser.decorator';
import { HomepageService } from './homepage.service';

@ApiTags('Homepage')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('homepage')
export class HomepageController {
  constructor(private readonly homepageService: HomepageService) {}

  @Get('jogos/:id')
  @ApiOperation({
    summary: 'Listar os jogos do perfil',
  })
  findAll(@Param('id') perfilId: string) {
    return this.homepageService.findAll(perfilId);
  }

  @Get('favoritos/:id')
  @ApiOperation({
    summary: 'Listar os jogos favoritos do perfil',
  })
  findFavorites(@Param('id') perfilId: string) {
    return this.homepageService.findFavorites(perfilId);
  }

  @Get('genero')
  @ApiOperation({
    summary: 'Listar os jogos por gênero',
  })
  findGamesByGenre(@Param('genero') genero: string, @Param('perfilId') perfilId: string) {
    return this.homepageService.findGamesByGenre(genero, perfilId);
  }
};
