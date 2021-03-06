import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ShoppingService } from './shopping.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public apiService: ApiService,
    public shoppingService: ShoppingService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    if (!this.location.path()) {
       this.router.navigate(['/page/1']);
    }
    this.route.queryParamMap.subscribe(queryParams => {
      this.apiService.searchStr = (queryParams.get('searchStr')) ? (queryParams.get('searchStr')) : '';
    });
  }
}
