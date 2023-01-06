import { regex } from '../regex/regex';
import { uuid } from './uuid';

describe('uuid', () => {
  it('should be uuid format', () => {
    const id = uuid();
    expect(id).toMatch(regex.uuid);
  });
});
