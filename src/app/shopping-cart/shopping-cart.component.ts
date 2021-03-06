import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(public shoppingService: ShoppingService, public apiService: ApiService) {}

  ngOnInit() {
  }

}
