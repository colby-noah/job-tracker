import { Stack } from '@mui/material';

import { JobCard } from './JobCard';
import type { Job } from './types';

interface JobListProps {
  jobs: Job[];
}

export function JobList({ jobs }: JobListProps) {
  return (
    <Stack
      component="ul"
      direction="row"
      spacing={3}
      useFlexGap
      sx={{ flexWrap: 'wrap', listStyle: 'none', p: 0 }}
    >
      {jobs.map((job) => (
        <li key={job.id}>
          <JobCard job={job} />
        </li>
      ))}
    </Stack>
  );
}
