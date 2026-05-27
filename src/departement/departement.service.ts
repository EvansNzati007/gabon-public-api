import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Departement } from './departement.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from './dto/departement-dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';

@Injectable()
export class DepartementService {
  constructor(
    @InjectRepository(Departement) private repo: Repository<Departement>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getDepartements(paginationDto: PaginationDto) {
    const cacheKey = `departements:${paginationDto.limit}:${paginationDto.offset}`;
    const cachedData = await this.cacheManager.get(cacheKey);
    if (cachedData) {
      return cachedData;
    }
    const { limit = 10, offset = 0 } = paginationDto;
    const [departements, total] = await this.repo.findAndCount({
      take: limit,
      skip: offset,
    });

    const result = {
      departements,
      count: total,
    };

    await this.cacheManager.set(cacheKey, result, 5000); // Cache pour 5 minutes

    return result;
  }

  async getDepartementById(id: number) {
    const cacheKey = `departement:${id}`;
    const cachedDepartement = await this.cacheManager.get(cacheKey);
    if (cachedDepartement) {
      return cachedDepartement;
    }
    const departement = await this.repo.findOne({ where: { id } });
    if (!departement) {
      throw new NotFoundException(`Departement with id ${id} not found`);
    }
    await this.cacheManager.set(cacheKey, departement, 5000);
    return departement;
  }
}
