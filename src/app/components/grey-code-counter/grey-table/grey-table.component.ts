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
    this.counterService.greyBits.subscribe((newBits) => {
      let localBinaryList: number[] = newBits.bitList
      this.actualChangeBit = newBits.lastChangedBit

      this.greyBits = Array(this.finalBitListLength - localBinaryList.length).fill(0)
        .concat(localBinaryList.reverse())
    })

    this.counterService.destinyValue.subscribe((value) => this.finalBitListLength = value.toString(2).length)
  }
}
