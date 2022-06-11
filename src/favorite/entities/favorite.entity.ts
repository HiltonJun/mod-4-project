import { Game } from "@prisma/client";

export class Favorite {
  id?: string;
  nome: string;
  capa: string;
  imdbscore: number;
  perfis?: string[];
  games?: Game;
}
