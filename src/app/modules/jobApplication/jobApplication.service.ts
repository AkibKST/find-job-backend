import { TJobApplication } from './jobApplication.interface';
import { JobApplication } from './jobApplication.model';

//create job application
const createJobApplication = async (applicationData: TJobApplication) => {
  const result = await JobApplication.create(applicationData);
  return result;
};
//---------------------------

//get Single User job application
const getSingleUserApplication = async (email: string) => {
  const query = { applicant_email: email };
  const result = await JobApplication.find(query);
  return result;
};
//---------------------------

export const JobApplicationServices = {
  createJobApplication,
  getSingleUserApplication,
};
