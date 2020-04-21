import { Pipe, PipeTransform } from '@angular/core';    
    
@Pipe({    
  name: 'filterimages'    
})    
export class FilterimagesPipe implements PipeTransform {    
  transform(items: any[], Scene: string): any {    
    if(Scene === 'all'){ return items } else    
    return items.filter(item =>{    
      return item.brand === Scene;    
    });    
  }    
    
}   