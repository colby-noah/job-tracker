import { Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { AddJobForm } from './AddJobForm';
import { JobList } from './JobList';
import { sampleJobs } from './sampleJobs';
import type { Job } from './types';

export function App() {
  const [jobs, setJobs] = useState<Job[]>(() => {
    try {
      const savedJobs = localStorage.getItem('jobs');

      return savedJobs !== null ? (JSON.parse(savedJobs) as Job[]) : sampleJobs;
    } catch {
      return sampleJobs;
    }
  });

  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  const handleAdd = (job: Job) => setJobs([...jobs, job]);

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
        <AddJobForm onAdd={handleAdd} />
      </section>
    </Container>
  );
}
