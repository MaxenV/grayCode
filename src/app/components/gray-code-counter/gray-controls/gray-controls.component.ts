import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { GrayCodeCounterService } from '../gray-code-counter.service';

@Component({
  selector: 'app-gray-controls',
  templateUrl: './gray-controls.component.html',
  styleUrls: ['./gray-controls.component.scss']
})
export class GrayControlsComponent {

  controlsSettings: FormGroup = new FormGroup({
    'animationSpeed': new FormControl(1000),
    'destinyNumber': new FormControl(10),
    'startNumber': new FormControl(0)
  });

  constructor(private counterService: GrayCodeCounterService) { }

  onSubmit() {

    this.counterService.controls.next({
      destinyValue: Number(this.controlsSettings.get('destinyNumber')?.value),
      startValue: Number(this.controlsSettings.get('startNumber')?.value),
      animationSpeed: Number(this.controlsSettings.get('animationSpeed')?.value)
    }
    )
  }

}
