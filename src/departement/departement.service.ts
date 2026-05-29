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
    const { limit = 10, offset = 0 } = paginationDto;
    const cacheKey = `departements:${limit}:${offset}`;
    // Indiquez le type attendu au gestionnaire de cache
    const cachedData = await this.cacheManager.get<{
      items: Departement[];
      count: number;
    }>(cacheKey);
    if (cachedData) {
      return cachedData;
    }

    const [items, total] = await this.repo.findAndCount({
      take: limit,
      skip: offset,
    });

    const result = {
      items,
      count: total,
    };

    await this.cacheManager.set(cacheKey, result, 5000); // Cache pour 5 minutes

    return result;
  }

  async getDepartementById(id: number) {
    const cacheKey = `departement:${id}`;
    const cachedData = await this.cacheManager.get<{
      departements: Departement[];
      count: number;
    }>(cacheKey);
    if (cachedData) {
      return cachedData;
    }
    const departement = await this.repo.findOne({ where: { id } });
    if (!departement) {
      throw new NotFoundException(`Departement with id ${id} not found`);
    }
    await this.cacheManager.set(cacheKey, departement, 5000);
    return departement;
  }
}
