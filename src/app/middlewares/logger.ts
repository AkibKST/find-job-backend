import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';

const logger = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log('in side the logger middleware');
    next();
  },
);

export default logger;
