import { sampleJobs } from './sampleJobs';
import { JobCard } from './JobCard';

export function App() {
  return (
    <main>
      <h1>Job Tracker</h1>
      <section>
        <h2>Saved Jobs</h2>
        <ul>
          {sampleJobs.map((job) => (
            <li key={job.id}>
              <JobCard job={job} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
