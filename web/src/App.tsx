import { sampleJobs } from './sampleJobs';

function App() {
  return (
    <main>
      <h1>Job Tracker</h1>
      <section>
        <h2>Saved Jobs</h2>
        <ul>
          {sampleJobs.map((job) => (
            <li key={job.id}>{job.companyName}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
