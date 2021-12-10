import express from 'express';
import fizzBuzzCtrl from '../controllers/fizzBuzz';
import fuzzBuzzValidation from '../validation/FizzBuzz';

const router = express.Router();

/** GET /api/fizzBuzz/:count - Get FizzBuzz */
router.route('/:count').get(fuzzBuzzValidation, fizzBuzzCtrl.get);
export default router;
