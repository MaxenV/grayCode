import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'controlsError'
})
export class ControlsErrorPipe implements PipeTransform {

  transform(err: ValidationErrors | null | undefined): string {
    if (err === null)
      return ''
    if (err?.["required"] === true)
      return "Inputs can't be empty"

    if (err?.["negativeNumber"] === true)
      return "You can't put negative"

    if (err?.["floatingNumber"] === true)
      return "Inputs only takes integers"

    if (err?.["NaNError"] === true)
      return "Inputs only takes numbers"

    return "Unknown error"

  }

}
