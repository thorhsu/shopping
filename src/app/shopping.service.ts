import { Injectable } from '@angular/core';
import { Commodity } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  shoppingItems: Commodity[] = [];
  total = 0;

  constructor() { }

  addToCart(item: Commodity) {
    this.shoppingItems.push(item);
    this.shoppingItems = [...this.shoppingItems];
    this.total += item.price;
  }

  removeFromCart(id: string) {
    for (let i = 0; i < this.shoppingItems.length; i++) {
      if (this.shoppingItems[i].id === id) {
        this.total -= this.shoppingItems[i].price;
        this.shoppingItems.splice(i, 1);
        this.shoppingItems = [...this.shoppingItems];
        break;
      }
    }
  }


}
