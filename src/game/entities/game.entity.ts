import { Genero } from "src/generos/entities/genero.entity";
import { Perfil } from "src/perfil/entities/perfil.entity";

export class Game {
  id: string;
  nome: string;
  capa: string;
  descricao: string;
  plataformas: string;
  lancamento: string;
  developer: string;
  publisher: string;
  imdbscore: number;
  favorite: boolean;
  trailer: string;
  gameplay: string;
  generos?: Genero[];
  perfis?: Perfil[]
}
