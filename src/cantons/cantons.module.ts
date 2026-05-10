import { Module } from '@nestjs/common';
import { CantonsService } from './cantons.service';
import { CantonsController } from './cantons.controller';

@Module({
  providers: [CantonsService],
  controllers: [CantonsController]
})
export class CantonsModule {}
