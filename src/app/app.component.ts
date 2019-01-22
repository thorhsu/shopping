import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public apiService: ApiService, public shoppingService: ShoppingService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.apiService.query();
  }
}
