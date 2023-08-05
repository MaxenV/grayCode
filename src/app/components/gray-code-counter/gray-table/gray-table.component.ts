import { Component, OnInit } from '@angular/core';
import { GrayCodeCounterService } from '../gray-code-counter.service';

@Component({
  selector: 'app-gray-table',
  templateUrl: './gray-table.component.html',
  styleUrls: ['./gray-table.component.scss']
})
export class GrayTableComponent implements OnInit {
  constructor(private counterService: GrayCodeCounterService) { }
  grayBits: number[] = []
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

      this.grayBits = this.counterService.decimalToGray(counter).reverse()
      this.actualChangeBit = this.counterService.whichBitChange(counter)

      counter++;
      if (counter > destiny)
        clearInterval(interval)
    }, delay)
  }
}
