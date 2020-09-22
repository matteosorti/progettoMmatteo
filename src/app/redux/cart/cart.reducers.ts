import { Action, createReducer, on } from '@ngrx/store';
import { Products } from 'src/app/core/model/products.interface';
import { User } from 'src/app/core/model/user.interface';
import { UsersState } from '../users/users.reducers';
import { saveToCart, initCart, saveToUser, initUser, emptyCart } from './cart.actions';

export interface CartState {
    products: Products[];
}


export const initialState: CartState = {
    products: []
};


const cartReducerFun = createReducer(
    initialState,
    on(saveToCart, (state, { product }) => ({ ...state, products: [...state.products, product] })),
    on(initCart, (state, { products }) => ({ ...state, products: products })),
    on(emptyCart, (state)=>({...state, products: []}))
);





export function cartReducer(state: CartState | undefined, action: Action) {
    return cartReducerFun(state, action);
}