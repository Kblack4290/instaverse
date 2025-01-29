import express from 'express';
import { signin, signup, checkEmail } from '../controllers/users.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.post('/checkEmail', checkEmail);

export default router;