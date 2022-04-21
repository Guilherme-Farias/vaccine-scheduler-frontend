import { formatDateWithHours } from '.';

describe('formatDateWithHours()', () => {
  it('should format iso date', () => {
    expect(formatDateWithHours('2022-04-20T18:00:00.000Z')).toMatch(
      '20/04/2022 15:00',
    );
  });
});
