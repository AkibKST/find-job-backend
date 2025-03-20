// job Services

import { TJobPosting } from './job.interface';
import { Jobs } from './job.model';

// create job
const createJob = async (userData: TJobPosting) => {
  const result = await Jobs.create(userData);
  return result;
};
// -------------------------------

// get all jobs service
const getAllJobs = async () => {
  const result = await Jobs.find();
  return result;
  // if password is not given, use default password

  // set user role

  // set generated id
};
//---------------------------------------------

// get single job by id
const getSingleJob = async (id: string) => {
  const result = await Jobs.findById(id);
  return result;
};
//---------------------------------------------

// update user profile

//---------------------------------------------

export const JobServices = {
  getAllJobs,
  createJob,
  getSingleJob,
};
