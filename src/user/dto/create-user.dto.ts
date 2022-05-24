import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUrl } from "class-validator";

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'O id do usuário no banco de dados',
    example: '504ead36-3afe-491a-8222-811ce36241b2',
  })
  id: string;

  @IsString()
  @ApiProperty({
    description: 'O nickname da conta',
    example: 'Junhonda',
  })
  nickname: string;

  @IsString()
  @ApiProperty({
    description: 'O nome de usuário',
    example: 'Hilton',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Senha de usuário',
    example: '123456',
  })
  password: string;

  @IsUrl()
  @ApiProperty({
    description: 'Foto de perfil',
    example: 'https://avatars.githubusercontent.com/u/11823634?v=4',
  })
  image: string;

  createdAt: Date;
  updatedAt: Date;
}
