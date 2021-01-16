import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProfile from './profile.reducer';

export const selectProfileState = createFeatureSelector<fromProfile.ProfileState>(
  fromProfile.profileFeatureKey
);

export const selectProfileInfo = createSelector(
  selectProfileState,
  (profileState) => {
    return profileState.profileInfo;
  }
);
