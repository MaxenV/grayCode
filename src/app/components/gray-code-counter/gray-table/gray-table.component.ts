import { Component, OnInit } from '@angular/core';
import { GrayCodeCounterService } from '../gray-code-counter.service';
import { CounterControls } from '../gray-controls/counter-controls.model';
import { interval } from 'rxjs';

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

    let myInterval = interval(controls.animationSpeed).subscribe(iterator => {
      const counter = controls.startValue - iterator
      this.grayBits = this.correctLengthBitsTable(counter)
      this.actualChangeBit = this.counterService.whichBitChange(counter + 1)

      if (counter <= controls.destinyValue)
        myInterval.unsubscribe()
    })
  }

  countUpBits(controls: CounterControls) {
    this.finalBitListLength = controls.destinyValue.toString(2).length

    let myInterval = interval(controls.animationSpeed).subscribe(iterator => {
      const counter = iterator + controls.startValue
      this.grayBits = this.correctLengthBitsTable(counter)
      this.actualChangeBit = this.counterService.whichBitChange(counter)

      if (counter >= controls.destinyValue)
        myInterval.unsubscribe()
    })

  }

  correctLengthBitsTable(actualValue: number) {
    let localBinaryArray = this.counterService.decimalToGray(actualValue).reverse()
    return localBinaryArray.concat(
      Array(this.finalBitListLength - localBinaryArray.length)
        .fill(0)
    )
  }
}
