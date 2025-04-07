import express from 'express';
import { AuthControllers } from './auth.controller';

const router = express.Router();

//login route
router.post('/jwt-access-token', AuthControllers.accessToken);
//------------------------------------

//change password route

//------------------------------------

//refresh token route
// router.post(
//   '/refresh-token',
//   validateRequest(AuthValidation.refreshTokenValidationSchema),
//   AuthControllers.refreshToken,
// );
//------------------------------------

//forget password route

//------------------------------------

//reset password route

//------------------------------------

export const AuthRoutes = router;
