import { Injectable } from '@angular/core';
import { Commodity } from './api.service';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  shoppingItems = [];
  get total() {
     return this.shoppingItems.map(item => item.originalItem.price * item.count)
      .reduce((accumulator, itemPrice) => accumulator + itemPrice, 0);
  }

  constructor() { }

  addToCart(commodity: Commodity) {
    // this.shoppingItems.push(item);
    // this.shoppingItems = [...this.shoppingItems];
    const transformObj = {originalItem: commodity, count: 1, id: commodity.id};
    let added = false;
    for(const item of this.shoppingItems) {
      if (item['id'] === commodity.id) {
        added = true;
        item['count'] = item['count'] + 1;
        break;
      }
    }
    if (!added) {
      this.shoppingItems.push(transformObj);
    }
  }

  removeFromCart(id: string) {
    for (let i = 0; i < this.shoppingItems.length; i++) {
      if (this.shoppingItems[i].id === id) {
        this.shoppingItems[i]['count'] -= 1;
        if (this.shoppingItems[i]['count'] <= 0) {
          this.shoppingItems.splice(i, 1);
        }
        this.shoppingItems = [...this.shoppingItems];
        break;
      }
    }
  }


}
