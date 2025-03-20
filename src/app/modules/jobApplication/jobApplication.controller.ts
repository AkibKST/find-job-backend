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
  const result = await JobApplicationServices.getSingleUserApplication(
    email as string,
  );

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Get Single User Job Application successfully',
    data: result,
  });
});
//---------------------------------------------

export const JobApplicationControllers = {
  createJobApplication,
  getSingleUserJobApplication,
};
