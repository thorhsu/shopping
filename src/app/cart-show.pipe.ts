import { Pipe, PipeTransform } from '@angular/core';
import { Commodity } from './api.service';

@Pipe({
  name: 'cartShow'
})
export class CartShowPipe implements PipeTransform {
  // originalItem, count, id
  transform(shoppingItems: Commodity[], args?: any): any {
    const outputItems = [];
    for (const commodity of shoppingItems){
      const transformObj = {originalItem: commodity, count: 1, id: commodity.id};
      let added = false;
      for(const item of outputItems) {
        if (item['id'] === commodity.id) {
          added = true;
          item['count'] = item['count'] + 1;
          break;
        }
      }
      if (!added) {
        outputItems.push(transformObj);
      }
    }
    return outputItems;
  }

}
