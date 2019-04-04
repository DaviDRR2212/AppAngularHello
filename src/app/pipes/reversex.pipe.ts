import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversex'
})
export class ReversexPipe implements PipeTransform {

  transform(value: any): any {
    return value.split('').reverse().join('');
  }

}
