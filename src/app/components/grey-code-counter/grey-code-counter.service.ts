import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GreyCodeCounterService {
  greyBits = new Subject<{
    bitList: number[],
    lastChangedBit: number
  }>()
  private _actualValue = 0
  destinyValue = new Subject<number>()

  set value(v: number) {
    this._actualValue = v
    this.greyBits.next({
      bitList: this.decimalToGray(v),
      lastChangedBit: this.whichBitChange(v)
    })

  }

  get actualValue() {
    return this._actualValue
  }

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

  countGreyBits(destiny: number, start: number, delay: number) {
    this.destinyValue.next(destiny)
    let counter = start;
    const interval = setInterval(() => {
      this.value = counter
      counter++;
      if (counter > destiny)
        clearInterval(interval)
    }, delay)
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
