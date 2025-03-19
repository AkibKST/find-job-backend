// job Services

import { TJobPosting } from './job.interface';
import { Jobs } from './job.model';

// create job
const createJob = async (userData: TJobPosting) => {
  const result = await Jobs.create(userData);
  return result;
};
// -------------------------------

// ekta user made korlam
const getAllJobs = async () => {
  const result = await Jobs.find();
  return result;
  // if password is not given, use default password

  // set user role

  // set generated id
};
//---------------------------------------------

// get user profile

//---------------------------------------------

// update user profile

//---------------------------------------------

export const JobServices = {
  getAllJobs,
  createJob,
};
