import { Component, OnDestroy, OnInit } from '@angular/core';
import { GrayCodeCounterService } from '../gray-code-counter.service';
import { CounterControls } from '../gray-controls/counter-controls.model';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-gray-table',
  templateUrl: './gray-table.component.html',
  styleUrls: ['./gray-table.component.scss']
})
export class GrayTableComponent implements OnInit, OnDestroy {
  grayBits: number[] = [0, 0, 0, 0]
  actualChangeBit = 0
  finalBitListLength = 1
  controlsSubscription!: Subscription;

  constructor(private counterService: GrayCodeCounterService) { }

  countDownBits(controls: CounterControls) {
    this.finalBitListLength = controls.startValue.toString(2).length

    this.grayBits = this.correctLengthBitsTable(controls.startValue)
    this.actualChangeBit = this.counterService.whichBitChange(controls.startValue)

    let myInterval = interval(controls.animationSpeed).subscribe(iterator => {
      const counter = controls.startValue - 1 - iterator
      this.grayBits = this.correctLengthBitsTable(counter)
      this.actualChangeBit = this.counterService.whichBitChange(counter + 1)

      if (counter <= controls.destinyValue) {
        this.counterService.countingNow.next(false)
        myInterval.unsubscribe()
      }
    })
  }

  countUpBits(controls: CounterControls) {
    this.finalBitListLength = controls.destinyValue.toString(2).length

    this.grayBits = this.correctLengthBitsTable(controls.startValue)
    this.actualChangeBit = this.counterService.whichBitChange(controls.startValue)

    let myInterval = interval(controls.animationSpeed).subscribe(iterator => {
      const counter = iterator + controls.startValue + 1
      this.grayBits = this.correctLengthBitsTable(counter)
      this.actualChangeBit = this.counterService.whichBitChange(counter)

      if (counter >= controls.destinyValue) {
        this.counterService.countingNow.next(false)
        myInterval.unsubscribe()
      }
    })

  }

  correctLengthBitsTable(actualValue: number) {
    let localBinaryArray = this.counterService.decimalToGray(actualValue).reverse()
    return localBinaryArray.concat(
      Array(this.finalBitListLength - localBinaryArray.length)
        .fill(0)
    )
  }


  ngOnInit(): void {
    this.counterService.controls.subscribe(controls => {
      this.counterService.countingNow.next(true)

      if (controls.destinyValue > controls.startValue)
        this.countUpBits(controls)
      else
        this.countDownBits(controls)
    })
  }

  ngOnDestroy(): void {
    this.controlsSubscription.unsubscribe()
  }
}
