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
  const result = await JobApplication.find(query).populate({
    path: 'job_id',
    select: 'title company location company_logo', // Select only the necessary fields
  });

  //   for (const application of result) {
  //     const query1 = { _id: application.job_id };
  //     const job = await Jobs.findOne(query1).select('title company company_logo');
  //     // console.log(job);
  //     //   if (job) {
  //     //     application.title = job.title;
  //     //     application.company = job.company;
  //     //     application.company_logo = job.company_logo;
  //     //   }
  //   }
  return result;
};
//---------------------------

// get job application by job_id
const getJobApplicationByJobId = async (jobId: string) => {
  const query = { job_id: jobId };
  const result = await JobApplication.find(query);
  return result;
};
//---------------------------

export const JobApplicationServices = {
  createJobApplication,
  getSingleUserApplication,
  getJobApplicationByJobId,
};
