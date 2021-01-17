import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as TechnicalDetailsActions from './technical-details.actions';



@Injectable()
export class TechnicalDetailsEffects {

  loadTechnicalDetailss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(TechnicalDetailsActions.loadTechnicalDetailss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => TechnicalDetailsActions.loadTechnicalDetailssSuccess({ data })),
          catchError(error => of(TechnicalDetailsActions.loadTechnicalDetailssFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
