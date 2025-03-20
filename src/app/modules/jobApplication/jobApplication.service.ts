import { TJobApplication } from './jobApplication.interface';
import { JobApplication } from './jobApplication.model';

//create job application
const createJobApplication = async (applicationData: TJobApplication) => {
  const result = await JobApplication.create(applicationData);
  return result;
};
//---------------------------

export const JobApplicationServices = {
  createJobApplication,
};
