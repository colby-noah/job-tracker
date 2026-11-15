import { Button, Stack, TextField } from '@mui/material';
import type { SubmitEvent } from 'react';
import { useState } from 'react';

export function AddJobForm() {
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
  };

  return (
    <Stack component="form" onSubmit={handleSubmit} spacing={3} useFlexGap>
      <TextField
        id="company"
        value={company}
        label="Company"
        variant="outlined"
        onChange={(e) => setCompany(e.target.value)}
      />
      <TextField
        id="title"
        value={title}
        label="Title"
        variant="outlined"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Stack>
  );
}
