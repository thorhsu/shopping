import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor(public apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router) {
    }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // tslint:disable-next-line:radix
      this.apiService.currentPage = !parseInt(params.get('pageNo')) ? 0 : parseInt(params.get('pageNo')) - 1;
      this.apiService.query();
    });
  }

}
