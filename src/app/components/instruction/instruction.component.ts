import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss']
})
export class InstructionComponent {
  @Output() hide = new EventEmitter()

  onClose() {
    this.hide.emit()
  }
}
