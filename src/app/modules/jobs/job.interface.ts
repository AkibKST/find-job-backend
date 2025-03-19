export type UserRole = 'admin' | 'user';

export interface SalaryRange {
  min: number;
  max: number;
  currency: string;
}

export type TJobPosting = {
  title: string;
  location: string;
  jobType: string;
  category: string;
  applicationDeadline: string; // ISO date format (e.g., "2024-12-31")
  salaryRange: SalaryRange;
  description: string;
  company: string;
  requirements: string[];
  responsibilities: string[];
  status: string;
  hr_email: string;
  hr_name: string;
  company_logo: string;
};
