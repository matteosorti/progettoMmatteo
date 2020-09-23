import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Products } from 'src/app/core/model/products.interface';
import { User } from 'src/app/core/model/user.interface';
import { addToUser } from 'src/app/redux/cart/cart.actions';
import { getCurrentUser } from 'src/app/redux/users';

@Component({
  selector: 'app-secondo-step',
  templateUrl: './secondo-step.component.html',
  styleUrls: ['./secondo-step.component.scss']
})
export class SecondoStepComponent implements OnInit {
  dati: FormGroup;
  users: User;

  @Output()
  undoEvent: EventEmitter<Products> = new EventEmitter();

  get user(): Observable<User> {
    return this.store.pipe(select(getCurrentUser));
  };
  
  constructor(private fb: FormBuilder, private store: Store) {
    this.dati=this.fb.group(
      {
        name: ['', Validators.required],
        surname: ['', Validators.required],
        indirizzo: ['', Validators.required],
        cellulare: ['', Validators.required],
        citta: ['', Validators.required],
        informazioni: ['', Validators.required],
        cap: ['', Validators.required],
        numero: ['', Validators.required]
      }
    )
    this.user.subscribe(user=>{
      this.dati.patchValue({
        name: user.name,
        surname: user.surname
      })
    })
   }
  

  ngOnInit(): void {
  }


  datiUtente(){
    this.store.dispatch(addToUser({user: this.dati.value}));
    
  }

  cancel() {
    this.undoEvent.emit(this.dati.value);
  }

}



