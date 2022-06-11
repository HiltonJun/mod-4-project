import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { PrismaService } from './prisma/prisma.service';
import { GenerosModule } from './generos/generos.module';
import { UserModule } from './user/user.module';
import { PerfilModule } from './perfil/perfil.module';
import { AuthModule } from './auth/auth.module';
import { FavoriteModule } from './favorite/favorite.module';
import { HomepageModule } from './homepage/homepage.module';

@Module({
  imports: [GameModule, GenerosModule, UserModule, PerfilModule, AuthModule, FavoriteModule, HomepageModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
