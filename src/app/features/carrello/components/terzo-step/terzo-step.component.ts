import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { observable, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Products } from 'src/app/core/model/products.interface';
import { User } from 'src/app/core/model/user.interface';
import { addToPagamento, addToUser } from 'src/app/redux/cart/cart.actions';
import { selectProducts } from 'src/app/redux/products';
import { getCurrentUser } from 'src/app/redux/users';

@Component({
  selector: 'app-terzo-step',
  templateUrl: './terzo-step.component.html',
  styleUrls: ['./terzo-step.component.scss']
})
export class TerzoStepComponent implements OnInit {
  
  carta: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.carta=this.fb.group({
      metodoPagamento: ['', Validators.required],
      tipoCarta: ['', Validators.required],
      numeroCarta: ['', Validators.required],
      cvc: ['', Validators.required]
    })
   }
  
   get user(): Observable<User> {
    return this.store.pipe(select(getCurrentUser));
    };

  get products(): Observable<Products[]> {
    return this.store.pipe(select(selectProducts));
    
  };




  acquista(){
    console.log(this.carta.value);
    this.store.dispatch(addToPagamento({pagamento: this.carta.value}));
  }
  ngOnInit(): void {
  }


  

}
