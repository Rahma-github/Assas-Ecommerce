import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';


    if (value.length !== 16) {
      return value;
    }

    return value.replace(/(\d{4})/g, '$1 - ').slice(0, -2);
  }
}
