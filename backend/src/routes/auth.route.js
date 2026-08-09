import express from 'express';

import { login, logout, signup } from '../controllers/auth.controller.js';
import { protectRoute } from '../middlewares/auth.middleware.js';
import { arcjetProtection } from '../middlewares/arcjet.middleware.js';
import upload from '../middlewares/multer.middleware.js';


const router = express.Router();

router.use(arcjetProtection);

router.post('/signup', upload.single("cv"), signup);
router.post('/login',login);
router.post('/logout',logout);

router.get('/check', protectRoute, (req, res)=> res.status(200).json(req.user));

export default router;