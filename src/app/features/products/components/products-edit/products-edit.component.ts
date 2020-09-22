import { ProductsFacadeService } from '../../services/products-facade.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Products } from 'src/app/core/model/products.interface';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { filter, switchMap } from 'rxjs/operators';
import { getProductById, getCurrentNavigatedProduct } from 'src/app/redux/products';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent {
  get products(): Observable<Products>{
    return this.store.pipe(select(getCurrentNavigatedProduct));
  }

  constructor(private productsFacadeService: ProductsFacadeService, private store: Store) {
  }

  editForm(products: Products) {
    this.productsFacadeService.editProducts(products);
  }

  undo(products: Products) {
    this.productsFacadeService.goToDetail(products.id);
  }

}
