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

// // create update profile

//--------------------------------

export const JobApplicationRoutes = router;
