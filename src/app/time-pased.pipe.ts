import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePased'
})
export class TimePasedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
