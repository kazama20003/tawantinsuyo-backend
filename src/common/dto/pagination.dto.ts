// pagination.dto.ts
import { Type } from 'class-transformer';
import { IsIn, IsOptional, IsPositive, IsString } from 'class-validator';

export class PaginationDto {
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  page?: number = 1;

  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  limit?: number = 10;

  @IsOptional()
  @IsString()
  @IsIn(['es', 'en']) // aquí defines los idiomas permitidos
  lang?: string;
}
