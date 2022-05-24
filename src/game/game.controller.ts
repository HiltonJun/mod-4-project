import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Game } from "@prisma/client";
import { CreateGameDto } from "./dto/create.game.dto";
import { UpdateGameDto } from "./dto/update.game.dto";
import { GameService } from "./game.service";


@ApiTags('Game')
@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService){}

  @Get()
  @ApiOperation({
    summary: 'Listar todas os jogos',
  })
  findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um jogo',
  })
  findOne(@Param('id') id: string): Promise<Game> {
    return this.gameService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Cadastrar um jogo',
  })
  create(@Body() dto: CreateGameDto): Promise<Game> {
    return this.gameService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um jogo pelo ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdateGameDto): Promise<Game> {
    return this.gameService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover um jogo pelo ID',
  })
  delete(@Param('id') id: string) {
    return this.gameService.delete(id);
  }
}
