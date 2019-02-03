import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartShowPipe } from './cart-show.pipe';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppComponent },
  { path: 'page/:pageNo', component: PaginationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    ShoppingCartComponent,
    CartShowPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
