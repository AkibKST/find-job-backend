import express from 'express';
import { JobControllers } from './job.controller';
import logger from '../../middlewares/logger';

const router = express.Router();

//will call controller func
// create user route
router.post('/createJob', JobControllers.createJob);
//--------------------------------

// create get all jobs route
router.get('/getAllJobs', logger, JobControllers.getAllJob);
//--------------------------------

// create get single job with _id route
router.get('/getSingleJob/:id', JobControllers.getSingleJob);

//--------------------------------

// // create update profile

//--------------------------------

export const jobRoutes = router;
