import { Card, CardContent, Link, Stack, Typography } from '@mui/material';
import type { ReactNode } from 'react';

import { formatSalary } from './format';
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
    <Stack direction="row" spacing={1} useFlexGap>
      <Typography component="dt" variant="body2" color="textSecondary">
        {label}:
      </Typography>
      <Typography component="dd" variant="body2">
        {children}
      </Typography>
    </Stack>
  );
}

export function JobCard({ job }: JobCardProps) {
  const salary = formatSalary(job.salaryMin, job.salaryMax);

  return (
    <Card component="article" variant="outlined">
      <CardContent>
        <Stack spacing={1} useFlexGap>
          <Stack
            component="header"
            direction="row"
            spacing={2}
            sx={{ alignItems: 'baseline' }}
            useFlexGap
          >
            <Typography variant="h6" component="h3">
              {job.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {job.companyName}
            </Typography>
          </Stack>
          <Stack component="dl" spacing={1} useFlexGap>
            <DetailRow label="Work model">{job.workModel}</DetailRow>
            {salary !== '' && <DetailRow label="Salary">{salary}</DetailRow>}
            {job.experienceLevel != null && (
              <DetailRow label="Experience level">
                {job.experienceLevel}
              </DetailRow>
            )}
            {job.location != null && (
              <DetailRow label="Location">{job.location}</DetailRow>
            )}
            {job.appliedAt != null && (
              <DetailRow label="Applied date">{job.appliedAt}</DetailRow>
            )}
            {job.postingUrl != null && (
              <DetailRow label="Posting">
                <Link target="_blank" rel="noreferrer" href={job.postingUrl}>
                  View posting
                </Link>
              </DetailRow>
            )}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
