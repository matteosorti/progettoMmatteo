import { createAction, props } from '@ngrx/store';

export const goToProductsHome = createAction('[Products - Navigation] todos home');
export const goToDetail = createAction('[Products - Navigation] detail', props<{id: number}>());
export const goToEdit = createAction('[Products - Navigation] edit', props<{id: number}>());