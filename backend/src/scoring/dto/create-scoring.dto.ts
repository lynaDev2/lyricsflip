import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateScoringDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsNumber()
  @IsNotEmpty()
  score: number;
  
  @IsNumber()
  @IsOptional() // Optional since rankings are usually calculated
  ranking?: number;
}
