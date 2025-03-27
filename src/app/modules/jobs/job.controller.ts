import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { JobServices } from './job.service';

//create job
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
  const email = req.query.email as string;

  // will call service func to send this data
  const result = await JobServices.getAllJobs(email);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Get All Jobs successfully',
    data: result,
  });
});
//---------------------------------------------

//create get single job by id
const getSingleJob = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await JobServices.getSingleJob(id);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Get Single Job successfully',
    data: result,
  });
});

//---------------------------------------------

export const JobControllers = {
  getAllJob,
  createJob,
  getSingleJob,
};
