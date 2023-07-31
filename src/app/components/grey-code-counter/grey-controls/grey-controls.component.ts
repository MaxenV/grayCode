import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { GreyCodeCounterService } from '../grey-code-counter.service';

@Component({
  selector: 'app-grey-controls',
  templateUrl: './grey-controls.component.html',
  styleUrls: ['./grey-controls.component.scss']
})
export class GreyControlsComponent {

  controlsSettings: FormGroup = new FormGroup({
    'animationSpeed': new FormControl(1000),
    'destinyNumber': new FormControl(10),
    'startNumber': new FormControl(0)
  });

  constructor(private couterService: GreyCodeCounterService) { }

  onSubmit() {

    this.couterService.countGreyBits(
      Number(this.controlsSettings.get('destinyNumber')?.value),
      Number(this.controlsSettings.get('startNumber')?.value),
      Number(this.controlsSettings.get('animationSpeed')?.value)
    )
  }

}
