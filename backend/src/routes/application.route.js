import express from 'express';
import { protectRoute } from '../middlewares/auth.middleware.js';
import { applyToJob, getApplications, getMyApplications  } from '../controllers/application.controller.js';
import { arcjetProtection } from '../middlewares/arcjet.middleware.js';

const router = express.Router();

router.use(arcjetProtection, protectRoute);

router.post("/apply/:id", applyToJob);
router.get('/', getApplications);
router.get("/my", getMyApplications);

export default router;