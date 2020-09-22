import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ProductsFacadeService } from '../../services/products-facade.service';
import { Observable } from 'rxjs';
import { Products } from 'src/app/core/model/products.interface';
import { selectProducts } from 'src/app/redux/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  get productsList(): Observable<Products[]> {
    return this.store.pipe(select(selectProducts));
  }

  constructor(private productsFacadeService: ProductsFacadeService, private store: Store) { }

  ngOnInit(): void {
  }

   showDetail(products: Products) {
     this.productsFacadeService.goToDetail(products.id);
   }
  

}
