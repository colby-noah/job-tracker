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

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    const newJob: Job = {
      id: Date.now(),
      title,
      companyName: company,
      workModel: 'remote', // Placeholder
    };

    onAdd(newJob);

    setTitle('');
    setCompany('');
  };

  return (
    <Stack component="form" onSubmit={handleSubmit} spacing={3} useFlexGap>
      <TextField
        id="title"
        value={title}
        label="Title"
        variant="outlined"
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        id="company"
        value={company}
        label="Company"
        variant="outlined"
        onChange={(e) => setCompany(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Stack>
  );
}
