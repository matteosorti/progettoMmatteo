import { createAction, props } from '@ngrx/store';
import { Products } from '../../core/model/products.interface';

export const initProducts = createAction('[Products] init', props<{products: Products[]}>());
export const insertProducts = createAction('[Products] insert', props<{products: Products}>());
export const removeProducts = createAction('[Products] remove', props<{id: number}>());
export const editProducts = createAction('[Products] edit', props<{products: Products}>());
export const retrieveAllProducts =  createAction('[Products] retrieve all');
export const updateProducts = createAction('[Products] update', props<{products: Products}>());
export const postProducts = createAction('[Products] add to server', props<{products: Products}>());
