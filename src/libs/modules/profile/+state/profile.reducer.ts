import { Action, createReducer, on } from '@ngrx/store';
import * as ProfileActions from './profile.actions';
import { IProfile } from './profile.models';

export const profileFeatureKey = 'profile';

export interface ProfileState {
  profileInfo?: IProfile;
}

export const initialState: ProfileState = {

};


export const reducer = createReducer(
  initialState,

  on(ProfileActions.loadProfiles, state => state),
  on(ProfileActions.loadProfilesSuccess, (state, action) => state),
  on(ProfileActions.loadProfilesFailure, (state, action) => state),

  on(ProfileActions.getProfileFromDBLoaded, (state, action) => {
    return {
      ...state,
      profileInfo: action.profileInfo
    }
  }),
);

