import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsFacadeService } from '../../services/products-facade.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { Products } from 'src/app/core/model/products.interface';
import { filter, mergeMap, switchMap } from 'rxjs/operators';
import { getProductById, getCurrentNavigatedProduct } from 'src/app/redux/products';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent {

  get products(): Observable<Products>{
    return this.store.pipe(select(getCurrentNavigatedProduct));
  }

  constructor(private productssFacadeService: ProductsFacadeService, private store: Store) {
  }

  edit(products: Products) {
    this.productssFacadeService.goToEdit(products.id);
  }

}
