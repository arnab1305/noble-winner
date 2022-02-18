import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], tag?:any) {
    if(!tag){
      return value;
    }
    return value.filter((val: any) => {

      for (let i = 0; i < tag.length; i++) {
        if ((val.prizes.year.includes(tag[i]) || (val.prizes.category.includes(tag[i])))) {
          return true;
        }
      }
      return false;

    })
  }

}
