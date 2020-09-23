import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, NgModule } from '@angular/core';
import { Products } from 'src/app/core/model/products.interface';
import { map, filter } from 'rxjs/operators';
import { getFirstProduct } from 'src/app/redux/products';
import { getCurrentUser } from 'src/app/redux/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  get product(): Observable<Products>{
    return this.store.pipe(select(getFirstProduct));
  }

  get user(): Observable<string> {
    return this.store.pipe(
      select(getCurrentUser),
      filter(user => !!user),
      map(user => user.name)
    );
  }

  constructor(private store: Store) { 
  }

  ngOnInit(): void {
  }

}
