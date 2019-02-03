import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, shareReplay, mergeMap, toArray, tap, skip, take  } from 'rxjs/operators';
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

  dataProvider =
        this.http.get<any[]>('./assets/pros-list.json').pipe(shareReplay());

  query() {
    // Observable
    // RxJS
    this.dataProvider
    .pipe(
      tap(items => {
        this.pages = [];
        const pageNo = Math.floor(items.length / this.maxPageItems) + (items.length % this.maxPageItems !== 0 ? 1 : 0);
        for (let i = 0 ; i < pageNo; i++) {
          this.pages.push(i);
        }
      }),
      mergeMap(items => from(items)),
      filter(item =>
        this.searchStr.length === 0
          ? true
          : item.name.toLowerCase().indexOf(this.searchStr.toLowerCase()) >= 0
      ),
      skip(this.currentPage * this.maxPageItems),
      take(this.maxPageItems),
      toArray()
    )
    .subscribe((data: Commodity[]) => {
      this.data = data;
    });
    // this.http.post(url, body).subscribe();
    // this.http.put(url, body).subscribe();
    // this.http.delete(url).subscribe();
  }
}
