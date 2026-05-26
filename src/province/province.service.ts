import { Inject, Injectable } from '@nestjs/common';
import { LOGGER_CONFIG } from '../logger/logger.module';
import type { ILogger } from '../logger/logger.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Province } from './province.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProvinceService {
  constructor(
    @InjectRepository(Province) private repo: Repository<Province>,
    @Inject(LOGGER_CONFIG) private readonly logger: ILogger,
  ) {}

  async getProvinces() {
    return this.repo.find();
  }

  async getProvinceByCode(codeAdministratif: string) {
    return this.repo.findOne({ where: { codeAdministratif } });
  }

  async getProvinceByCodeAndDepartment(codeAdministratif: string){
    return this.repo.findOne({
      where: { codeAdministratif },
      relations: ['departements'],
    });
  }
}
