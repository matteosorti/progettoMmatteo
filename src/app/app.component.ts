import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { retrieveAllProducts } from './redux/products/products.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    this.store.dispatch(retrieveAllProducts());
  }


}
