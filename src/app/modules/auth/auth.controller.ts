import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.service';

// login user controller
const accessToken = catchAsync(async (req, res) => {
  const email = req.body;
  const result = await AuthServices.accessToken(email);

  // Set access token in cookie
  res.cookie('accessToken', result, {
    secure: false,
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Access token created successfully!',
    data: {},
  });
});

//--------------------------------------------

// change password controller

//--------------------------------

//create refresh token
// const refreshToken = catchAsync(async (req, res) => {
//   const { refreshToken } = req.cookies;
//   const result = await AuthServices.refreshToken(refreshToken);

//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: 'Access token is retrieved succesfully!',
//     data: result,
//   });
// });
//--------------------------------

//forget Password token

//--------------------------------

//reset Password token

//--------------------------------

export const AuthControllers = {
  accessToken,
};
