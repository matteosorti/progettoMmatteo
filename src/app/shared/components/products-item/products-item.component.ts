import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Products } from 'src/app/core/model/products.interface';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss']
})
export class ProductsItemComponent {

  @Input()
  products: Products;

  @Output()
  editEvent: EventEmitter<Products> = new EventEmitter();

  constructor() { }

  editClick() {
    this.editEvent.emit(this.products);
  }

}
