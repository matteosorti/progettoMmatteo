import { addToCart, saveToCart, retrieveAllProducts, initCart, addToUser, saveToUser, saveToPagamento, addToPagamento, emptyCart } from './cart.actions';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Action, select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpCommunicationsService } from '../../core/http-communications/http-communications.service';
import { switchMap, map, tap, withLatestFrom } from 'rxjs/operators';
import { Products } from 'src/app/core/model/products.interface';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/user.interface';
import { Pagamento } from 'src/app/core/model/pagamento.interface';
import { getCurrentUser } from '../users';


@Injectable()
export class CartEffects{

    addToCart$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(addToCart),
        switchMap(action => this.httpCommunicationsService.retrievePostCall<Products>("cart", {product: action.product}).pipe(
            map(product => saveToCart({product})), 
            tap(()=> this.router.navigateByUrl("/home"))
        ))
    ));

    addToUser$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(addToUser),
        withLatestFrom(this.store.pipe(select(getCurrentUser))),
        switchMap(([action, user]) => this.updateUser(user.id, action.user).pipe(
            map(user => saveToUser({user})),
            tap(()=> this.router.navigateByUrl("/cart/terzo-step"))
        ))
    ));

    addToPagamento$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(addToPagamento),
        switchMap(action => this.httpCommunicationsService.retrievePostCall<Pagamento>("pagamento", {pagamento: action.pagamento}).pipe(
            switchMap(pagamento => [saveToPagamento({pagamento}), emptyCart()]),
            tap(()=> this.router.navigateByUrl("/cart/acquistato"))
        ))
    ));

    updateUser(id: Number, user: User){
        return this.httpCommunicationsService.retrievePatchCall<User>(`users/${id}`, {...user});
    }

    // retrieveAllProducts$: Observable<Action> = createEffect(()=>this.actions$.pipe(
    //     ofType(retrieveAllProducts),
    //     switchMap(action => this.httpCommunicationsService.retrieveGetCall<{name: string, id: number}[]>("products").pipe(
    //         map(products => initCart({ products: products.map(item => item.name) }))
    //     ))
    // ))

    constructor(private actions$: Actions, 
        private httpCommunicationsService: HttpCommunicationsService, private router: Router, private store: Store) {
    }

}
