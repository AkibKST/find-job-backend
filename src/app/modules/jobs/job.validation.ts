import { z } from 'zod';

const SalaryRangeSchema = z.object({
  min: z.number().positive(),
  max: z.number().positive(),
  currency: z.string().min(3).max(3), // Assuming currency is a 3-letter code (e.g., "bdt")
});

const JobPortalSchema = z.object({
  title: z.string().min(1),
  location: z.string().min(1),
  jobType: z.string().min(1),
  category: z.string().min(1),
  applicationDeadline: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // ISO date format
  salaryRange: SalaryRangeSchema,
  description: z.string().min(1),
  company: z.string().min(1),
  requirements: z.array(z.string().min(1)),
  responsibilities: z.array(z.string().min(1)),
  status: z.string().min(1),
  hr_email: z.string().email(),
  hr_name: z.string().min(1),
  company_logo: z.string().url(),
});

export const JobValidation = { JobPortalSchema };
