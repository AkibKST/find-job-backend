import express from 'express';
import { JobApplicationControllers } from './jobApplication.controller';

const router = express.Router();

//create a job application route
router.post(
  '/createJobApplication',
  JobApplicationControllers.createJobApplication,
);
// --------------------------------------

// create get all jobs route
//--------------------------------

// create get single job with _id route

//--------------------------------

// // create update profile

//--------------------------------

export const JobApplicationRoutes = router;
