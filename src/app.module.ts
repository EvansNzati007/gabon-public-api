import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';
import { LoggerModule } from './logger/logger.module';
import { ProvinceModule } from './province/province.module';
import { DepartementModule } from './departement/departement.module';
import { CantonsModule } from './cantons/cantons.module';
import { CommunesModule } from './communes/communes.module';

@Module({
  imports: [LoggerModule, ProvinceModule, DepartementModule, CantonsModule, CommunesModule],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
