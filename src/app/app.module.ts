import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './component/admin/category/category.component';
import { ProductComponent } from './component/admin/product/product.component';
import { IndexComponent } from './component/client/index/index.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './component/client/cart/cart.component';
import { OrderComponent } from './component/client/order/order.component';
import { HomeComponent } from './component/client/home/home.component';
import { UserOrderComponent } from './component/admin/user-order/user-order.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    IndexComponent,
    DashboardComponent,
    CartComponent,
    OrderComponent,
    HomeComponent,
    UserOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
