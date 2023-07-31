import { Injectable } from '@angular/core';
import { Subject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GreyCodeCounterService {
  greyBits = new Subject<number[]>()
  private _actualValue: number = 0
  destinyValue: number = 0

  set value(v: number) {
    this._actualValue = v
    this.greyBits.next(this.decimalToGray(v))
  }
  get actualValue() {
    return this._actualValue
  }

  decimalToGray(decimal: number): number[] {
    let binaryString = decimal.toString(2);
    let grayString = [];

    for (let i = 0; i < binaryString.length; i++) {
      grayString.push(parseInt(binaryString[i]) ^ parseInt(binaryString[i - 1]))
    }
    return grayString;
  }

  countGreyBits(destiny: number, start: number, delay: number) {
    let counter = start;
    const inverval = setInterval(() => {
      this.value = counter
      counter++;
      if (counter > destiny)
        clearInterval(inverval)
    }, delay)
  }

  constructor() { }
}
