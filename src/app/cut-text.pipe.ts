import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
     let defLength:any = 250;
     let limit = args !== defLength ? args : 250;
     return value.length > limit ? value.substring(0, limit) : value;
  }

}
