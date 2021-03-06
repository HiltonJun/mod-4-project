import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('GameLive')
    .setDescription('Aplicaçâo para gestão e compra de jogos em plataforma online')
    .setVersion('1.0.0')
    .addTag('Auth')
    .addTag('status')
    .addTag('Game')
    .addTag('Genero')
    .addTag('User')
    .addTag('Perfil')
    .addTag('Homepage')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app , document);

  await app.listen(process.env.PORT || 3333);
}
bootstrap();
