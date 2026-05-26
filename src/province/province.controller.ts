import { Controller, Get, Inject, Param } from '@nestjs/common';

import { LOGGER_CONFIG } from '../logger/logger.module';
import type { ILogger } from '../logger/logger.interface';
import { ProvinceService } from './province.service';

@Controller('provinces')
export class ProvinceController {
  constructor(
    private provinceService: ProvinceService,
    @Inject(LOGGER_CONFIG) private readonly logger: ILogger,
  ) {}

  @Get()
  findAll() {
    this.logger.log('Finding all provinces');
    return this.provinceService.getProvinces();
  }

  @Get(':codeAdministratif')
  findOne(@Param('codeAdministratif') codeAdministratif: string) {
    this.logger.log(`Finding province with code: ${codeAdministratif}`);
    return this.provinceService.getProvinceByCode(codeAdministratif);
  }

  @Get(':codeAdministratif/departements')
  findOneWithDepartments(
    @Param('codeAdministratif') codeAdministratif: string,
  ) {
    this.logger.log(
      `Finding province with code: ${codeAdministratif} and its departments`,
    );
    return this.provinceService.getProvinceByCodeAndDepartment(
      codeAdministratif,
    );
  }
}
