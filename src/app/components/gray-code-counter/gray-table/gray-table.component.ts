import { Component, OnInit } from '@angular/core';
import { GrayCodeCounterService } from '../gray-code-counter.service';
import { CounterControls } from '../gray-controls/counter-controls.model';

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
      if (controls.destinyValue > controls.startValue)
        this.countUpBits(controls)
      else
        this.countDownBits(controls)
    })
  }


  countDownBits(controls: CounterControls) {
    this.finalBitListLength = controls.destinyValue.toString(2).length
    let counter = controls.startValue;
    const interval = setInterval(() => {

      this.grayBits = this.correctLengthBitsTable(counter)
      this.actualChangeBit = this.counterService.whichBitChange(counter + 1)

      counter--;
      if (counter < controls.destinyValue)
        clearInterval(interval)
    }, controls.animationSpeed)
  }

  countUpBits(controls: CounterControls) {
    this.finalBitListLength = controls.destinyValue.toString(2).length
    let counter = controls.startValue;
    const interval = setInterval(() => {

      this.grayBits = this.correctLengthBitsTable(counter)
      this.actualChangeBit = this.counterService.whichBitChange(counter)

      counter++;
      if (counter > controls.destinyValue)
        clearInterval(interval)
    }, controls.animationSpeed)
  }

  correctLengthBitsTable(actualValue: number) {
    let localBinaryArray = this.counterService.decimalToGray(actualValue).reverse()
    return localBinaryArray.concat(
      Array(this.finalBitListLength - localBinaryArray.length)
        .fill(0)
    )
  }
}
