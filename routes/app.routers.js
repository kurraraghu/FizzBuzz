import express from 'express';
import fizzBuzzRoutes from './fizzBuzz.js';
import HandlingErrors from '../middlewares/GlobalErrorHandler.js';

const router = express.Router();

router.get('/isalive', (req, res) =>
  res.json({
    status: 'ok',
  })
);

router.use('/fizzBuzz', fizzBuzzRoutes);

router.use(HandlingErrors);

export default router;
