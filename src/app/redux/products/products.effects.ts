import { getCurrentUser } from 'src/app/redux/users';
// import { goToProductsHome } from './../../features/products/redux/products-navigation.actions';
import { HttpCommunicationsService } from '../../core/http-communications/http-communications.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { retrieveAllProducts, initProducts, updateProducts, editProducts, postProducts, insertProducts } from './products.actions';
import { switchMap, map, concatMap, withLatestFrom } from 'rxjs/operators';
import { Products } from 'src/app/core/model/products.interface';
import { goToDetail } from 'src/app/features/products/redux/products-navigation.actions';
import { Action, select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { goToProductsHome } from 'src/app/features/products/redux/products-navigation.actions';

@Injectable()
export class ProductsEffects {

    retrieveAllProducts$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllProducts),
        switchMap(() => this.httpCommunicationsService.retrieveGetCall<Products[]>("products").pipe(
            map(products => initProducts({ products }))
        ))
    ));

    updateProducts$ = createEffect(() => this.actions$.pipe(
        ofType(updateProducts),
        switchMap(action => this.httpCommunicationsService.retrievePutCall<Products>("products/" + action.products.id, action.products).pipe(
            switchMap(products => [editProducts({ products }), goToDetail({ id: products.id })])
        ))
    ));

    insertProducts$ = createEffect(() => this.actions$.pipe(
        ofType(postProducts),
        withLatestFrom(this.store.pipe(select(getCurrentUser))),
        map(([action, user]) => ({
            ...action.products,
            users: [user.username]
        })),
        switchMap(products => this.httpCommunicationsService.retrievePostCall<Products>("products", products).pipe(
            switchMap(products => [insertProducts({ products }), goToProductsHome()])
        ))
    ))


    constructor(private actions$: Actions, private store: Store,
        private httpCommunicationsService: HttpCommunicationsService) {
    }
}