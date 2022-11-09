import { IsString, MinLength, IsIn } from "class-validator";

export class CreateClienteDto {

     @IsString()
     @MinLength(1)
     name: string;

     @IsString()
     @MinLength(1)
     email: string;

     @IsString()
     @MinLength(1)
     website: string;

     @IsString()
     @MinLength(1)
     github: string;

     @IsString()
     @MinLength(1)
     twitter: string;

     @IsString()
     @MinLength(1)
     @IsIn(['anaya', 'marcombo'])
     editorial: string;
}
