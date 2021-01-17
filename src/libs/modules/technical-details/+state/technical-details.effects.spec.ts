import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TechnicalDetailsEffects } from './technical-details.effects';

describe('TechnicalDetailsEffects', () => {
  let actions$: Observable<any>;
  let effects: TechnicalDetailsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TechnicalDetailsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TechnicalDetailsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
