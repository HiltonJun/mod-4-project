import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Genero } from "@prisma/client";
import { CreateGeneroDto } from "./dto/create.genero.dto";
import { UpdateGeneroDto } from "./dto/update.genero.dto";
import { GenerosService } from "./generos.service";


@ApiTags('Genero')
@Controller('genero')
export class GenerosController {
  constructor(private readonly generoService: GenerosService){}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os generos',
  })
  findAll(): Promise<Genero[]> {
    return this.generoService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um genero',
  })
  findOne(@Param('id') id: string): Promise<Genero> {
    return this.generoService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Cadastrar um genero',
  })
  create(@Body() dto: CreateGeneroDto): Promise<Genero> {
    return this.generoService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um genero pelo ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdateGeneroDto): Promise<Genero> {
    return this.generoService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover um genero pelo ID',
  })
  delete(@Param('id') id: string) {
    return this.generoService.delete(id);
  }
}
