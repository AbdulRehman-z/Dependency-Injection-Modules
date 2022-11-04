import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watts: number) {
    return console.log(`Power supplied ${watts}`);
  }
}
