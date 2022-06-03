import { User } from "@prisma/client";
import { Game } from "src/game/entities/game.entity";

export class Perfil {
  id?: string;
  title: string;
  user?: User;
  games?: Game[]
}
