import { createAction, props } from '@ngrx/store';
import { IPostInfo } from './technical-details.models';

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

export const savePostInfo = createAction(
  '[TechnicalDetails] saveProfileInfo',
  props<{ postInfo: IPostInfo }>()
);

