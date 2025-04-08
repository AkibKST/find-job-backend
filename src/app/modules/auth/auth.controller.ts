import config from '../../config';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.service';

// login user controller
const accessToken = catchAsync(async (req, res) => {
  const { email } = req.body;
  const result = await AuthServices.accessToken(email);

  // Set access token in cookie
  res.cookie('accessToken', result, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Access token created successfully!',
    data: result,
  });
});

//--------------------------------------------

//Remove token controller when user is logged out
const removeToken = catchAsync(async (req, res) => {
  // remove token from cookie
  res.clearCookie('accessToken', {
    httpOnly: true,
    secure: config.NODE_ENV === 'production',
    sameSite: config.NODE_ENV === 'production' ? 'none' : 'strict',
  });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Remove token successfully!',
    data: {},
  });
});
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
  removeToken,
};
