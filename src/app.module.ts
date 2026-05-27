import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerService } from './logger/logger.service';
import { LoggerModule } from './logger/logger.module';
import { ProvinceModule } from './province/province.module';
import { DepartementModule } from './departement/departement.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Province } from './province/province.entity';
import { Departement } from './departement/departement.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    CacheModule.register({
      isGlobal: true,
      ttl: 5000, // Durée de vie par défaut en millisecondes (Ex: 5 secondes)
      max: 100, // Nombre maximum d'éléments en mémoire cache
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],

      useFactory: (config: ConfigService) => {
        return {
          type: 'sqlite',
          database: config.get<string>('DB_NAME'),
          entities: [Province, Departement],
          synchronize: true, // à eviter en prod
        };
      },
    }),

    LoggerModule,
    ProvinceModule,
    DepartementModule,
  ],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
