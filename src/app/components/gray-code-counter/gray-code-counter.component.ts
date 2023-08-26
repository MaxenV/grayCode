import { Component } from '@angular/core';

@Component({
  selector: 'app-gray-code-counter',
  templateUrl: './gray-code-counter.component.html',
  styleUrls: ['./gray-code-counter.component.scss']
})
export class GrayCodeCounterComponent {
  showInstruction = false;

  onShowInstruction() {
    this.showInstruction = true
  }
  onHideInstruction() {
    this.showInstruction = false
  }
}
