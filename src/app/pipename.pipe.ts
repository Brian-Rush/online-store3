import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipename'
})
export class PipenamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
