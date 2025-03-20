import { z } from 'zod';

// Define the Zod schema for TJobApplication
const JobApplicationSchema = z.object({
  job_id: z.string().min(1, { message: 'Job ID is required' }), // Assuming job_id is a string representation of ObjectId
  applicant_email: z.string().email({ message: 'Invalid email address' }),
  linkedIn: z.string().url({ message: 'Invalid LinkedIn URL' }),
  github: z.string().url({ message: 'Invalid GitHub URL' }),
  resume: z.string().min(1, { message: 'Resume is required' }),
});

// Export the Zod schema
export const jobApplicationValidation = {
  JobApplicationSchema,
};
