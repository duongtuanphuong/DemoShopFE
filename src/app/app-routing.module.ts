import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './component/client/index/index.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { ProductComponent } from './component/admin/product/product.component';
import { CategoryComponent } from './component/admin/category/category.component';

const routes: Routes = [
  {path:'',component: IndexComponent},
  {path:'admin',component: DashboardComponent,
    children: [
      {path:'',component:CategoryComponent},
      {path:'product',component:ProductComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
