import { formatDate } from '.';

describe('formatDate()', () => {
  it('should format iso date', () => {
    expect(formatDate('2022-04-20T18:00:00.000Z')).toMatch('20/04/2022');
  });
});
