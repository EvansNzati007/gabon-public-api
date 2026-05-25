import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Departement } from './departement.entity';

@Injectable()
export class DepartementService {

  constructor(@InjectRepository(Departement) private repo: Departement) {
  }
}
