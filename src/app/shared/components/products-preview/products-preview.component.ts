import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Products } from 'src/app/core/model/products.interface';

@Component({
  selector: 'app-products-preview',
  templateUrl: './products-preview.component.html',
  styleUrls: ['./products-preview.component.scss']
})
export class ProductsPreviewComponent {

  @Input()
  products: Products;

  @Output()
  detailEvent: EventEmitter<void> = new EventEmitter();

  constructor() { }

  detailClick() {
    this.detailEvent.emit();
  }

}
