import * as fromTechnicalDetails from './technical-details.actions';

describe('loadTechnicalDetailss', () => {
  it('should return an action', () => {
    expect(fromTechnicalDetails.loadTechnicalDetailss().type).toBe('[TechnicalDetails] Load TechnicalDetailss');
  });
});
