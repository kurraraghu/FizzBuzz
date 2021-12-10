import express from 'express';
import fizzBuzzRoutes from './fizzBuzz';

const router = express.Router();

router.get('/isalive', (req, res) =>
  res.json({
    status: 'ok',
  })
);

router.use('/fizzBuzz', fizzBuzzRoutes);

export default router;
