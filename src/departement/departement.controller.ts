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
import type { ILogger } from '../logger/logger.interface';

@Controller('departements')
export class DepartementController {
  constructor(
    private departementService: DepartementService,
    @Inject(LOGGER_CONFIG) private readonly logger: ILogger,
  ) {}

  @Get()
  async findAll(@Query() paginateDto: PaginationDto) {
    this.logger.log('Fetching all departements');

    return this.departementService.getDepartements(paginateDto);
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    this.logger.log(`Fetching departement with id: ${id}`);
    return this.departementService.getDepartementById(id);
  }
}
