import { Router } from 'express';
import { jobRoutes } from '../modules/jobs/job.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/job',
    route: jobRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
