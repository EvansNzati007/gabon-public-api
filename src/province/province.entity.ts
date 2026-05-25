import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Departement } from '../departement/departement.entity';
@Entity()
export class Province {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column({ unique: true})
  codeAdministratif: string;

  @Column()
  chefLieu: string;

  @Column()
  population: number;

  @Column()
  superficie: number;

  // Une province possède plusieurs départements
  @OneToMany(() => Departement, (departement) => departement.province)
  departements: Departement[];
}
