import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter  } from 'rxjs/operators';
import { from  } from 'rxjs';

export interface Commodity {
  id: string;
  index: number;
  name: string;
  info: string;
  price: number;
  type: string;
  picture: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data;
  pages: number[] = [];
  currentPage = 0;
  maxPageItems = 10;
  searchStr = '';
  title = 'Angular初學者一定要來的商城';


  constructor(private http: HttpClient) { }

  query() {
    // Observable
    // RxJS
    this.http
      .get('./assets/pros-list.json')
      // .pipe(filter(item => {console.log(item); return true; }))
      .subscribe((data: Commodity[]) => {
         data = data.filter(item => item.name.toLowerCase().indexOf(this.searchStr.toLowerCase()) >= 0);
         this.pages = [];
         const pageNo = Math.floor(data.length / this.maxPageItems) + (data.length % this.maxPageItems !== 0 ? 1 : 0);
         for (let i = 0 ; i < pageNo; i++) {
           this.pages.push(i);
         }
         this.data = data.slice(this.currentPage * this.maxPageItems, (this.currentPage + 1) * this.maxPageItems);
      });
    // this.http.post(url, body).subscribe();
    // this.http.put(url, body).subscribe();
    // this.http.delete(url).subscribe();
  }
}
