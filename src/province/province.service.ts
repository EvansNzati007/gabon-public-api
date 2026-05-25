import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Province } from './province.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProvinceService {
  public provinces = [
    {
      name: 'Estuaire',
      code: 'ES',
      chef_lieu: 'AKANDA',
      superficie: 1000000,
      population: 10000000,
    },
    {
      name: 'Haut-Ogoue',
      code: 'HO',
      chef_lieu: 'Franceville',
      superficie: 1000000,
      population: 10000000,
    },

    {
      name: 'Moyen-Ogoué',
      code: 'MO',
      chef_lieu: 'Lambarené',
      superficie: 1000000,
      population: 10000000,
    },

    {
      name: 'Ngounié',
      code: 'NG',
      chef_lieu: 'Mouila',
      superficie: 1000000,
      population: 10000000,
    },

    {
      name: 'Nyanga',
      code: 'NY',
      chef_lieu: 'Tchibanga',
      superficie: 1000000,
      population: 10000000,
    },

    {
      name: 'Ogoué-Ivindo',
      code: 'OI',
      chef_lieu: 'Makoku',
      superficie: 1000000,
      population: 10000000,
    },

    {
      name: 'Ogoué-Lolo',
      code: 'OL',
      chef_lieu: 'Koulamoutou',
      superficie: 1000000,
      population: 10000000,
    },

    {
      name: 'Ogoué-Maritime',
      code: 'OM',
      chef_lieu: 'Port-Gentil',
      superficie: 1000000,
      population: 10000000,
    },

    {
      name: 'Woleu-Ntem',
      code: 'WT',
      chef_lieu: 'Oyem',
      superficie: 1000000,
      population: 10000000,
    },
  ];

  constructor(@InjectRepository(Province) private repo: Repository<Province>) {}

  getProvinces() {
    console.log('voci les provinces : ', this.provinces);
    return this.provinces;
  }
}
