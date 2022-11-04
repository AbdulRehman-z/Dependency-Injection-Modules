import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) {
    console.log('Cpu will draw 20 watts of power from powersupply');
    this.powerService.supplyPower(20);
    return a + b;
  }
}
