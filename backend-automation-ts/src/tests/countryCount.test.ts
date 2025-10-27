import { getAllCountries } from '../utils/apiClient';

describe('Scenario 2: Country Count Validation', () => {
  it('should confirm there are 195 countries in the world', async () => {
    const data = await getAllCountries();
    console.log('Total countries returned:', data.length);
    expect(data.length).toBe(195);
  });
});
