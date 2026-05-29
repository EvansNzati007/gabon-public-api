import {
  Controller,
  Get,
  Inject,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import {
  CacheModule,
  CacheKey,
  CacheTTL,
  CacheInterceptor,
} from '@nestjs/cache-manager';
import { LOGGER_CONFIG } from '../logger/logger.module';
import type { ILogger } from '../logger/logger.interface';
import { plainToInstance } from 'class-transformer';
import { ProvinceService } from './province.service';
import { ProvinceResponseDto } from './dto/ProvinceResponseDto';

@Controller('provinces')
export class ProvinceController {
  constructor(
    private provinceService: ProvinceService,
    @Inject(LOGGER_CONFIG) private readonly logger: ILogger,
  ) {}

  @Get()
  async findAll() {
    this.logger.log('Finding all provinces');
    // return this.provinceService.getProvinces();

    return plainToInstance(
      ProvinceResponseDto,
      await this.provinceService.getProvinces(),
      {
        excludeExtraneousValues: true,
      },
    );
  }

  @Get(':codeAdministratif')
  async findOne(@Param('codeAdministratif') codeAdministratif: string) {
    this.logger.log(`Finding province with code: ${codeAdministratif}`);
    // return this.provinceService.getProvinceByCode(codeAdministratif);
    const province =
      await this.provinceService.getProvinceByCode(codeAdministratif);

    return plainToInstance(ProvinceResponseDto, province, {
      excludeExtraneousValues: true,
    });
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
