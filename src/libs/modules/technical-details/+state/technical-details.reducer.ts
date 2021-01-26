import { Action, createReducer, on } from '@ngrx/store';
import * as TechnicalDetailsActions from './technical-details.actions';
import { IPostInfo } from './technical-details.models';

export const technicalDetailsFeatureKey = 'technicalDetails';

export interface State {
  postInfo?: IPostInfo[]
}

export const initialState: State = {
};

export const reducer = createReducer(
  initialState,

  on(TechnicalDetailsActions.loadTechnicalDetailss, state => state),
  on(TechnicalDetailsActions.loadTechnicalDetailssSuccess, (state, action) => state),
  on(TechnicalDetailsActions.loadTechnicalDetailssFailure, (state, action) => state),

  on(TechnicalDetailsActions.savePostInfo, (state, action) => {
    return {
      ...state,
      postInfo: state.postInfo ? [...state.postInfo, action.postInfo] : [action.postInfo]
    }
  }),

);

