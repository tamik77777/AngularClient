import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userTitle'
})
export class UserTitlePipe implements PipeTransform {

  transform(value: string, multiply:string): string {
  //  let mul=parseFloat(multiply) ;
  //  return mul*value;
     return value+" "+multiply;
  }

}
