import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { LOGGER_CONFIG } from '../logger/logger.module';

import type { ILogger } from '../logger/logger.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Province } from './province.entity';
import { Repository } from 'typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';

@Injectable()
export class ProvinceService {
  constructor(
    @InjectRepository(Province) private repo: Repository<Province>,
    @Inject(LOGGER_CONFIG) private readonly logger: ILogger,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getProvinces() {
    const cacheKey = 'provinces';
    const cachedData = await this.cacheManager.get(cacheKey);
    if (cachedData) {
      return cachedData;
    }
    const provinces = await this.repo.find();
    await this.cacheManager.set(cacheKey, provinces, 5000);
    return provinces;
  }

  async getProvinceByCode(codeAdministratif: string) {
    const cacheKey = `code-${codeAdministratif}`;
    const cachedData = await this.cacheManager.get(cacheKey);
    if (cachedData) {
      return cachedData;
    }
    const province = await this.repo.findOne({ where: { codeAdministratif } });
    if (!province) {
      this.logger.warn(`Province with code ${codeAdministratif} not found`);
      throw new NotFoundException(
        `Province with code ${codeAdministratif} not found`,
      );
    }

    await this.cacheManager.set(cacheKey, province, 5000);
    return province;
  }

  async getProvinceByCodeAndDepartment(codeAdministratif: string) {
    const cacheKey = `code-${codeAdministratif}`;
    const cachedData = await this.cacheManager.get(cacheKey);
    if (cachedData) {
      return cachedData;
    }

    const province = await this.repo.findOne({
      where: { codeAdministratif },
      relations: ['departements'],
    });
    if (!province) {
      this.logger.warn(`Province with code ${codeAdministratif} not found`);
      throw new NotFoundException(
        `Province with code ${codeAdministratif} not found`,
      );
    }

    await this.cacheManager.set(cacheKey, province, 5000);
    return province;
  }
}
