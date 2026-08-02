import express from 'express';
import { createJob, deleteJob, getJobById, getJobs } from '../controllers/job.controller.js';
import { protectRoute } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.use(protectRoute);

router.post('/create',createJob);
router.get('/get', getJobs);
router.get('/get/:id', getJobById);
router.delete('/delete/:id',deleteJob);

export default router;