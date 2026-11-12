import type { Job } from './types';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <article>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'baseline',
          gap: '8px',
        }}
      >
        <h3>{job.companyName}</h3>
        <p>({job.title})</p>
      </div>
    </article>
  );
}
