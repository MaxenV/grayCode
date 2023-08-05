import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CounterControls } from './grey-controls/counter-controls.model';

@Injectable({
  providedIn: 'root'
})
export class GreyCodeCounterService {
  controls = new Subject<CounterControls>()

  decimalToGray(decimal: number): number[] {
    if (decimal < 0)
      throw new Error("Cannot write a negative number in gray code")

    if (decimal == 0)
      return [0]

    let binaryString = decimal.toString(2);
    let grayString = [];

    for (let i = 0; i < binaryString.length; i++) {
      grayString.push(parseInt(binaryString[i]) ^ parseInt(binaryString[i - 1]))
    }
    return grayString;
  }

  whichBitChange(value: number): number {
    if (value < 0)
      throw new Error("Cannot write a negative number in gray code")

    if (value == 0) return 0
    let power = 1;
    while (!(value % Math.round(Math.pow(2, power)))) {
      ++power
    }
    return power - 1
  }


  constructor() { }
}
