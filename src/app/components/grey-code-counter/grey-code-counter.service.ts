import { Injectable } from '@angular/core';
import { Subject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GreyCodeCounterService {
  greyBits = new Subject<String[]>()
  private _actualValue: number = 0
  destinyValue: number = 0

  set value(v: number) {
    this._actualValue = v
    this.greyBits.next(this.decimalToGray(v))
  }
  get actualValue() {
    return this._actualValue
  }


  decimalToGray(decimal: number): string[] {
    let binaryString = decimal.toString(2);
    let grayString = '';

    grayString += binaryString[0];

    for (let i = 1; i < binaryString.length; i++) {
      grayString += (parseInt(binaryString[i]) ^
        parseInt(binaryString[i - 1])).toString();
    }

    return grayString.split("");
  }

  countGreyBits(destiny: number, start: number, delay: number) {
    console.log(`${destiny}, ${start}, ${delay}`);

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
