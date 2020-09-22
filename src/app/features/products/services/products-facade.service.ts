//import { updateProducts, postProducts } from '../../../redux/products/products.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Products } from 'src/app/core/model/products.interface';
import { updateProducts, postProducts } from 'src/app/redux/products/products.actions';

@Injectable()
export class ProductsFacadeService {

  constructor(private router: Router, private store: Store) { }

  editProducts(products: Products) {
    this.store.dispatch(updateProducts({products}));
  }

  addProducts(products: Products) {
    this.store.dispatch(postProducts({products}));
  }

  goToProductsHome() {
    this.router.navigateByUrl('/products');
  }

  goToDetail(id: number) {
    this.router.navigateByUrl('/products/detail/' + id);
  }
  
  goToEdit(id: number) {
    this.router.navigateByUrl('/products/edit/' + id);
  }

  // removeProducts(products: Products){
  //   this.store.dispatch(removeProducts({products}));
  // }

}
