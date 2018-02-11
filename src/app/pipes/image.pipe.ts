import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class ImagePipe implements PipeTransform {

  transform(items: any[], category:string): any {
    if (items == null){
      return [];
    }
    var temp = [];
    for (var i=0; i<items.length; i++){
      if (items[i].category == category){
        temp.push(items[i]);
      }
    }

    return temp;
    // To search values only of "name" variable of your object(item)
    //return items.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);

    // To search in values of every variable of your object(item)
    //return items.filter(item => JSON.stringify(item).toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }

}