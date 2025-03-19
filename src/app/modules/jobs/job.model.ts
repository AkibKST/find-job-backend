import { Schema, model } from 'mongoose';
import { TJobPosting } from './job.interface';

const JobPostingSchema = new Schema<TJobPosting>({
  title: { type: String, required: true },
  location: { type: String, required: true },
  jobType: { type: String, required: true },
  category: { type: String, required: true },
  applicationDeadline: { type: String, required: true },
  salaryRange: {
    min: { type: Number, required: true },
    max: { type: Number, required: true },
    currency: { type: String, required: true },
  },
  description: { type: String, required: true },
  company: { type: String, required: true },
  requirements: { type: [String], required: true },
  responsibilities: { type: [String], required: true },
  status: { type: String, required: true },
  hr_email: { type: String, required: true },
  hr_name: { type: String, required: true },
  company_logo: { type: String, required: true },
});

export const Jobs = model<TJobPosting>('jobs', JobPostingSchema);
