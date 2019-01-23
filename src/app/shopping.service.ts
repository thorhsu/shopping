import { Injectable } from '@angular/core';
import { Commodity } from './api.service';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  shoppingItems: Commodity[] = [];
  get total() {
    let _total = 0;
    for(const item of this.shoppingItems) {
      _total += item.price;
    }
    return _total;
  }

  constructor() { }

  addToCart(item: Commodity) {
    this.shoppingItems.push(item);
    this.shoppingItems = [...this.shoppingItems];
  }

  removeFromCart(id: string) {
    for (let i = 0; i < this.shoppingItems.length; i++) {
      if (this.shoppingItems[i].id === id) {
        this.shoppingItems.splice(i, 1);
        this.shoppingItems = [...this.shoppingItems];
        break;
      }
    }
  }


}
