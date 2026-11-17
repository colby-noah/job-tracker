import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { AddJobForm } from './AddJobForm';

function setup() {
  const user = userEvent.setup();
  const onAdd = vi.fn();

  render(<AddJobForm onAdd={onAdd} />);

  return { user, onAdd };
}

describe('AddJobForm', () => {
  it('calls onAdd with the entered values and clears the form', async () => {
    const { user, onAdd } = setup();

    const title = 'Junior Netrunner';
    const company = 'Arasaka Corporation';

    await user.type(screen.getByLabelText(/title/i), title);
    await user.type(screen.getByLabelText(/company/i), company);
    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(onAdd).toHaveBeenCalledWith(
      expect.objectContaining({ title, companyName: company }),
    );

    expect(screen.getByLabelText(/title/i)).toHaveValue('');
    expect(screen.getByLabelText(/company/i)).toHaveValue('');
  });

  it('shows errors and does not call onAdd when fields are empty', async () => {
    const { user, onAdd } = setup();

    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText('Title is required.')).toBeInTheDocument();
    expect(screen.getByText('Company is required.')).toBeInTheDocument();
    expect(onAdd).not.toHaveBeenCalled();
  });

  it('treats whitespace-only input as empty', async () => {
    const { user, onAdd } = setup();

    await user.type(screen.getByLabelText(/title/i), '    ');
    await user.type(screen.getByLabelText(/company/i), '    ');
    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText('Title is required.')).toBeInTheDocument();
    expect(screen.getByText('Company is required.')).toBeInTheDocument();
    expect(onAdd).not.toHaveBeenCalled();
  });
});
