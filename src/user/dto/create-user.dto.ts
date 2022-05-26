import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUrl, Matches, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'O id do usuário no banco de dados',
    example: '504ead36-3afe-491a-8222-811ce36241b2',
  })
  id: string;

  @IsString()
  @ApiProperty({
    description: 'O nome de usuário',
    example: 'Hilton',
  })
  name: string;

  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha do usuário para login',
    example: 'Abcd@1234',
  })
  password: string;

  @ApiProperty({
    description: 'A confirmação da senha deve ser igual a senha',
    example: 'Abcd@1234',
  })
  confirmPassword: string;

  @IsUrl()
  @ApiProperty({
    description: 'Foto de perfil',
    example: 'https://avatars.githubusercontent.com/u/11823634?v=4',
  })
  image: string;
}
