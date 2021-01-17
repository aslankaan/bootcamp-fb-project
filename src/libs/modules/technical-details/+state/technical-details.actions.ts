import { createAction, props } from '@ngrx/store';

export const loadTechnicalDetailss = createAction(
  '[TechnicalDetails] Load TechnicalDetailss'
);

export const loadTechnicalDetailssSuccess = createAction(
  '[TechnicalDetails] Load TechnicalDetailss Success',
  props<{ data: any }>()
);

export const loadTechnicalDetailssFailure = createAction(
  '[TechnicalDetails] Load TechnicalDetailss Failure',
  props<{ error: any }>()
);
