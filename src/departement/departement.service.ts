import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Departement } from './departement.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from './dto/departement-dto';

@Injectable()
export class DepartementService {
  constructor(
    @InjectRepository(Departement) private repo: Repository<Departement>,
  ) {}

  async getDepartements(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    const [departements, total] = await this.repo.findAndCount({
      take: limit,
      skip: offset,
    });

    return {
      data: departements,
      count: total,
    };
  }

  async getDepartementById(id: number){
    const departement = await this.repo.findOne({ where: { id } });
    if (!departement) {
      throw new NotFoundException(`Departement with id ${id} not found`);
    }
    return departement;
  }
}
