import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { JobServices } from './job.service';

//create user
const createJob = catchAsync(async (req, res) => {
  const result = await JobServices.createJob(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Job created successfully',
    data: result,
  });
});
//---------------------------------------------

// get all job
const getAllJob = catchAsync(async (req, res) => {
  //   const { password, user: userData } = req.body // name alias

  // will call service func to send this data
  const result = await JobServices.getAllJobs();

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Get All Jobs successfully',
    data: result,
  });
});
//---------------------------------------------

//create get profile

//---------------------------------------------

export const JobControllers = {
  getAllJob,
  createJob,
};
