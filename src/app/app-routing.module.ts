import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './component/client/index/index.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { ProductComponent } from './component/admin/product/product.component';
import { CategoryComponent } from './component/admin/category/category.component';
import { CartComponent } from './component/client/cart/cart.component';
import { OrderComponent } from './component/client/order/order.component';
import { UserOrderComponent } from './component/admin/user-order/user-order.component';

const routes: Routes = [
  {path:'',component: IndexComponent},
  {path: 'cart',component:CartComponent},
  {path:'order',component:OrderComponent},
  {path:'admin',component: DashboardComponent,
    children: [
      {path:'',component:CategoryComponent},
      {path:'product',component:ProductComponent},
      {path:'order',component:UserOrderComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
