import { UsersState, usersReducer } from './users/users.reducers';
import { ProductsState, productsReducer } from './products/products.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { CartEffects } from './cart/cart.effects';
import { CartState, cartReducer } from './cart/cart.reducers';

export interface AppState {
    todoState: ProductsState;
    usersState: UsersState;
    router: RouterReducerState<any>;
    cartState: CartState;
}

export const reducers: ActionReducerMap<AppState> = {
    todoState: productsReducer,
    usersState: usersReducer,
    router: routerReducer,
    cartState: cartReducer
};
export const effects: any[] = [CartEffects]
