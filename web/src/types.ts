export type WorkModel = 'onsite' | 'hybrid' | 'remote';
export type ExperienceLevel = 'entry' | 'mid' | 'senior';

export interface Job {
  id: number;
  companyName: string;
  title: string;
  workModel: WorkModel;
  experienceLevel?: ExperienceLevel;
  location?: string;
  postingUrl?: string;
  salaryMin?: number;
  salaryMax?: number;
  postedAt?: string; // YYYY-MM-DD
  appliedAt?: string; // YYYY-MM-DD
}
