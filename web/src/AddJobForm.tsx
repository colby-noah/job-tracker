import { Button, Stack, TextField } from '@mui/material';
import type { SubmitEvent } from 'react';
import { useState } from 'react';

import type { Job } from './types';

interface AddJobFormProps {
  onAdd: (job: Job) => void;
}

export function AddJobForm({ onAdd }: AddJobFormProps) {
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [showErrors, setShowErrors] = useState(false);

  const companyMissing = company.trim() === '';
  const titleMissing = title.trim() === '';

  const canSubmit = !companyMissing && !titleMissing;

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    if (!canSubmit) {
      setShowErrors(true);
      return;
    }

    const newJob: Job = {
      id: Date.now(),
      title: title.trim(),
      companyName: company.trim(),
      workModel: 'remote', // Placeholder
    };

    onAdd(newJob);

    setShowErrors(false);

    setTitle('');
    setCompany('');
  };

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      spacing={3}
      useFlexGap
      noValidate
    >
      <TextField
        id="title"
        value={title}
        label="Title"
        variant="outlined"
        required
        error={showErrors && titleMissing}
        helperText={showErrors && titleMissing && 'Title is required.'}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        id="company"
        value={company}
        label="Company"
        variant="outlined"
        required
        error={showErrors && companyMissing}
        helperText={showErrors && companyMissing && 'Company is required.'}
        onChange={(e) => setCompany(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Stack>
  );
}
