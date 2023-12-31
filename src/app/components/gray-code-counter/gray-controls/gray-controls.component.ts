import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { GrayCodeCounterService } from '../gray-code-counter.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-gray-controls',
  templateUrl: './gray-controls.component.html',
  styleUrls: ['./gray-controls.component.scss']
})
export class GrayControlsComponent implements OnInit, OnDestroy {
  controlsSettings: FormGroup = new FormGroup({
    'animationSpeed': new FormControl(1000, this.correctNumberValidator),
    'destinyNumber': new FormControl(10, this.correctNumberValidator),
    'startNumber': new FormControl(0, this.correctNumberValidator)
  });
  blockSubmit = false
  countingNowSubscription!: Subscription;
  constructor(private counterService: GrayCodeCounterService) { }

  onSubmit() {
    this.counterService.controls.next({
      destinyValue: Number(this.controlsSettings.get('destinyNumber')?.value),
      startValue: Number(this.controlsSettings.get('startNumber')?.value),
      animationSpeed: Number(this.controlsSettings.get('animationSpeed')?.value)
    }
    )
  }

  correctNumberValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value === '') return { required: true }
    if (+control.value < 0) return { negativeNumber: true }
    if (Number.isNaN(Number(control.value))) return { NaNError: true }
    if ((+control.value) % 1 !== 0) return { floatingNumber: true }

    return null;
  }

  ngOnInit(): void {
    this.countingNowSubscription = this.counterService.countingNow.subscribe(value => {
      this.blockSubmit = value
    })
  }

  ngOnDestroy(): void {

  }
}

