import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUrl, IsUUID } from "class-validator";

export class CreatePerfilDto {
  @IsString()
  @IsNotEmpty()
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
    description: 'Lista com os IDs dos jogos que estão no perfil',
    example:
      '["04f66779-bcfa-4c5c-a140-f234138890f3", "adb96fd7-cdcf-43dc-9e1b-0c0a262111f9"]',
  })
  games: string[];

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Lista com os IDs dos favoritos',
    example:
      '["04f66779-bcfa-4c5c-a140-f234138890f3", "adb96fd7-cdcf-43dc-9e1b-0c0a262111f9"]',
  })
  favorites: string[];
}
