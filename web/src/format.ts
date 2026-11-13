const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export function formatSalary(min?: number, max?: number): string {
  if (min != null && max != null) {
    return `${usdFormatter.format(min)} – ${usdFormatter.format(max)}`;
  }

  if (min != null) {
    return `From ${usdFormatter.format(min)}`;
  }

  if (max != null) {
    return `Up to ${usdFormatter.format(max)}`;
  }

  return '';
}
