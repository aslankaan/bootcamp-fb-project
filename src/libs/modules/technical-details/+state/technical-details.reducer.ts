import { Action, createReducer, on } from '@ngrx/store';
import * as TechnicalDetailsActions from './technical-details.actions';

export const technicalDetailsFeatureKey = 'technicalDetails';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(TechnicalDetailsActions.loadTechnicalDetailss, state => state),
  on(TechnicalDetailsActions.loadTechnicalDetailssSuccess, (state, action) => state),
  on(TechnicalDetailsActions.loadTechnicalDetailssFailure, (state, action) => state),

);

