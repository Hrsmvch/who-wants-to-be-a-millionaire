import formatPrizeAmount from '../formatPrizeAmount.ts';

it('should format prize amount correctly', () => {
  expect(formatPrizeAmount(0)).toBe('$0');
  expect(formatPrizeAmount(500)).toBe('$500');
  expect(formatPrizeAmount(15000)).toBe('$15,000');
  expect(formatPrizeAmount(1000000)).toBe('$1,000,000');
});
