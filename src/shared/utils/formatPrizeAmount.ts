const formatter = new Intl.NumberFormat('en-US');

export default function formatPrizeAmount(amount: number): string {
  return `$${formatter.format(amount)}`;
}
