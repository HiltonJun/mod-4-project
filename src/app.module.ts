import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { PrismaService } from './prisma/prisma.service';
import { GenerosModule } from './generos/generos.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [GameModule, GenerosModule, UserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
