import { Controller, Get } from '@nestjs/common';
import { ProvinceService } from './province.service';

@Controller('province')
export class ProvinceController {


  constructor(private provinceService: ProvinceService) {
  }

  @Get()
  findAll() {
    console.log(this.provinceService.getProvinces());
    return this.provinceService.getProvinces();
  }
}
