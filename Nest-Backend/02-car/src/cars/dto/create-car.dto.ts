import { IsOptional, IsString, MinLength } from "class-validator";


export class CreateCarDTO {
    @IsOptional()
    id: string;

    @IsString({message: `El campo brand debe de ser string corto`})
    brand: string;

    @IsString()
    @MinLength(3)
    readonly model: string;
}