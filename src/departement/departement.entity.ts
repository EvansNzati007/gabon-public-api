import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Province } from '../province/province.entity';

@Entity()
export class Departement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  chefLieu: string;

  @Column()
  population: number;

  @Column()
  superficie: number;

  @ManyToOne(() => Province, (province) => province.departements, {
    onDelete: 'CASCADE',
  })
  province: Province;
}
