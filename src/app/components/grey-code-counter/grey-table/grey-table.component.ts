import { Component, OnInit } from '@angular/core';
import { GreyCodeCounterService } from '../grey-code-counter.service';

@Component({
  selector: 'app-grey-table',
  templateUrl: './grey-table.component.html',
  styleUrls: ['./grey-table.component.scss']
})
export class GreyTableComponent implements OnInit {
  constructor(private counterService: GreyCodeCounterService) { }
  greyBits: number[] = []
  actualChangeBit = 0
  finalBitListLength = 1

  ngOnInit(): void {
    this.counterService.controls.subscribe(controls => {
      this.finalBitListLength = controls.destinyValue.toString(2).length
      this.countGrayBits(
        controls.destinyValue,
        controls.startValue,
        controls.animationSpeed)
    })
  }


  countGrayBits(destiny: number, start: number, delay: number) {
    let counter = start;
    const interval = setInterval(() => {

      this.greyBits = this.counterService.decimalToGray(counter).reverse()
      this.actualChangeBit = this.counterService.whichBitChange(counter)

      counter++;
      if (counter > destiny)
        clearInterval(interval)
    }, delay)
  }
}
