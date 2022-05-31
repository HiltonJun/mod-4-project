import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUrl, IsUUID } from "class-validator";

export class CreatePerfilDto {
  @IsString()
  @ApiProperty({
    description: 'O id do perfil no banco de dados',
    example: '504ead36-3afe-491a-8222-811ce36241b2',
  })
  id: string;

  @IsUUID()
  @ApiProperty({
    description: 'ID do usuário que está criando o perfil',
    example: 'e1bc0c89-a319-44df-a6e9-db66fe7b956b',
  })
  userId: string;

  @IsString()
  @ApiProperty({
    description: 'O nome do perfil',
    example: 'Fulano123',
  })
  title: string;

  @IsUrl()
  @ApiProperty({
    description: 'O endereço da imagem de perfil',
    example: 'http://imagemdeperfil.com',
  })
  imageURL: string;


  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Lista com os IDs dos jogos que estão no peefil',
    example:
      '["04f66779-bcfa-4c5c-a140-f234138890f3", "adb96fd7-cdcf-43dc-9e1b-0c0a262111f9"]',
  })
  games: string[];
}
