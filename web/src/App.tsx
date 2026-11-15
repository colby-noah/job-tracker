import { Container, Typography } from '@mui/material';
import { useState } from 'react';

import { AddJobForm } from './AddJobForm';
import { JobList } from './JobList';
import { sampleJobs } from './sampleJobs';

export function App() {
  const [jobs, setJobs] = useState(sampleJobs);

  return (
    <Container component="main" sx={{ py: 3 }}>
      <Typography component="h1" variant="h4" gutterBottom>
        Job Tracker
      </Typography>
      <section>
        <Typography component="h2" variant="h5" gutterBottom>
          Saved Jobs
        </Typography>
        <JobList jobs={jobs} />
      </section>
      <section>
        <Typography component="h2" variant="h5" gutterBottom>
          Add Job
        </Typography>
        <AddJobForm />
      </section>
    </Container>
  );
}
