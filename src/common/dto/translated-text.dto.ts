import { IsOptional, IsString } from 'class-validator';

export class TranslatedTextDto {
  @IsOptional()
  @IsString()
  es?: string;

  @IsOptional()
  @IsString()
  en?: string;
}
