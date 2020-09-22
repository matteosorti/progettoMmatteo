import { ProductsFacadeService } from '../services/products-facade.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { goToDetail, goToProductsHome } from './products-navigation.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class ProductsNavigationEffects {
    
    goToDetail$ = createEffect(() => this.actions$.pipe(
        ofType(goToDetail),
        tap(action => {
            this.todosFacadeService.goToDetail(action.id);
        })
    ), { dispatch: false });

    goToProductsHome$ = createEffect(() => this.actions$.pipe(
        ofType(goToProductsHome),
        tap(() => {
            this.todosFacadeService.goToProductsHome();
        })
    ), { dispatch: false });

    constructor(private actions$: Actions,
        private todosFacadeService: ProductsFacadeService) {
    }
}