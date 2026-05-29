import { Expose, Type } from 'class-transformer';
import { ProvinceResponseDto } from '../../province/dto/ProvinceResponseDto';

export class DepartementMinResponseDto {
  @Expose()
  id: number;

  @Expose()
  nom: string;

  @Expose()
  chefLieu: string;

  @Expose()
  population: number;

  @Expose()
  @Type(() => ProvinceResponseDto)
  province: ProvinceResponseDto[];
}
