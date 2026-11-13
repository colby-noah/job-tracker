import type { ReactNode } from 'react';
import type { Job } from './types';

interface JobCardProps {
  job: Job;
}

interface DetailRowProps {
  label: string;
  children: ReactNode;
}

function DetailRow({ label, children }: DetailRowProps) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <dt>{label}:</dt>
      <dd style={{ margin: 0 }}>{children}</dd>
    </div>
  );
}

export function JobCard({ job }: JobCardProps) {
  return (
    <article
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: 'solid 1px black',
        padding: '16px',
      }}
    >
      <header
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'baseline',
          gap: '16px',
        }}
      >
        <h3>{job.title}</h3>
        <p>{job.companyName}</p>
      </header>
      <dl
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        <DetailRow label="Work model">{job.workModel}</DetailRow>
        {job.experienceLevel != null && (
          <DetailRow label="Experience level">{job.experienceLevel}</DetailRow>
        )}
        {job.location != null && (
          <DetailRow label="Location">{job.location}</DetailRow>
        )}
        {job.appliedAt != null && (
          <DetailRow label="Applied date">{job.appliedAt}</DetailRow>
        )}
        {job.postingUrl != null && (
          <DetailRow label="Posting">
            <a target="_blank" rel="noreferrer" href={job.postingUrl}>
              View posting
            </a>
          </DetailRow>
        )}
      </dl>
    </article>
  );
}
