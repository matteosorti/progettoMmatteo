import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './components/input-text/input-text.component';
import { ProductsPreviewComponent } from './components/products-preview/products-preview.component';
import { ProductsItemComponent } from './components/products-item/products-item.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';
// import { CarrelloComponent } from '../features/carrello/components/carrello.component';




@NgModule({
  declarations: [
    InputTextComponent,
    ProductsPreviewComponent,
    ProductsItemComponent,
    ProductsFormComponent,
    // CarrelloComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextComponent,
    ProductsPreviewComponent,
    ProductsItemComponent,
    ProductsFormComponent,
    // CarrelloComponent
  ]
})
export class SharedModule { }
