import { ProductsState } from './products.reducers';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { Params } from '@angular/router';
import { selectRouteParams } from '../router';

export const selectProductsState = (state: AppState) => state.productState;
export const selectProducts = createSelector(
    selectProductsState,
    (state: ProductsState) => state.products
);

export const getProductById = createSelector(
    selectProductsState,
    (state: ProductsState, props: { id: number }) => state.products.find(item => item.id === props.id)
);

export const getCurrentNavigatedProduct = createSelector(
    selectProductsState,
    selectRouteParams,
    (state: ProductsState, params: Params) => state.products.find(item => item.id === Number(params['id']))
);

export const getFirstProduct = createSelector(
    selectProductsState,
    (state: ProductsState) => state.products.length > 0 ? state.products[0] : null
);