import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/main/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ProductsEditComponent } from './components/products-edit/products-edit.component';
import { ProductsFacadeService } from './services/products-facade.service';
import { ProductsAddComponent } from './components/products-add/products-add.component';
import { ProductsNavigationEffects } from './redux/products-navigation.effects';






@NgModule({
  declarations: [ProductsComponent,  ProductsDetailComponent, ProductsEditComponent, ProductsAddComponent],
  providers: [ProductsFacadeService],
  imports: [
    SharedModule,
    EffectsModule.forFeature([ProductsNavigationEffects]),
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
