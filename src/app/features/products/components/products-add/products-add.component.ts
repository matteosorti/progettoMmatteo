import { ProductsFacadeService } from '../../services/products-facade.service';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/core/model/products.interface';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss']
})
export class ProductsAddComponent implements OnInit {

  constructor(private productsFacadeService: ProductsFacadeService) { }

  ngOnInit(): void {
  }

  undo() {
    this.productsFacadeService.goToProductsHome();
  }

  addProducts(products: Products) {
    this.productsFacadeService.addProducts(products);
  }

}
