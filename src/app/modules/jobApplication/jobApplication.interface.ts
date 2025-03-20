import { ObjectId } from 'mongoose';

export type TJobApplication = {
  job_id: ObjectId;
  applicant_email: string;
  linkedIn: string;
  github: string;
  resume: string;
};
