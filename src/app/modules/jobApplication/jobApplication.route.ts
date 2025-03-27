import express from 'express';
import { JobApplicationControllers } from './jobApplication.controller';

const router = express.Router();

//create a job application route
router.post(
  '/createJobApplication',
  JobApplicationControllers.createJobApplication,
);
// --------------------------------------

// get all jobs route
//--------------------------------

// get single UserApplication with email query route
router.get(
  '/UserJobApplication',
  JobApplicationControllers.getSingleUserJobApplication,
);
//--------------------------------

// get job application by job id
router.get('/jobs/:job_id', JobApplicationControllers.getJobApplicationByJobId);

//--------------------------------

export const JobApplicationRoutes = router;
