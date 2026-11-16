import { describe, expect, it } from 'vitest';

import { formatSalary } from './format';

describe('formatSalary', () => {
  it('formats a salary range', () => {
    expect(formatSalary(100_000, 150_000)).toBe('$100,000 – $150,000');
  });

  it('formats a minimum salary only', () => {
    expect(formatSalary(95_000, undefined)).toBe('From $95,000');
  });

  it('formats a maximum salary only', () => {
    expect(formatSalary(undefined, 125_000)).toBe('Up to $125,000');
  });

  it('returns an empty string when neither is given', () => {
    expect(formatSalary(undefined, undefined)).toBe('');
  });
});
