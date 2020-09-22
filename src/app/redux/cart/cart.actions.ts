import { createAction, props } from '@ngrx/store';
import { Pagamento } from 'src/app/core/model/pagamento.interface';
import { Products } from 'src/app/core/model/products.interface';
import { User } from 'src/app/core/model/user.interface';

export const retrieveAllProducts = createAction('[Cart] retrieve all products');
export const initCart = createAction('[Cart] init', props<{products: Products[]}>());
export const addToCart = createAction('[Cart] add', props<{product: Products}>());
export const saveToCart = createAction('[Cart] save', props<{product: Products}>());

export const addToUser = createAction('[User] add', props<{user: User}>());
export const saveToUser = createAction('[User] save', props<{user: User}>());
export const initUser = createAction('[User] init', props<{user: User[]}>());

export const addToPagamento = createAction('[Pagamento] add', props<{pagamento: Pagamento}>());
export const saveToPagamento = createAction('[Pagamento] save', props<{pagamento: Pagamento}>());
export const emptyCart = createAction('[Cart] empty');