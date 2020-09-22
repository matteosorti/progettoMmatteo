import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './components/main/products.component';
import { ProductsEditComponent } from './components/products-edit/products-edit.component';
import { ProductsAddComponent } from './components/products-add/products-add.component';



const routes: Routes = [{
  path: '', component: ProductsComponent, children: [
    {path: 'detail/:id', component: ProductsDetailComponent},
    {path: 'edit/:id', component: ProductsEditComponent},
    {path: 'add', component: ProductsAddComponent}
   
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
