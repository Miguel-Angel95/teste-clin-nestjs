import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateClinicDto {
  @ApiProperty()
  @IsString()
  nomeClinica: string;

  @ApiProperty()
  @IsString()
  nomeResponsavel: string;

  @ApiProperty()
  @IsString()
  telefone: string;

  @ApiProperty()
  @IsString()
  cep: string;

  @ApiProperty()
  @IsString()
  uf: string;

  @ApiProperty()
  @IsString()
  cidade: string;

  @ApiProperty()
  @IsString()
  bairro: string;

  @ApiProperty()
  @IsString()
  longradouro: string;

  @ApiProperty()
  @IsString()
  numero: string;

  @ApiProperty()
  @IsString()
  complemento: string;
}
