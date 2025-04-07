import AppError from '../../errors/AppError';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { JobApplicationServices } from './jobApplication.service';

//create job application
const createJobApplication = catchAsync(async (req, res) => {
  const applicationData = req.body;
  const result =
    await JobApplicationServices.createJobApplication(applicationData);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Job Application created successfully',
    data: result,
  });
});
//---------------------------------------------

//get single user job application by email query
const getSingleUserJobApplication = catchAsync(async (req, res) => {
  const email = req.query.email;

  // console.log(email);
  // console.log(req.user.email.email);

  if (req?.user?.email.email !== email) {
    throw new AppError(403, 'You are not authorized to access this resource!');
  }
  const result = await JobApplicationServices.getSingleUserApplication(
    email as string,
  );
  // console.log(req.cookies);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Get Single User Job Application successfully',
    data: result,
  });
});
//---------------------------------------------

//update job application status by application id
const updateStatus = catchAsync(async (req, res) => {
  const id = req.params.id;
  const data = req.body.status;
  const result = await JobApplicationServices.updateStatus(data, id);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'update User Job Application status successfully',
    data: result,
  });
});
//---------------------------------------------

// get job application by job_id
const getJobApplicationByJobId = catchAsync(async (req, res) => {
  const jobId = req.params.job_id;
  const result = await JobApplicationServices.getJobApplicationByJobId(jobId);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Get Job Application by Job id successfully',
    data: result,
  });
});
//---------------------------------------------

export const JobApplicationControllers = {
  createJobApplication,
  getSingleUserJobApplication,
  getJobApplicationByJobId,
  updateStatus,
};
