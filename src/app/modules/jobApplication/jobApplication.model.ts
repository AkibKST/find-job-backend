import { Schema, model } from 'mongoose';
import { TJobApplication } from './jobApplication.interface';

const JobApplicationSchema = new Schema<TJobApplication>({
  job_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'jobs',
  },
  applicant_email: {
    type: String,
    required: true,
  },
  linkedIn: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'Under Review',
  },
});

export const JobApplication = model<TJobApplication>(
  'jobApplication',
  JobApplicationSchema,
);
