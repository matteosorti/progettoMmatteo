import { ProductsStep } from '../../../core/model/products-step.interface';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Products } from 'src/app/core/model/products.interface';
import { addToCart } from 'src/app/redux/cart/cart.actions';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectProducts } from 'src/app/redux/products';
import { ProductsFacadeService } from 'src/app/features/products/services/products-facade.service';

import {Router} from "@angular/router"

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnChanges {

  get productsList(): Observable<Products[]> {
    return this.store.pipe(select(selectProducts));
  }

  @Input()
  products: Products;  
  
  @Output()
  formSubmitEvent: EventEmitter<Products> = new EventEmitter();

  @Output()
  undoEvent: EventEmitter<Products> = new EventEmitter();

  productsForm: FormGroup;
  stepsArray: ProductsStep[] = []

  get stepsControl(): FormArray {
    return this.productsForm.get('steps') as FormArray;
  }

  constructor(private productsFacadeService: ProductsFacadeService, private fb: FormBuilder, private store: Store, private router: Router) {
    this.productsForm = this.fb.group({
      id: null,
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      color: ['', Validators.required],
      textColor: ['', Validators.required],
      steps: this.fb.array([])
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['products'] && this.products != null) {
      this.stepsArray = [...this.products.steps];
      this.stepsControl.clear();
      this.stepsArray.forEach(step => {
        this.stepsControl.push(this.fb.group({
          id: step.id,
          // done: step.done,
          title: [step.title, Validators.required],
          description: [step.title, Validators.required],
          image: [step.title, Validators.required],
          color: [step.title, Validators.required],
          textColor: [step.title, Validators.required]
        }));
      });
      this.productsForm.patchValue({
        id: this.products.id,
        title: this.products.title,
        description: this.products.description,
        image: this.products.image,
        color: this.products.color,
        textColor: this.products.textColor
      })
    }
  }

  confirmChanges() {
    this.formSubmitEvent.emit(this.productsForm.value);
  }

  redirectHome(){
    this.router.navigate(['/home']);
  }
  cancel() {
    this.router.navigate(['/home']);
    this.undoEvent.emit(this.productsForm.value);
  }
  addToCart(){
  this.store.dispatch(addToCart({product: this.productsForm.value}))
  console.log(this.productsForm.value);
  }

  showDetail(products: Products) {
    this.productsFacadeService.goToEdit(products.id);
  }

  

}
