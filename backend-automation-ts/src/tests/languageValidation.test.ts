import { getAllCountries } from '../utils/apiClient';

describe('Scenario 3: Validate South African Sign Language (SASL)', () => {
  it('should confirm SASL is listed under South Africa languages', async () => {
    const data = await getAllCountries();
    const southAfrica = data.find((country: any) => country.cca2 === 'ZA');
    expect(southAfrica).toBeDefined();
    const languages = Object.values(southAfrica.languages || {});
    console.log('South Africa Languages:', languages);
    expect(languages).toContain('South African Sign Language');
  });
});
