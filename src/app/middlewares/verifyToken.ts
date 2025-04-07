/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import config from '../config';
import AppError from '../errors/AppError';
import catchAsync from '../utils/catchAsync';
import jwt from 'jsonwebtoken';

const verifyToken = catchAsync(async (req, res, next): Promise<void> => {
  const token = req?.cookies?.accessToken;

  if (!token) {
    throw new AppError(401, 'You are not authorized!');
  }

  jwt.verify(
    token,
    config.jwt_access_secret as string,
    (err: any, decoded: any) => {
      if (err) {
        throw new AppError(401, 'Unauthorized access!');
      }

      next();
    },
  );
});

export default verifyToken;
