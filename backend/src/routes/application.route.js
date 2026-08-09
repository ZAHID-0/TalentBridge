import express from 'express';
import { protectRoute } from '../middlewares/auth.middleware.js';
import { applyToJob, getApplications } from '../controllers/application.controller.js';
import { arcjetProtection } from '../middlewares/arcjet.middleware.js';

const router = express.Router();

router.use(arcjetProtection, protectRoute);

router.post("/apply/:id", applyToJob);
router.get('/', getApplications);

export default router;