import { JobList } from './JobList';
import { sampleJobs } from './sampleJobs';

export function App() {
  return (
    <main>
      <h1>Job Tracker</h1>
      <section>
        <h2>Saved Jobs</h2>
        <JobList jobs={sampleJobs}></JobList>
      </section>
    </main>
  );
}
