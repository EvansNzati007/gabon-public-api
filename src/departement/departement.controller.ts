import {
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { CacheKey, CacheInterceptor } from '@nestjs/cache-manager';
import { PaginationDto } from './dto/departement-dto';
import { DepartementService } from './departement.service';
import { LOGGER_CONFIG } from '../logger/logger.module';
import { plainToInstance } from 'class-transformer';
import type { ILogger } from '../logger/logger.interface';
import { DepartementMinResponseDto } from './dto/DepartementMinResponseDto';
import { Departement } from './departement.entity';

@Controller('departements')
export class DepartementController {
  constructor(
    private departementService: DepartementService,
    @Inject(LOGGER_CONFIG) private readonly logger: ILogger,
  ) {}

  @Get()
  async findAll(
    @Query() paginateDto: PaginationDto,
  ): Promise<{ items: DepartementMinResponseDto[]; count: number }> {
    // <-- Changement de type ici
    this.logger.log('Fetching all departements');
    const result = await this.departementService.getDepartements(paginateDto);

    return {
      items: plainToInstance(DepartementMinResponseDto, result.items, {
        excludeExtraneousValues: true,
      }),
      count: result.count,
    };
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    this.logger.log(`Fetching departement with id: ${id}`);
    // return this.departementService.getDepartementById(id);
    const departement = await this.departementService.getDepartementById(id);
    return plainToInstance(DepartementMinResponseDto, departement, {
      excludeExtraneousValues: true,
    });
  }
}
