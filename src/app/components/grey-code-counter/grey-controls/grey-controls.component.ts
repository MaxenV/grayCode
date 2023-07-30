import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

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

}
