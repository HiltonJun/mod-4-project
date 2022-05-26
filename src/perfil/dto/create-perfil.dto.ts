import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUrl } from "class-validator";

export class CreatePerfilDto {
  @IsString()
  @ApiProperty({
    description: 'O id do perfil no banco de dados',
    example: '504ead36-3afe-491a-8222-811ce36241b2',
  })
  id: string;

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
}
