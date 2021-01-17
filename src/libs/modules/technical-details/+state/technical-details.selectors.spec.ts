import * as fromTechnicalDetails from './technical-details.reducer';
import { selectTechnicalDetailsState } from './technical-details.selectors';

describe('TechnicalDetails Selectors', () => {
  it('should select the feature state', () => {
    const result = selectTechnicalDetailsState({
      [fromTechnicalDetails.technicalDetailsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
