import { IsIn, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateLibroDto {
    @IsString()
    @MinLength(1)
    title: string;
  
    @IsString()
    @MinLength(1)
    isbn: string;
  
    @IsNumber()
    @IsOptional()
    pageCount: number;
  
    @IsString()
    @MinLength(1)
    @IsOptional()
    publishedDate: string;
  
    @IsString()
    @MinLength(1)
    @IsOptional()
    thumbnailUrl?: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    shortDescription?: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    longDescription: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    @IsIn(['PUBLISH', 'UNPUBLISH'])
    status?: string;

    @IsString()
    idCliente?: string;
}
