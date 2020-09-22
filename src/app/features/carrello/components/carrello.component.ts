import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectProducts } from 'src/app/redux/cart';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { off } from 'process';
import { Products } from 'src/app/core/model/products.interface';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  

  constructor(private store: Store) { 
  }

  get products(): Observable<Products[]> {
    return this.store.pipe(select(selectProducts));
    
  };

  ngOnInit(): void {
    this.products.subscribe(item=>{
      console.log('')
    })
  }

}
