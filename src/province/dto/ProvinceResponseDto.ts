import { Expose, Transform, Type } from 'class-transformer';
import { DepartementMinResponseDto } from '../../departement/dto/DepartementMinResponseDto';

export class ProvinceResponseDto {
  @Expose()
  nom: string;

  @Expose()
  codeAdministratif: string;

  @Expose()
  chefLieu: string;

  @Expose()
  population: number;

  @Expose()
  @Transform(({ value }) => {
    return {
      valeur: value,
      unite: 'km2',
    };
  })
  superficie: { valeur: number; unite: string};

  @Expose()
  @Type(() => DepartementMinResponseDto)
  departements: DepartementMinResponseDto[];
}
