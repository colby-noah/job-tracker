import type { Job } from './types';
import { JobCard } from './JobCard';

interface JobListProps {
  jobs: Job[];
}

export function JobList({ jobs }: JobListProps) {
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '24px',
        listStyle: 'none',
        padding: 0,
      }}
    >
      {jobs.map((job) => (
        <li key={job.id}>
          <JobCard job={job} />
        </li>
      ))}
    </ul>
  );
}
