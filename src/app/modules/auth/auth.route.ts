import express from 'express';
import { AuthControllers } from './auth.controller';

const router = express.Router();

//access token route
router.post('/jwt-access-token', AuthControllers.accessToken);
//------------------------------------

//Remove token route when user is logged out
router.post('/jwt-clear-token', AuthControllers.removeToken);
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
