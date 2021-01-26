import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTechnicalDetails from './technical-details.reducer';

export const selectTechnicalDetailsState = createFeatureSelector<fromTechnicalDetails.State>(
  fromTechnicalDetails.technicalDetailsFeatureKey
);


export const selectPostInfo = createSelector(
  selectTechnicalDetailsState,
  (detailsState) => {
    return detailsState.postInfo;
  }
);
