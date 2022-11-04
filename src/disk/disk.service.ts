import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}
  getData() {
    console.log(
      'This will display 10 watts of power supplied from power service',
    );
    this.powerService.supplyPower(10);
    return 'data!';
  }
}
