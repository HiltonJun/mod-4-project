import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateGameDto } from "./dto/create.game.dto";
import { GameService } from "./game.service";


@ApiTags('Game')
@Controller('game')
export class GameController {
  constructor (private gameService: GameService){}

  @Get()
  findAll() {
    return 'Buscar todos os jogos';
  }

  @Post()
  create(@Body() createGameDto: CreateGameDto){
    return this.gameService.create(createGameDto);
  }
}
