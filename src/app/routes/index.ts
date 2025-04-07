import { Router } from 'express';
import { jobRoutes } from '../modules/jobs/job.route';
import { JobApplicationRoutes } from '../modules/jobApplication/jobApplication.route';
import { AuthRoutes } from '../modules/auth/auth.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/job',
    route: jobRoutes,
  },
  {
    path: '/jobApplication',
    route: JobApplicationRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
