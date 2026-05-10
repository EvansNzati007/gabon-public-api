import { Module } from '@nestjs/common';
import { CommunesService } from './communes.service';
import { CommunesController } from './communes.controller';

@Module({
  providers: [CommunesService],
  controllers: [CommunesController]
})
export class CommunesModule {}
