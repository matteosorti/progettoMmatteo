import { Action, createReducer, on } from '@ngrx/store';
import { Products } from '../../core/model/products.interface';
import { initProducts, insertProducts, removeProducts, editProducts } from './products.actions';

export interface ProductsState {
    products: Products[];
    
}

export const initialState: ProductsState = {
    products: []
};

const productsReducerFun = createReducer(
    initialState,
    on(initProducts, (state, { products }) => ({ ...state, products: products })),
    on(insertProducts, (state, { products }) => ({ ...state, products: [...state.products, products] })),
    on(removeProducts, (state, { id }) => ({ ...state, products: state.products.filter(item => item.id !== id) })),
    on(editProducts, (state, { products }) => ({ ...state, products: state.products.map(item => item.id === products.id ? products : item) }))
);

export function productsReducer(state: ProductsState | undefined, action: Action) {
    return productsReducerFun(state, action);
}