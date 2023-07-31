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

  ngOnInit(): void {
    this.counterService.greyBits.subscribe((newBits) => {
      this.greyBits = newBits
    })
  }
}
