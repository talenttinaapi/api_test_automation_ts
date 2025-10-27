import { getAllCountries } from '../utils/apiClient';
import schema from '../../schema.json';
import Ajv from 'ajv';

const ajv = new Ajv();

describe('Scenario 1: Schema Validation', () => {
  it('should match the expected JSON schema', async () => {
    const data = await getAllCountries();
    const validate = ajv.compile(schema);
    const valid = validate(data);
    expect(valid).toBe(true);
    if (!valid && validate.errors) {
      console.error('Schema validation errors:', validate.errors);
    }
  });
});
