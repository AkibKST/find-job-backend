import express from 'express';
import { JobApplicationControllers } from './jobApplication.controller';
import verifyToken from '../../middlewares/verifyToken';

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
  verifyToken,
  JobApplicationControllers.getSingleUserJobApplication,
);
//--------------------------------

// get job application by job id
router.get('/jobs/:job_id', JobApplicationControllers.getJobApplicationByJobId);
//--------------------------------

//update job application status by application id
router.patch('/app/:id', JobApplicationControllers.updateStatus);
//--------------------------------

export const JobApplicationRoutes = router;
