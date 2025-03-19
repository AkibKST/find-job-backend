import express from 'express';
import { JobControllers } from './job.controller';

const router = express.Router();

//will call controller func
// create user route
router.post('/createJob', JobControllers.createJob);
router.get('/getAllJobs', JobControllers.getAllJob);
//--------------------------------

// create get profile

//--------------------------------

// // create update profile

//--------------------------------

export const jobRoutes = router;
