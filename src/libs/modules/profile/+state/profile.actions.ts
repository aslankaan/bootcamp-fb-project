import { createAction, props } from '@ngrx/store';
import { IProfile } from './profile.models';

export const loadProfiles = createAction(
  '[Profile] Load Profiles'
);

export const loadProfilesSuccess = createAction(
  '[Profile] Load Profiles Success'
);

export const loadProfilesFailure = createAction(
  '[Profile] Load Profiles Failure',
  props<{ error: any }>()
);

export const getProfileFromDB = createAction(
  '[Profile] Get Profile From DB'
);

export const getProfileFromDBLoaded = createAction(
  '[Profile] Get Profile From DB Loaded',
  props<{ profileInfo: IProfile }>()
);

export const saveProfileToDB = createAction(
  '[Profile] Save Profile To DB',
  props<{ profileInfo: IProfile }>()
);
