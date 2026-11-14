import { Container, Typography } from '@mui/material';

import { JobList } from './JobList';
import { sampleJobs } from './sampleJobs';

export function App() {
  return (
    <Container component="main" sx={{ py: 3 }}>
      <Typography component="h1" variant="h4" gutterBottom>
        Job Tracker
      </Typography>
      <section>
        <Typography component="h2" variant="h5" gutterBottom>
          Saved Jobs
        </Typography>
        <JobList jobs={sampleJobs} />
      </section>
    </Container>
  );
}
